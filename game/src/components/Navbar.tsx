"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar: React.FC = () => {
    const pathname = usePathname();
    const links = [
        { name: 'Home', path: '/' },
        { name: 'Tic Tac Toe', path: '/game' },
        { name: 'Sudoku', path: '/sudoku' },
        { name: 'Tetris', path: '/tetris' },
    ];

    return (
        <aside className="fixed top-0 left-0 h-full w-64 bg-gray-800 text-white flex flex-col p-6 space-y-4">
            <nav>
                {links.map((link) => (
                    <Link
                        key={link.name}
                        href={link.path}
                        className={`block py-2 px-4 rounded transition-colors ${
                            pathname === link.path ? 'bg-gray-700' : 'hover:bg-gray-700'
                        }`}
                    >
                        {link.name}
                    </Link>
                ))}
            </nav>
        </aside>
    );
};

export default Sidebar;
