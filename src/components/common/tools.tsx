"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { AlertTriangle, UploadCloud, FileText, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

type Props = {
    title: string;
    accept: string;
    multiple: boolean;
    endpoint: string;
    extra?: React.ReactNode;
};

export function Tools({ title, accept, multiple, endpoint, extra }: Props) {
    const [files, setFiles] = useState<File[]>([]);
    const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
    const [downloadFilename, setDownloadFilename] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [isDragOver, setIsDragOver] = useState(false);
    const [compressionLevel, setCompressionLevel] = useState("medium");
    const [ocrText, setOcrText] = useState<string | null>(null);
    const [ocrLanguage, setOcrLanguage] = useState("en");

    const backendUrl = process.env.NEXT_PUBLIC_API_URL;

    const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const uploaded = e.target.files;
        if (!uploaded) return;
        setDownloadUrl(null);
        setDownloadFilename(null);
        setFiles(multiple ? Array.from(uploaded) : [uploaded[0]]);
    };

    const handleDrop = (e: React.DragEvent<HTMLLabelElement>) => {
        e.preventDefault();
        setIsDragOver(false);
        const dropped = e.dataTransfer.files;
        if (!dropped) return;
        setDownloadUrl(null);
        setDownloadFilename(null);
        setFiles(multiple ? Array.from(dropped) : [dropped[0]]);
    };

    const handleDragOver = (e: React.DragEvent<HTMLLabelElement>) => {
        e.preventDefault();
        setIsDragOver(true);
    };

    const handleDragLeave = () => {
        setIsDragOver(false);
    };

    const handleRemove = (index: number) => {
        setFiles(prev => prev.filter((_, i) => i !== index));
    };

    const handleConvert = async () => {
        if (!files.length) return;

        const formData = new FormData();
        const key = multiple ? "files" : "file";

        if (multiple) {
            files.forEach(file => formData.append(key, file));
        } else {
            formData.append(key, files[0]);
        }

        if (endpoint === "/compress" || endpoint === "/image-compress") {
            formData.append("power", compressionLevel);
        }

        if (endpoint === "/split") {
            const rangeInput = document.getElementById("ranges") as HTMLInputElement;
            if (rangeInput?.value) {
                formData.append("ranges", rangeInput.value);
            }
        }

        if (endpoint === "/image-to-text") {
            formData.append("lang", ocrLanguage);
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
                    setDownloadFilename("output.zip");
                } else if (json.text) {
                    setOcrText(json.text);
                }
            } else {
                const blob = await res.blob();

                const disposition = res.headers.get("Content-Disposition");
                const match = disposition?.match(/filename="?([^"]+)"?/);
                const filename = match?.[1] || "download";

                const blobUrl = URL.createObjectURL(blob);
                setDownloadUrl(blobUrl);
                setDownloadFilename(filename);

                // Optionally auto-download:
                const a = document.createElement("a");
                a.href = blobUrl;
                a.download = filename;
                document.body.appendChild(a);
                a.click();
                a.remove();
            }
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

    const isImage = (file: File) => file.type.startsWith("image/");

    return (
        <main className="py-10 px-4">
            <div className="max-w-xl mx-auto shadow-lg rounded-2xl p-6">
                <h2 className="text-xl font-semibold mb-4 text-center">{title}</h2>

                <label
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    className={cn(
                        "w-full h-36 border-2 border-dashed rounded-lg flex flex-col items-center justify-center transition cursor-pointer",
                        isDragOver ? "border-primary bg-muted" : "border-muted"
                    )}
                >
                    <UploadCloud className="w-12 h-12 text-muted-foreground mb-2" />
                    <p className="text-sm text-muted-foreground mb-1">
                        Drag & drop your file(s) here
                    </p>
                    <p className="text-xs text-muted-foreground">or click to select manually</p>
                    <Input
                        type="file"
                        accept={accept}
                        multiple={multiple}
                        onChange={handleUpload}
                        className="hidden"
                    />
                </label>

                {files.length > 0 && (
                    <div className="mt-4 w-full text-sm space-y-2">
                        {files.map((file, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-3 text-muted-foreground bg-muted px-3 py-2 rounded-md"
                            >
                                {isImage(file) ? (
                                    <Avatar className="w-8 h-8">
                                        <AvatarImage src={URL.createObjectURL(file)} alt={file.name} />
                                        <AvatarFallback>{file.name[0]?.toUpperCase()}</AvatarFallback>
                                    </Avatar>
                                ) : (
                                    <FileText className="w-5 h-5 text-muted-foreground" />
                                )}
                                <span className="truncate flex-1">{file.name}</span>
                                <button onClick={() => handleRemove(index)}>
                                    <X className="w-4 h-4 text-red-500 hover:text-red-700" />
                                </button>
                            </div>
                        ))}
                    </div>
                )}

                {extra && <div className="mt-4">{extra}</div>}

                {(endpoint === "/compress" || endpoint === "/image-compress") && (
                    <div className="mt-6">
                        <Label className="text-sm mb-1">Compression level</Label>
                        <Select value={compressionLevel} onValueChange={setCompressionLevel}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select level" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="low">Low (best quality)</SelectItem>
                                <SelectItem value="medium">Medium</SelectItem>
                                <SelectItem value="high">High (smallest size)</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                )}

                {endpoint === "/image-to-text" && (
                    <div className="mt-6">
                        <Label className="text-sm mb-1">OCR Language</Label>
                        <Select value={ocrLanguage} onValueChange={setOcrLanguage}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Choose OCR language" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="en">🇺🇸 - English</SelectItem>
                                <SelectItem value="id">🇮🇩 - Indonesian</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                )}


                <div className="mt-6">
                    <Button disabled={!files.length || loading} onClick={handleConvert} className="w-full">
                        {loading ? "Processing..." : "Process"}
                    </Button>
                </div>

                {downloadUrl && downloadFilename && (
                    <>
                        <a
                            href={downloadUrl}
                            download={downloadFilename}
                            className="block text-center text-blue-600 underline text-sm mt-4"
                        >
                            Download Result ({downloadFilename})
                        </a>

                        {downloadFilename.endsWith(".png") && (
                            <div className="flex justify-center mt-4">
                                <Avatar className="w-32 h-32 shadow-lg border rounded-xl">
                                    <AvatarImage src={downloadUrl} alt="Preview" />
                                    <AvatarFallback>IMG</AvatarFallback>
                                </Avatar>
                            </div>
                        )}
                    </>
                )}

                {ocrText && (
                    <div className="mt-6">
                        <h4 className="font-medium text-sm mb-2 text-muted-foreground">Extracted Text</h4>
                        <pre className="bg-muted p-3 rounded-md text-sm whitespace-pre-wrap max-h-80 overflow-auto">
                            {ocrText}
                        </pre>
                    </div>
                )}

            </div>
        </main>
    );
}
