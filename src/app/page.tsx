"use client"

import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { File, Split, FileCog, FileText, ImageIcon, Presentation, Sheet, Pencil, Crop, ImageUpscale, ImageDown, Images, FileImage, ScanText, QrCode } from "lucide-react"

const tools = [
  {
    title: "Merge PDF",
    description: "Combine PDFs in the order you want with the easiest PDF merger.",
    href: "/pdf-tools/merge",
    icon: <File className="text-emerald-600" />,
    badge: "",
  },
  {
    title: "Split PDF",
    description: "Separate one page or a whole set for easy conversion into independent files.",
    href: "/pdf-tools/split",
    icon: <Split className="text-rose-500" />,
    badge: "",
  },
  {
    title: "Compress PDF",
    description: "Reduce file size while optimizing for maximal PDF quality.",
    href: "/pdf-tools/compress",
    icon: <FileCog className="text-amber-600" />,
    badge: "",
  },
  {
    title: "PDF to Image",
    description: "Convert PDF files to high-quality images and vice versa.",
    href: "/pdf-convert/image",
    icon: <ImageIcon className="text-sky-500" />,
    badge: "",
  },
  {
    title: "PDF to Word",
    description: "Convert PDF files into editable DOC and DOCX documents.",
    href: "/pdf-convert/word",
    icon: <FileText className="text-indigo-500" />,
    badge: "",
  },
  {
    title: "PDF to PowerPoint",
    description: "Convert PDFs into PPTX slideshows.",
    href: "/pdf-convert/ppt",
    icon: <Presentation className="text-orange-500" />,
    badge: "",
  },
  {
    title: "PDF to Excel",
    description: "Convert tables from PDF into editable Excel files.",
    href: "/pdf-convert/xls",
    icon: <Sheet className="text-green-500" />,
    badge: "",
  },
  {
    title: "Edit PDF",
    description: "Add text, images, or annotations to your PDFs.",
    href: "/pdf-convert/pdf-edit",
    icon: <Pencil className="text-purple-500" />,
    badge: "🛠️ Coming Soon",
    is_disabled: true,
  },
  {
    title: "Remove Image Background",
    description: "Easily remove backgrounds from images with our AI-powered tool.",
    href: "/image-tools/remove-bg",
    icon: <Images className="text-fuchsia-500" />,
    badge: "",
    is_disabled: false,
  },
  {
    title: "Compress Image",
    description: "Reduce image file size without losing quality.",
    href: "/image-tools/compress",
    icon: <ImageDown className="text-amber-500" />,
    badge: "",
    is_disabled: false,
  },
  {
    title: "Upscale Image",
    description: "Enhance image resolution and quality with AI upscaling.",
    href: "/image-tools/upscale",
    icon: <ImageUpscale className="text-emerald-500" />,
    badge: "",
    is_disabled: false,
  },
  {
    title: "Crop Image",
    description: "Crop images to focus on the important parts.",
    href: "/image-tools/crop",
    icon: <Crop className="text-pink-500" />,
    badge: "",
    is_disabled: false,
  },
  {
    title: "Convert to JPG",
    description: "Convert any image format to JPG quickly and easily.",
    href: "/image-tools/to-jpg",
    icon: <FileImage className="text-red-500" />,
    badge: "",
    is_disabled: false,
  },
  {
    title: "Image to Text",
    description: "Extract text from images using OCR technology.",
    href: "/image-tools/to-text",
    icon: <ScanText className="text-indigo-500" />,
    badge: "",
    is_disabled: false,
  },
  {
    title: "QR Code Generator",
    description: "Generate QR code of your link.",
    href: "/others/qr-generator",
    icon: <QrCode className="text-cyan-500" />,
    badge: "⭐ New!",
    is_disabled: false,
  },
  {
    title: "Image Editor",
    description: "Edit images with various tools like filters, text, and more.",
    href: "/image-tools/editor",
    icon: <ImageIcon className="text-violet-500" />,
    badge: "🛠️ Coming Soon",
    is_disabled: true,
  },
  {
    title: "YT MP3 Downloader",
    description: "Download Audio From YouTube URL",
    href: "/youtube/mp3",
    icon: <ImageIcon className="text-blue-500" />,
    badge: "NEW!!!",
    is_disabled: false,
  },
]

export default function DashboardPage() {
  return (
    <div className="flex flex-col">
      <section className="text-center px-4 py-16">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight bg-gradient-to-r from-rose-500 via-pink-500 to-red-500 bg-clip-text text-transparent leading-tight pb-1">
          Your complete File toolbox — fast, easy, and free
        </h1>
        <p className="mt-2 text-muted-foreground text-base max-w-2xl mx-auto">
          100% Free and easy to use.
        </p>
      </section>

      <main className="flex-grow grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6 max-w-7xl mx-auto">
        {tools.map((tool) =>
          tool.is_disabled ? (
            <div
              key={tool.title}
              className="border rounded-xl p-4 flex flex-col gap-2 cursor-not-allowed opacity-60"
            >
              <div className="flex items-center justify-between">
                <div className="text-2xl">{tool.icon}</div>
                {tool.badge && <Badge className="text-xs">{tool.badge}</Badge>}
              </div>
              <div className="text-lg font-semibold">{tool.title}</div>
              <p className="text-muted-foreground text-sm">{tool.description}</p>
            </div>
          ) : (
            <Link
              key={tool.title}
              href={tool.href}
              className="border rounded-xl p-4 flex flex-col gap-2 transition duration-300 transform hover:scale-[1.03] hover:border-primary"
            >
              <div className="flex items-center justify-between">
                <div className="text-2xl">{tool.icon}</div>
                {tool.badge && <Badge className="text-xs">{tool.badge}</Badge>}
              </div>
              <div className="text-lg font-semibold">{tool.title}</div>
              <p className="text-muted-foreground text-sm">{tool.description}</p>
            </Link>
          )
        )}
      </main>
    </div>
  );
}
