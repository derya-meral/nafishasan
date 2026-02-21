import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./ui/header";
import Footer from "./ui/footer";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Nafis Hasan",
    description: "Labor organizer, writer, scientist, and educator exploring the intersections of health, science, and politics, with a focus on healthcare, social justice, and radical approaches to knowledge and care.",
    keywords: [
        "Nafis", "Hasan", "author", "Philly", "Philadelphia", "Cancer", "Cancer Industrial Complex"
    ],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased w-full flex justify-center overflow-y-scroll`}
            >
                <main className="w-full bg-white flex flex-col items-center justify-between min-h-screen">
                        <Header />
                        {children}
                        <Footer />
                </main>
            </body>
        </html>
    );
}
