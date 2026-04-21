import { PutObjectCommand } from "@aws-sdk/client-s3";
import { NextRequest, NextResponse } from "next/server";

import { getR2 } from "@/lib/interfaces/r2";

const FILES_DOMAIN = process.env.NEXT_PUBLIC_FILES_DOMAIN;
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB for label images

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;
    const pathname = formData.get("pathname") as string | null;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    if (!pathname) {
      return NextResponse.json({ error: "No pathname provided" }, { status: 400 });
    }

    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json({ error: "File too large (max 10MB)" }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    await getR2().send(
      new PutObjectCommand({
        Bucket: process.env.R2_BUCKET_NAME,
        Key: pathname,
        Body: buffer,
        ContentType: file.type,
      })
    );

    const url = `${FILES_DOMAIN}/${pathname}`;

    return NextResponse.json({ url });
  } catch (error) {
    console.error("[Upload error]", error);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
