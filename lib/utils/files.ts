import { deleteR2Files } from "@/lib/files";

const FILES_DOMAIN = process.env.NEXT_PUBLIC_FILES_DOMAIN;

/**
 * Extracts the R2 key from a full file URL.
 * e.g., "https://files.example.com/uploads/image.png" → "uploads/image.png"
 */
export function getFileKey(url: string): string | null {
  if (!FILES_DOMAIN) return null;

  try {
    const parsed = new URL(url);
    const domainUrl = new URL(FILES_DOMAIN);

    if (parsed.host !== domainUrl.host) return null;

    // Remove leading slash from pathname
    return parsed.pathname.replace(/^\//, "");
  } catch {
    return null;
  }
}

export interface FileUpload {
  pathname: string;
  file: File | Blob;
}

interface UploadErrorResponse {
  error?: string;
}

interface UploadSuccessResponse {
  url: string;
}

/**
 * Uploads a file to R2 storage via the server API.
 * @returns The public URL of the uploaded file
 * @throws Error if upload fails
 */
export async function uploadFile(upload: FileUpload): Promise<string> {
  const { pathname, file } = upload;

  const formData = new FormData();
  formData.append("file", file);
  formData.append("pathname", pathname);

  const response = await fetch("/api/upload", {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    const error = (await response.json().catch(() => ({
      error: "Upload failed",
    }))) as UploadErrorResponse;
    throw new Error(error.error ?? `Upload failed: ${response.status}`);
  }

  const { url } = (await response.json()) as UploadSuccessResponse;
  return url;
}

/**
 * Uploads multiple files to R2 storage.
 * @returns Array of public URLs for uploaded files
 * @throws Error if any upload fails
 */
export async function uploadFiles(uploads: FileUpload[]): Promise<string[]> {
  return Promise.all(uploads.map(uploadFile));
}

/**
 * Deletes files from R2 storage by their public URLs.
 * @throws Error if deletion fails
 */
export async function deleteFiles(urls: string[]): Promise<void> {
  const keys = urls.map(getFileKey).filter((key): key is string => key !== null);

  if (keys.length === 0) {
    throw new Error("No valid file keys found in URLs.");
  }

  await deleteR2Files(keys);
}

/**
 * Proxies a file URL through the local API to avoid CORS issues.
 * Only proxies URLs from the configured FILES_DOMAIN.
 */
export function maybeProxy(url: string): string {
  if (!FILES_DOMAIN || !url.startsWith(`${FILES_DOMAIN}/`)) {
    return url;
  }

  const proxyUrl = new URL("/api/image-proxy", window.location.origin);
  const key = getFileKey(url);

  if (key) {
    proxyUrl.searchParams.set("key", key);
  } else {
    proxyUrl.searchParams.set("url", url);
  }

  return proxyUrl.toString();
}
