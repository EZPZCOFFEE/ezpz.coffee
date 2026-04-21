import "server-only";

import { S3Client } from "@aws-sdk/client-s3";

const r2ClientSingleton = () => {
  if (!process.env.R2_ACCOUNT_ID || !process.env.R2_ACCESS_KEY_ID || !process.env.R2_SECRET_ACCESS_KEY) {
    throw new Error("Missing R2 env vars. Expected R2_ACCOUNT_ID/R2_ACCESS_KEY_ID/R2_SECRET_ACCESS_KEY.");
  }

  return new S3Client({
    region: "auto",
    endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
    credentials: {
      accessKeyId: process.env.R2_ACCESS_KEY_ID,
      secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
    },
  });
};

declare const globalThis: {
  r2Global: ReturnType<typeof r2ClientSingleton> | undefined;
} & typeof global;

export const getR2 = (): ReturnType<typeof r2ClientSingleton> => {
  if (globalThis.r2Global) return globalThis.r2Global;
  const client = r2ClientSingleton();
  if (process.env.VERCEL_ENV !== "production") globalThis.r2Global = client;
  return client;
};
