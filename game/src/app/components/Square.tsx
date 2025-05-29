interface SquareProps {
    value: string;
    onClick: () => void;
    highlight: boolean;
}

export default function Square({ value, onClick, highlight }: SquareProps) {
    return (
        <button
            onClick={onClick}
            className={`
        w-24 h-24 flex items-center justify-center text-4xl font-bold rounded-lg shadow-md
        cursor-pointer transition hover:bg-gray-700
        ${highlight ? "bg-purple-600" : "bg-gray-900"}
        text-white
      `}
        >
            {value}
        </button>
    );
}
