import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

export default function About() {
    return (
        <div className="max-w-3xl mx-auto p-6 space-y-6">
            <Card className="shadow-md transition duration-100 transform hover:scale-[1.03] hover:border-primary">
                <CardHeader>
                    <CardTitle>
                        About{" "}
                        <span className="font-semibold bg-gradient-to-r from-red-500 to-pink-500 text-transparent bg-clip-text">
                            Fileconv
                        </span>
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                    <p>
                        <span className="font-semibold bg-gradient-to-r from-red-500 to-pink-500 text-transparent bg-clip-text">
                            Fileconv
                        </span>{" "}
                        is your all-in-one workspace for working with documents — fast, secure, and delightfully easy to use. Whether you’re converting a PDF to Word, extracting images, or compressing files for email, Fileconv handles it all with precision and privacy.
                    </p>
                    <p>
                        Inspired by tools like <strong>iLovePDF</strong>, Fileconv brings powerful features into a beautifully simple interface. Drag, drop, convert — that’s it. No clutter. No signup required.
                    </p>
                    <p>
                        Built with <strong>Next.js</strong>, <strong>Tailwind CSS</strong>, and <strong>ShadCN UI</strong>, this tool delivers top-tier performance across devices, ensuring your files are processed quickly — without ever leaving your browser.
                    </p>
                </CardContent>
            </Card>


            <Card className="shadow-sm border-dashed transition duration-100 transform hover:scale-[1.03] hover:border-primary">
                <CardHeader>
                    <CardTitle>Meet the <span className="bg-gradient-to-r from-yellow-500 via-gray-300 to-orange-500 text-transparent bg-clip-text">Starry</span> Creator <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-transparent bg-clip-text">⟡</span></CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col md:flex-row items-start md:items-center gap-4 text-muted-foreground">
                    <Avatar className="w-16 h-16">
                        <AvatarImage src="/runa.png" alt="Nadya" />
                        <AvatarFallback>𖤐</AvatarFallback>
                    </Avatar>
                    <div className="space-y-3">
                        <p>
                            Hey! I am <span className="font-semibold bg-gradient-to-r from-red-500 to-pink-500 text-transparent bg-clip-text">Nadya</span> — a passionate full-stack developer who loves turning complex ideas into simple, useful web apps. I care deeply about design, performance, and the user experience.
                        </p>
                        <Button asChild className="group px-5 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white hover:shadow-lg transition-all duration-300">
                            <Link
                                href="https://ndya.netlify.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2"
                            >
                                Visit My Portfolio
                                <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </Link>
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
