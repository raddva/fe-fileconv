"use client"

import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { File, Split, FileCog, FileText, ImageIcon, Presentation, Sheet, Pencil } from "lucide-react"

const tools = [
  {
    title: "Merge PDF",
    description: "Combine PDFs in the order you want with the easiest PDF merger.",
    href: "/pdf-tools/merge",
    icon: <File className="text-red-500" />,
    badge: "",
  },
  {
    title: "Split PDF",
    description: "Separate one page or a whole set for easy conversion into independent files.",
    href: "/pdf-tools/split",
    icon: <Split className="text-orange-500" />,
    badge: "",
  },
  {
    title: "Compress PDF",
    description: "Reduce file size while optimizing for maximal PDF quality.",
    href: "/pdf-tools/compress",
    icon: <FileCog className="text-green-500" />,
    badge: "",
  },
  {
    title: "PDF to Image",
    description: "Convert PDF files to high-quality images and vice versa.",
    href: "/pdf-convert/image",
    icon: <ImageIcon className="text-pink-500" />,
    badge: "",
  },
  {
    title: "PDF to Word",
    description: "Convert PDF files into editable DOC and DOCX documents.",
    href: "/pdf-convert/word",
    icon: <FileText className="text-blue-500" />,
    badge: "⚠️ Maintenance",
  },
  {
    title: "PDF to PowerPoint",
    description: "Convert PDFs into PPTX slideshows.",
    href: "/pdf-convert/ppt",
    icon: <Presentation className="text-orange-400" />,
    badge: "⚠️ Maintenance",
  },
  {
    title: "PDF to Excel",
    description: "Convert tables from PDF into editable Excel files.",
    href: "/pdf-convert/xls",
    icon: <Sheet className="text-green-600" />,
    badge: "⚠️ Maintenance",
  },
  {
    title: "Edit PDF",
    description: "Add text, images, or annotations to your PDFs.",
    href: "/pdf-convert/pdf-edit",
    icon: <Pencil className="text-purple-600" />,
    badge: "🛠️ Coming Soon",
    is_disabled: true,
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
