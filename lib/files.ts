"use server";

import { DeleteObjectCommand, GetObjectCommand, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

import { r2 } from "@/lib/interfaces/r2";

const MAX_FILE_SIZE = 125 * 1024 * 1024; // 125MB

interface GeneratePutSignedUrlParams {
  filename: string;
  size: number;
  type: string;
}

/**
 * Generates a pre-signed URL for uploading a file to R2.
 * @throws Error if file exceeds max size or signing fails
 */
export async function generatePutSignedUrl({
  filename,
  size,
  type,
}: GeneratePutSignedUrlParams): Promise<string> {
  if (size > MAX_FILE_SIZE) {
    throw new Error("File size exceeds maximum allowed (125MB).");
  }

  const signedUrl = await getSignedUrl(
    r2,
    new PutObjectCommand({
      Bucket: process.env.R2_BUCKET_NAME,
      Key: filename,
      ContentLength: size,
      ContentType: type,
    }),
    { expiresIn: 900 }
  );

  return signedUrl;
}

/**
 * Deletes files from R2 by their keys.
 * @throws Error if any deletion fails
 */
export async function deleteR2Files(keys: string[]): Promise<void> {
  if (keys.length === 0) return;

  const results = await Promise.allSettled(
    keys.map((key) => r2.send(new DeleteObjectCommand({ Bucket: process.env.R2_BUCKET_NAME, Key: key })))
  );

  const failed = results.filter((r) => r.status === "rejected");
  if (failed.length > 0) {
    throw new Error(`Failed to delete ${failed.length} file(s).`);
  }
}

/**
 * Gets a file from R2 as a ReadableStream.
 * @throws Error if file retrieval fails
 */
export async function getR2File(key: string): Promise<ReadableStream<Uint8Array>> {
  const response = await r2.send(new GetObjectCommand({ Bucket: process.env.R2_BUCKET_NAME, Key: key }));

  const bytes = await response.Body?.transformToByteArray();
  if (!bytes) {
    throw new Error("Failed to read file from storage.");
  }

  return new ReadableStream({
    start(controller) {
      controller.enqueue(bytes);
      controller.close();
    },
  });
}
