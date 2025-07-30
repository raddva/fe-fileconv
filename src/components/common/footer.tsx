import Link from "next/link";
import { Github, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="w-full border-t bg-background py-6 text-center text-sm text-muted-foreground">
            <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p>&copy; {new Date().getFullYear()} Fileconv by Nadya. All rights reserved.</p>

                <div className="flex items-center gap-4">
                    <Link href="https://github.com/raddva" target="_blank" rel="noopener noreferrer">
                        <Github className="w-5 h-5 hover:text-foreground transition" />
                    </Link>
                    <Link href="https://instagram.com/raddva" target="_blank" rel="noopener noreferrer">
                        <Instagram className="w-5 h-5 hover:text-foreground transition" />
                    </Link>
                    <Link href="https://linkedin.com/in/radiva" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-5 h-5 hover:text-foreground transition" />
                    </Link>
                </div>
            </div>
        </footer>
    );
}
