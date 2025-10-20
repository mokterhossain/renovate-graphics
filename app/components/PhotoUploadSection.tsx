"use client";

import React, { useState, useRef, DragEvent, ChangeEvent } from "react";

interface UploadedFile {
  file: File;
  preview: string;
}

const PhotoUploadSection: React.FC = () => {
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const maxFileSizeMB = 20;

  // Handle files selected by input or drag/drop
  const addFiles = (newFiles: FileList | null) => {
    if (!newFiles) return;

    const fileArray = Array.from(newFiles);

    const filteredFiles = fileArray.filter((file) => {
      if (file.size / 1024 / 1024 > maxFileSizeMB) {
        alert(
          `File "${file.name}" is too large. Max file size is ${maxFileSizeMB}MB.`
        );
        return false;
      }
      return true;
    });

    const newUploadedFiles = filteredFiles.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));

    // Avoid duplicates by file name and size
    setFiles((prev) => {
      const existingKeys = new Set(
        prev.map((f) => f.file.name + f.file.size.toString())
      );
      const filteredNew = newUploadedFiles.filter(
        (f) => !existingKeys.has(f.file.name + f.file.size.toString())
      );
      return [...prev, ...filteredNew];
    });
  };

  // Drag & drop handlers
  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    addFiles(e.dataTransfer.files);
  };

  // File input change
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    addFiles(e.target.files);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  // Remove file
  const removeFile = (index: number) => {
    setFiles((prev) => {
      URL.revokeObjectURL(prev[index].preview);
      const newFiles = [...prev];
      newFiles.splice(index, 1);
      return newFiles;
    });
  };

  // Handle continue button click
  const handleContinue = () => {
    if (files.length === 0) {
      alert("Please upload at least one photo.");
      return;
    }
    // TODO: handle upload or navigation
    alert(`${files.length} file(s) ready to upload!`);
  };

  return (
    <section className="upload-section">
      <h2 className="title">Upload Your Photos</h2>
      <p className="subtitle">
        Drag and drop your files here or{" "}
        <button
          className="upload-button"
          onClick={() => fileInputRef.current?.click()}
          type="button"
        >
          select files
        </button>
        . Max file size per image: {maxFileSizeMB}MB.
      </p>

      <div
        className="dropzone"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            fileInputRef.current?.click();
          }
        }}
      >
        <p>Drag & drop photos here</p>
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept="image/*"
          className="file-input"
          onChange={handleInputChange}
          aria-label="File Upload Input"
        />
      </div>

      {files.length > 0 && (
        <div className="preview-list">
          {files.map(({ file, preview }, i) => (
            <div className="preview-item" key={`${file.name}-${file.size}`}>
              <img src={preview} alt={file.name} />
              <button
                type="button"
                aria-label={`Remove ${file.name}`}
                onClick={() => removeFile(i)}
                className="remove-button"
              >
                ×
              </button>
              <p className="file-name" title={file.name}>
                {file.name.length > 20
                  ? file.name.slice(0, 17) + "..."
                  : file.name}
              </p>
            </div>
          ))}
        </div>
      )}

      <button className="continue-btn" onClick={handleContinue} type="button">
        Continue
      </button>

      <style jsx>{`
        .upload-section {
          max-width: 700px;
          margin: 2rem auto 4rem;
          padding: 2rem 1.5rem;
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 8px 24px rgb(0 0 0 / 0.12);
          font-family: "Open Sans", sans-serif;
          user-select: none;
          border: 3px dashed #8ca3af;
        }

        .title {
          font-weight: 700;
          font-size: 2rem;
          margin-bottom: 0.5rem;
          color: #222;
          text-align: center;
        }

        .subtitle {
          font-size: 1rem;
          margin-bottom: 1.75rem;
          color: #555;
          text-align: center;
        }

        .upload-button {
          background: none;
          border: none;
          color: #0070f3;
          cursor: pointer;
          text-decoration: underline;
          font-weight: 600;
          padding: 0;
          font-size: 1rem;
        }
        .upload-button:hover,
        .upload-button:focus {
          color: #0051a3;
          outline: none;
        }

        .dropzone {
          border: 2px dashed #8ca3af;
          border-radius: 16px;
          padding: 3rem 1rem;
          cursor: pointer;
          text-align: center;
          color: #8ca3af;
          font-weight: 600;
          font-size: 1.125rem;
          transition: border-color 0.3s ease, background-color 0.3s ease;
          user-select: none;
        }
        .dropzone:hover,
        .dropzone:focus {
          border-color: #0070f3;
          background-color: #e6f0ff;
          color: #0070f3;
          outline: none;
        }

        .file-input {
          display: none;
        }

        .preview-list {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin: 1.5rem 0 2rem;
          justify-content: center;
        }

        .preview-item {
          position: relative;
          width: 120px;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 15px rgb(0 0 0 / 0.08);
          background-color: #f9fafb;
          user-select: text;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .preview-item img {
          width: 100%;
          height: 90px;
          object-fit: cover;
          display: block;
          border-bottom: 1px solid #ddd;
          border-radius: 12px 12px 0 0;
        }

        .remove-button {
          position: absolute;
          top: 6px;
          right: 6px;
          background: rgba(0, 0, 0, 0.5);
          border: none;
          border-radius: 50%;
          width: 24px;
          height: 24px;
          color: #fff;
          font-weight: 700;
          cursor: pointer;
          line-height: 20px;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color 0.2s ease;
          user-select: none;
        }

        .remove-button:hover,
        .remove-button:focus {
          background: #ff4444;
          outline: none;
        }

        .file-name {
          font-size: 0.85rem;
          padding: 0.5rem 0.25rem;
          color: #333;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 100%;
          text-align: center;
        }

        .continue-btn {
  display: block;
  margin: 0 auto;
  background: linear-gradient(90deg, #0056d2 0%, #0099ff 100%);
  color: white;
  border: none;
  padding: 0.85rem 3.5rem;
  font-size: 1.25rem;
  font-weight: 700;
  border-radius: 30px;
  cursor: pointer;
  box-shadow: 0 6px 15px rgba(0, 153, 255, 0.5);
  transition: background 0.35s ease, box-shadow 0.35s ease, transform 0.2s ease;
  user-select: none;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-top: 15px;
}

.continue-btn:hover,
.continue-btn:focus {
  background: linear-gradient(90deg, #007bff 0%, #00c3ff 100%);
  box-shadow: 0 10px 25px rgba(0, 195, 255, 0.7);
  transform: translateY(-3px);
  outline: none;
}

.continue-btn:active {
  transform: translateY(1px);
  box-shadow: 0 4px 12px rgba(0, 195, 255, 0.5);
}


        @media (max-width: 480px) {
          .preview-item {
            width: 90px;
          }
          .preview-item img {
            height: 70px;
          }
        }
      `}</style>
    </section>
  );
};

export default PhotoUploadSection;
