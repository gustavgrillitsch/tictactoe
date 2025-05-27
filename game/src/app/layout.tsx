import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
    title: "Tic Tac Toe",
    description: "Learn Next.js, TypeScript & Tailwind by building a Tic-Tac-Toe game",
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
        <body className="min-h-screen bg-gray-50">
        {children}
        </body>
        </html>
    );
}
