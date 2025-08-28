"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { AlertTriangle } from "lucide-react";

export default function MP3Youtube() {
    const [youtubeUrl, setYoutubeUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
    const [downloadFilename, setDownloadFilename] = useState<string | null>(null);

    const backendUrl = process.env.NEXT_PUBLIC_API_URL;

    const handleDownload = async () => {
        if (!youtubeUrl.trim()) {
            toast.error("Please paste a YouTube URL", {
                icon: <AlertTriangle className="text-red-500" />,
            });
            return;
        }

        setLoading(true);
        setDownloadUrl(null);
        setDownloadFilename(null);

        try {
            const res = await fetch(`${backendUrl}/youtube-mp3`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ url: youtubeUrl.trim() }),
            });

            console.log("Sending payload:", { url: youtubeUrl.trim() });

            if (!res.ok) throw new Error("Download failed");

            const blob = await res.blob();
            const disposition = res.headers.get("Content-Disposition");
            const match = disposition?.match(/filename="?([^"]+)"?/);
            const filename = match?.[1] || "youtube.mp3";

            const blobUrl = URL.createObjectURL(blob);
            setDownloadUrl(blobUrl);
            setDownloadFilename(filename);

            const a = document.createElement("a");
            a.href = blobUrl;
            a.download = filename;
            document.body.appendChild(a);
            a.click();
            a.remove();
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (err: any) {
            toast.error("Something went wrong", {
                description: err?.message || "Please try again later.",
                icon: <AlertTriangle className="text-red-500" />,
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="py-10 px-4">
            <div className="max-w-xl mx-auto shadow-lg rounded-2xl p-6">
                <h2 className="text-xl font-semibold mb-4 text-center">
                    YouTube to MP3
                </h2>

                <div className="mb-6">
                    <Label className="text-sm mb-1">YouTube URL</Label>
                    <Input
                        type="text"
                        placeholder="Paste YouTube video link here"
                        value={youtubeUrl}
                        onChange={(e) => setYoutubeUrl(e.target.value)}
                    />
                </div>

                <Button
                    disabled={!youtubeUrl.trim() || loading}
                    onClick={handleDownload}
                    className="w-full"
                >
                    {loading ? "Processing..." : "Download MP3"}
                </Button>

                {downloadUrl && downloadFilename && (
                    <a
                        href={downloadUrl}
                        download={downloadFilename}
                        className="block text-center text-blue-600 underline text-sm mt-4"
                    >
                        Download Result ({downloadFilename})
                    </a>
                )}
            </div>
        </main>
    );
}
