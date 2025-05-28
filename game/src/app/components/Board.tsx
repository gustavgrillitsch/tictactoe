"use client";
import { useState, useEffect } from "react";

const WINNING_COMBOS = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6],
];

export default function Board() {

    const [board, setBoard] = useState<string[]>(Array(9).fill(""));
    const [xTurn, setXTurn] = useState(true);
    const [winner, setWinner] = useState<string | null>(null);
    const [isDraw, setIsDraw] = useState(false);
    const [winCombo, setWinCombo] = useState<number[]>([]);

    const handleClick = (idx: number) => {
        if (board[idx] || winner) return;
        const nextBoard = [...board];
        nextBoard[idx] = xTurn ? "X" : "O";
        setBoard(nextBoard);
        setXTurn(!xTurn);
    };



        return (
        <></>
    );
}