"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { AlertTriangle } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function QRGenerator() {
    const [text, setText] = useState("");
    const [loading, setLoading] = useState(false);
    const [qrUrl, setQrUrl] = useState<string | null>(null);
    const [filename, setFilename] = useState("qr-code.png");

    const backendUrl = process.env.NEXT_PUBLIC_API_URL;

    const handleGenerate = async () => {
        if (!text.trim()) {
            toast.error("Please enter some text or URL");
            return;
        }

        setLoading(true);
        setQrUrl(null);

        try {
            const res = await fetch(`${backendUrl}/qr-generator`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ text }),
            });

            if (!res.ok) throw new Error("QR generation failed");

            const blob = await res.blob();
            const disposition = res.headers.get("Content-Disposition");
            const match = disposition?.match(/filename="?([^"]+)"?/);
            const name = match?.[1] || "qr-code.png";

            const blobUrl = URL.createObjectURL(blob);
            setQrUrl(blobUrl);
            setFilename(name);
        } catch (err) {
            const error = err as Error;
            toast.error("Something went wrong", {
                description: error.message || "Please try again later.",
                icon: <AlertTriangle className="text-red-500" />,
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="py-10 px-4">
            <div className="max-w-md mx-auto shadow-lg rounded-2xl p-6">
                <h2 className="text-xl font-semibold mb-4 text-center">QR Code Generator</h2>

                <Input
                    placeholder="Enter text or URL"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="mb-4"
                />

                <Button
                    disabled={!text.trim() || loading}
                    onClick={handleGenerate}
                    className="w-full"
                >
                    {loading ? "Generating..." : "Generate"}
                </Button>

                {qrUrl && (
                    <div className="mt-6 flex flex-col items-center gap-4">
                        <Avatar className="w-48 h-48 shadow-lg border rounded-xl">
                            <AvatarImage src={qrUrl} alt="QR Code" />
                            <AvatarFallback>QR</AvatarFallback>
                        </Avatar>
                        <a
                            href={qrUrl}
                            download={filename}
                            className="text-blue-600 underline text-sm"
                        >
                            Download
                        </a>
                    </div>
                )}
            </div>
        </main>
    );
}
