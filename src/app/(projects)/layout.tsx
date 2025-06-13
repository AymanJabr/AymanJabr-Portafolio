import React, { ReactNode } from "react";
import ContactForm from "../components/ContactForm";
import Link from "next/link";

export default function ProjectsLayout({ children }: { children: ReactNode }) {
    return (
        <main className="s1 s2">
            <div className="nav-wrapper">
                <Link href="/" className="dots-wrapper-link">
                    <div className="dots-wrapper">
                        <div id="dot-1" className="browser-dot"></div>
                        <div id="dot-2" className="browser-dot"></div>
                        <div id="dot-3" className="browser-dot"></div>
                    </div>
                </Link>
                <ul id="navigation">
                    <li>
                        <a href="#contact-form">Contact</a>
                    </li>
                </ul>
            </div>
            {children}
            <ContactForm />
        </main>
    );
} 