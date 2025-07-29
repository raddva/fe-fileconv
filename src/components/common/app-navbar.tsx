"use client"

import * as React from "react"
import Link from "next/link"
import { File } from "lucide-react"

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

export function Navbar() {
    return (
        <header className="w-full border-b bg-background z-50">
            <div className="relative flex items-center h-16 px-4">
                <div className="flex items-center gap-2 font-bold">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="bg-gradient-to-r from-red-500 to-pink-500 p-2 rounded-md flex items-center justify-center">
                            <File className="size-5" />
                        </div>
                        <span className="bg-gradient-to-r from-red-500 to-pink-500 text-transparent bg-clip-text">FILECONV</span>
                    </Link>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2">
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
                                                <div className="mt-4 mb-2 text-lg font-bold">Mndy File Converter</div>
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
                                <NavigationMenuContent >
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
                                    <TooltipContent>
                                        Coming very soon!
                                    </TooltipContent>
                                </Tooltip>
                            </NavigationMenuItem>

                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
                <div className="ml-auto">
                    <DarkmodeToggle />
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
