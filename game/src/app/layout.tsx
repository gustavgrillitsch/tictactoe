import "./globals.css";
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";

export const metadata = {
    title: "Tic Tac Toe",
    description: "Learn Next.js, TypeScript & Tailwind by building a Tic-Tac-Toe TicTacToe",
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
        <body className="min-h-screen dark">
        <Navbar/>
        {children}
        </body>
        </html>
    );
}
