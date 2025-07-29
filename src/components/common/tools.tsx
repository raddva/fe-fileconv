"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";

type Props = {
    title: string;
    accept: string;
    multiple: boolean;
    endpoint: string;
};

export function Tools({ title, accept, multiple, endpoint }: Props) {
    const [files, setFiles] = useState<FileList | null>(null);
    const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const backendUrl = "http://localhost:5000";

    const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFiles(e.target.files);
        setDownloadUrl(null);
    };

    const handleConvert = async () => {
        if (!files || files.length === 0) return;

        const formData = new FormData();
        const key = multiple ? "files" : "file";

        if (multiple) {
            Array.from(files).forEach(file => formData.append(key, file));
        } else {
            formData.append(key, files[0]);
        }

        setLoading(true);
        try {
            const res = await fetch(`${backendUrl}${endpoint}`, {
                method: "POST",
                body: formData,
            });

            if (!res.ok) throw new Error("Conversion failed");

            const contentType = res.headers.get("Content-Type") || "";
            if (contentType.includes("application/json")) {
                const json = await res.json();
                if (json.images?.length) {
                    setDownloadUrl(json.images[0]);
                }
            } else {
                const blob = await res.blob();
                const disposition = res.headers.get("Content-Disposition");
                const match = disposition?.match(/filename="?([^"]+)"?/);
                const filename = match?.[1] || "download";

                const blobUrl = URL.createObjectURL(blob);
                setDownloadUrl(blobUrl);

                const a = document.createElement("a");
                a.href = blobUrl;
                a.download = filename;
                document.body.appendChild(a);
                a.click();
                a.remove();
            }
        } catch (err) {
            alert("Something went wrong.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="min-h-screen py-10 px-4">
            <div className="max-w-xl mx-auto shadow-lg rounded-2xl p-6">
                <h2 className="text-xl font-semibold mb-4 text-center">{title}</h2>
                <div className="flex flex-col items-center gap-4">
                    <input
                        type="file"
                        accept={accept}
                        multiple={multiple}
                        onChange={handleUpload}
                        className="w-full"
                    />
                    <Button disabled={!files || loading} onClick={handleConvert} className="w-full">
                        {loading ? "Processing..." : title}
                    </Button>
                    {downloadUrl && (
                        <a href={downloadUrl} download className="text-blue-600 underline text-sm mt-2">
                            Download Result
                        </a>
                    )}
                </div>
            </div>
        </main>
    );
}
