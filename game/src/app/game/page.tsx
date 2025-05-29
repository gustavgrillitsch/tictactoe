import Board from "../../components/Board";

export default function Game() {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-4xl font-bold mb-6">Tic Tac Toe</h1>
            <Board />
        </main>
    );
}
