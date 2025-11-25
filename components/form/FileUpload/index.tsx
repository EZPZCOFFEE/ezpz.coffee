"use client";

import { Field, FileUpload } from "@ark-ui/react";
import type { FileUploadFileChangeDetails, FileUploadFileError, FileUploadFileMimeType } from "@ark-ui/react";
import classNames from "classnames";
import { useState } from "react";
import type { FieldValues, Path, PathValue } from "react-hook-form";
import { useController, useFormContext } from "react-hook-form";

import { UploadIcon } from "@/components/icons/UploadIcon";

import styles from "./styles.module.scss";

type AcceptProp = Record<string, string[]> | FileUploadFileMimeType | FileUploadFileMimeType[];

interface FileUploadInputProps<TFieldValues extends FieldValues = FieldValues> {
  name: Path<TFieldValues>;
  label?: string;
  helperText?: string;
  accept?: AcceptProp;
  maxFiles?: number;
  recommendedSize?: string;
  disabled?: boolean;
  required?: boolean;
  className?: string;
}

const DEFAULT_ACCEPT: AcceptProp = {
  "image/*": [],
};

const DEFAULT_RECOMMENDATION = "Upload a square JPG or PNG (min 1800px)";

const getRejectionMessage = (code?: FileUploadFileError): string | null => {
  if (!code) return null;

  switch (code) {
    case "FILE_INVALID_TYPE":
      return "Only PNG or JPG image files are allowed.";
    case "FILE_TOO_LARGE":
      return "Your file is too large. Keep it under 10MB.";
    case "FILE_TOO_SMALL":
      return "Your file is too small. Upload a higher resolution image.";
    case "TOO_MANY_FILES":
      return "Only one artwork file can be uploaded.";
    default:
      return "We couldn't upload that file. Check the requirements and try again.";
  }
};

const FileUploadInput = <TFieldValues extends FieldValues = FieldValues>({
  name,
  label,
  accept = DEFAULT_ACCEPT,
  maxFiles = 1,
  recommendedSize = DEFAULT_RECOMMENDATION,
  disabled,
  required,
  className,
}: FileUploadInputProps<TFieldValues>) => {
  const { control } = useFormContext<TFieldValues>();
  const {
    field: { value, onChange, onBlur, ref, name: fieldName },
    fieldState,
  } = useController<TFieldValues>({
    name,
    control,
    defaultValue: [] as PathValue<TFieldValues, Path<TFieldValues>>,
  });

  const [rejectionMessage, setRejectionMessage] = useState<string | null>(null);
  const acceptedFiles = (Array.isArray(value) ? value : []).slice(0, maxFiles) as File[];
  const hasFiles = acceptedFiles.length > 0;

  const handleFileChange = (details: FileUploadFileChangeDetails) => {
    const [firstRejected] = details.rejectedFiles;
    const rejectionCode = firstRejected?.errors?.[0];
    setRejectionMessage(getRejectionMessage(rejectionCode));
    const limitedFiles = (details.acceptedFiles ?? []).slice(0, maxFiles);
    onChange(limitedFiles as PathValue<TFieldValues, Path<TFieldValues>>);
  };

  const errorMessage = fieldState.error?.message ?? rejectionMessage ?? undefined;

  return (
    <Field.Root
      className={classNames(styles.root, className)}
      invalid={Boolean(errorMessage)}
      required={required}
      data-disabled={disabled ? "true" : "false"}
    >
      {label && <Field.Label className={styles.label}>{label}</Field.Label>}

      <FileUpload.Root
        className={styles.uploadRoot}
        name={fieldName}
        accept={accept}
        maxFiles={maxFiles}
        onFileChange={handleFileChange}
        acceptedFiles={acceptedFiles}
        disabled={disabled}
        required={required}
      >
        <FileUpload.HiddenInput ref={ref} name={fieldName} onBlur={onBlur} />

        <FileUpload.Trigger className={styles.trigger} disabled={disabled} type="button">
          <div className={styles.triggerContent}>
            <span className={styles.triggerIcon}>
              <UploadIcon />
            </span>
          </div>

          <span className={styles.triggerText}>Upload image</span>
        </FileUpload.Trigger>

        <p className={styles.recommendation}>
          recommended size: <span>{recommendedSize}</span>
        </p>

        {hasFiles && (
          <FileUpload.ItemGroup className={styles.fileList} type="accepted">
            {acceptedFiles.map((file) => {
              const showPreview = file.type?.startsWith("image/");

              return (
                <FileUpload.Item key={`${file.name}-${file.size}`} file={file} className={styles.fileItem}>
                  <div className={styles.fileContent}>
                    {showPreview && (
                      <FileUpload.ItemPreview className={styles.filePreview} type="image/.*">
                        <FileUpload.ItemPreviewImage
                          className={styles.filePreviewImage}
                          alt={`${file.name} preview`}
                        />
                      </FileUpload.ItemPreview>
                    )}

                    <div className={styles.fileDetails}>
                      <FileUpload.ItemName className={styles.fileName} />
                      <FileUpload.ItemSizeText className={styles.fileSize} />
                    </div>
                  </div>
                  <FileUpload.ItemDeleteTrigger className={styles.deleteTrigger} type="button">
                    Remove
                  </FileUpload.ItemDeleteTrigger>
                </FileUpload.Item>
              );
            })}
          </FileUpload.ItemGroup>
        )}
      </FileUpload.Root>

      {errorMessage && <Field.ErrorText className={styles.errorText}>{errorMessage}</Field.ErrorText>}
    </Field.Root>
  );
};

export default FileUploadInput;
