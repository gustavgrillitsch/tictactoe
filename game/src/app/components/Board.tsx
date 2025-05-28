"use client";
import { useState, useEffect } from "react";
import Square from "./Square";

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

    useEffect(() => {
        for (const combo of WINNING_COMBOS) {
            const [a, b, c] = combo;
            if (
                board[a] &&
                board[a] === board[b] &&
                board[a] === board[c]
            ) {
                setWinner(board[a]);
                setWinCombo(combo);
                return;
            }
        }
        if (board.every(cell => cell !== "")) {
            setIsDraw(true);
        }
    }, [board, winner]);

        return (

            <div className="flex flex-col items-center p-4">
                <div className="text-2xl font-semibold mb-4">
                    {winner
                        ? `${winner} Wins!`
                        : isDraw
                            ? "Draw!"
                            : `${xTurn ? "X" : "O"} Turn`}
                </div>
            <div className="grid grid-cols-3 gap-2">
                {board.map((value, idx) => (
                    <Square
                        key={idx}
                        value={value}
                        onClick={() => handleClick(idx)}
                        highlight={winCombo.includes(idx)}
                    />
                ))}
            </div>
            </div>
    );
}