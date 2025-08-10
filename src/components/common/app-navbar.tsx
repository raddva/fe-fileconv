"use client"

import * as React from "react"
import Link from "next/link"
import { Crop, File, FileCog, FileImage, FileText, Globe, Home, ImageDown, ImageIcon, Images, ImageUpscale, Menu, Merge, Presentation, QrCode, SheetIcon, Split } from "lucide-react"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { DarkmodeToggle } from "./mode-toggle"
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip"
import {
    Sheet,
    SheetTrigger,
    SheetContent,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet"
import { Separator } from "../ui/separator"

const fileTools = [
    {
        title: "PDF - DOCX",
        href: "/pdf-convert/word",
        description: "Convert PDF files to Word & vice versa.",
    },
    {
        title: "PDF - IMG",
        href: "/pdf-convert/image",
        description: "Convert PDF files to Image & vice versa.",
    },
    {
        title: "PDF - XLSX",
        href: "/pdf-convert/xls",
        description: "Convert PDF files to Excel & vice versa.",
    },
    {
        title: "PDF - PPTX",
        href: "/pdf-convert/ppt",
        description: "Convert PDF files to PowerPoint & vice versa.",
    },
]

const pdfTools = [
    {
        title: "Merge PDFs",
        href: "/pdf-tools/merge",
        description: "Merge multiple PDF files into a single document.",
    },
    {
        title: "Split PDFs",
        href: "/pdf-tools/split",
        description: "Split your PDF files into multiple smaller files based on page ranges or size.",
    },
    {
        title: "Compress PDFs",
        href: "/pdf-tools/compress",
        description: "Compress your PDF files to reduce their size without losing quality.",
    },
]

const imgTools = [
    {
        title: "Remove Background",
        href: "/image-tools/remove-bg",
        description: "Remove the background from your images easily",
    },
    {
        title: "Upscale Image",
        href: "/image-tools/upscale",
        description: "Upscale your images to higher resolutions without losing quality",
    },
    {
        title: "Compress Image",
        href: "/image-tools/compress",
        description: "Compress your image files to reduce their size",
    },
    {
        title: "Convert to JPG",
        href: "/image-tools/jpg-convert",
        description: "Convert any image format to JPG",
    },
    // {
    //     title: "Resize Image",
    //     href: "/image-tools/resize",
    //     description: "Resize your images to fit your needs",
    // },
    {
        title: "Crop Image",
        href: "/image-tools/crop",
        description: "Crop your images to a specific size or aspect ratio",
    },
    {
        title: "Image to Text",
        href: "/image-tools/to-text",
        description: "Extract text from your images",
    },
    {
        title: "QR Code Generator",
        href: "/others/qr-generator",
        description: "Generate QR Code from your link",
    },
]

export function Navbar() {
    return (
        <header className="w-full border-b bg-background z-50">
            <div className="flex items-center h-16 px-4 justify-between">
                <div className="flex items-center gap-2 font-bold">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="bg-gradient-to-r from-red-500 to-pink-500 p-2 rounded-md flex items-center justify-center">
                            <File className="size-5" />
                        </div>
                        <span className="bg-gradient-to-r from-red-500 to-pink-500 text-transparent bg-clip-text">FILECONV</span>
                    </Link>
                </div>

                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
                    <NavigationMenu>
                        <NavigationMenuList className="flex items-center gap-4">
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                    <Link href="/">Home</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Convert PDF</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid lg:grid-cols-[.75fr_1fr] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                        <li className="row-span-4">
                                            <Link
                                                href="/about"
                                                className="bg-gradient-to-b from-red-500 to-pink-500 flex h-full w-full flex-col justify-end rounded-md p-6 no-underline outline-none select-none focus:shadow-md"
                                            >
                                                <div className="mt-4 mb-2 text-lg font-bold">Fileconv</div>
                                                <p className="text-sm leading-tight">
                                                    A powerful open-source toolset by Nadya. Learn more →
                                                </p>
                                            </Link>
                                        </li>
                                        {fileTools.map((component) => (
                                            <ListItem
                                                key={component.title}
                                                title={component.title}
                                                href={component.href}
                                            >
                                                {component.description}
                                            </ListItem>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>PDF Tools</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[400px]">
                                        {pdfTools.map((component) => (
                                            <ListItem
                                                key={component.title}
                                                title={component.title}
                                                href={component.href}
                                            >
                                                {component.description}
                                            </ListItem>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Image Tools</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[400px]">
                                        {imgTools.map((component) => (
                                            <ListItem
                                                key={component.title}
                                                title={component.title}
                                                href={component.href}
                                            >
                                                {component.description}
                                            </ListItem>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <span className="cursor-not-allowed">
                                            <NavigationMenuLink
                                                asChild
                                                className={`${navigationMenuTriggerStyle()} pointer-events-none`}
                                            >
                                                <Link href="#" onClick={(e) => e.preventDefault()}>
                                                    File Editor
                                                </Link>
                                            </NavigationMenuLink>
                                        </span>
                                    </TooltipTrigger>
                                    <TooltipContent>Coming very soon!</TooltipContent>
                                </Tooltip>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <span className="cursor-not-allowed">
                                            <NavigationMenuLink
                                                asChild
                                                className={`${navigationMenuTriggerStyle()} pointer-events-none`}
                                            >
                                                <Link href="#" onClick={(e) => e.preventDefault()}>
                                                    Image Editor
                                                </Link>
                                            </NavigationMenuLink>
                                        </span>
                                    </TooltipTrigger>
                                    <TooltipContent>Coming very soon!</TooltipContent>
                                </Tooltip>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
                <div className="flex items-center gap-4">
                    <DarkmodeToggle />
                    <div className="md:hidden">
                        <Sheet>
                            <SheetTrigger asChild>
                                <button>
                                    <Menu className="h-6 w-6" />
                                </button>
                            </SheetTrigger>
                            <SheetContent side="left" className="w-[280px] sm:w-[300px] p-0">
                                <div className="flex flex-col h-full">
                                    <SheetHeader className="p-4 border-b">
                                        <SheetTitle className="text-left text-lg font-semibold">📂 Menu</SheetTitle>
                                    </SheetHeader>

                                    <div className="flex-1 overflow-y-auto px-4 py-6 space-y-6">
                                        <div className="space-y-2">
                                            <Link href="/" className="flex items-center gap-2 font-medium text-foreground hover:text-blue-500">
                                                <Home className="w-4 h-4" /> Home
                                            </Link>
                                            <Link href="/about" className="flex items-center gap-2 font-medium text-foreground hover:text-blue-500">
                                                <Globe className="w-4 h-4" /> About
                                            </Link>
                                        </div>

                                        <Separator className="my-4" />

                                        <div>
                                            <p className="text-sm font-semibold text-muted-foreground mb-2">Convert PDF</p>
                                            <div className="space-y-2">
                                                {fileTools.map((tool) => (
                                                    <Link
                                                        key={tool.title}
                                                        href={tool.href}
                                                        className="flex items-center gap-2 text-sm hover:text-blue-500 p-2 rounded-md transition"
                                                    >
                                                        {getIcon(tool.title)}
                                                        {tool.title}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>

                                        <Separator />

                                        <div>
                                            <p className="text-sm font-semibold text-muted-foreground mb-2">PDF Tools</p>
                                            <div className="space-y-2">
                                                {pdfTools.map((tool) => (
                                                    <Link
                                                        key={tool.title}
                                                        href={tool.href}
                                                        className="flex items-center gap-2 text-sm hover:text-blue-500 p-2 rounded-md transition"
                                                    >
                                                        {getIcon(tool.title)}
                                                        {tool.title}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>

                                        <div>
                                            <p className="text-sm font-semibold text-muted-foreground mb-2">Image Tools</p>
                                            <div className="space-y-2">
                                                {imgTools.map((tool) => (
                                                    <Link
                                                        key={tool.title}
                                                        href={tool.href}
                                                        className="flex items-center gap-2 text-sm hover:text-blue-500 p-2 rounded-md transition"
                                                    >
                                                        {getIcon(tool.title)}
                                                        {tool.title}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>

                                        <Separator />

                                        <div className="text-sm text-muted-foreground flex items-center gap-6">
                                            <div className="flex items-center gap-2">
                                                <FileCog className="w-4 h-4" />
                                                <span>File Editor</span>
                                                <span className="text-gray-400">(Coming Soon)</span>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>

                    </div>
                </div>
            </div>
        </header>
    )
}

function ListItem({
    title,
    children,
    href,
    ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
    return (
        <li {...props}>
            <NavigationMenuLink asChild>
                <Link href={href}>
                    <div className="text-sm leading-none font-medium">{title}</div>
                    <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    )
}

const iconMap: Record<string, React.JSX.Element> = {
    "PDF - DOCX": <FileText className="w-4 h-4" />,
    "PDF - IMG": <ImageIcon className="w-4 h-4" />,
    "PDF - XLSX": <SheetIcon className="w-4 h-4" />,
    "PDF - PPTX": <Presentation className="w-4 h-4" />,
    "Merge PDFs": <Merge className="w-4 h-4" />,
    "Split PDFs": <Split className="w-4 h-4" />,
    "Compress PDFs": <FileCog className="w-4 h-4" />,

    "Remove Background": <Images className="w-4 h-4" />,
    "Upscale Image": <ImageUpscale className="w-4 h-4" />,
    "Compress Image": <ImageDown className="w-4 h-4" />,
    "Convert to JPG": <FileImage className="w-4 h-4" />,
    "Crop Image": <Crop className="w-4 h-4" />,
    "Image to Text": <FileText className="w-4 h-4" />,
    "QR Code Generator": <QrCode className="w-4 h-4" />,
};

function getIcon(name: string) {
    return iconMap[name] || <FileText className="w-4 h-4" />;
}
