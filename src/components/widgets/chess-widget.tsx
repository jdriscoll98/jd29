"use client";

import { Chessboard } from "react-chessboard";
import Link from "next/link";

interface ChessWidgetProps {
  fen: string;
  puzzleId: string;
  rating: number;
  themes: string[];
  orientation: "white" | "black";
}

export default function ChessWidget({
  fen,
  puzzleId,
  rating,
  themes,
  orientation,
}: ChessWidgetProps) {
  return (
    <div className="border border-green-700/30 rounded-sm bg-zinc-900/50 overflow-hidden hover:border-green-700/50 transition-colors">
      {/* Widget header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-green-700/20">
        <div>
          <p className="text-green-500 text-xs tracking-widest uppercase">&#47;&#47; daily chess puzzle</p>
          <p className="text-zinc-500 text-xs mt-0.5">rating: {rating}</p>
        </div>
        <Link
          href={`https://lichess.org/training/${puzzleId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs px-3 py-1.5 border border-green-700/40 text-green-500 rounded-sm hover:bg-green-500/10 hover:border-green-500 transition-colors tracking-wider"
        >
          solve on lichess →
        </Link>
      </div>

      {/* Board */}
      <div className="p-4">
        <div className="max-w-[320px] mx-auto">
          <Chessboard
            position={fen}
            boardOrientation={orientation}
            arePiecesDraggable={false}
            customBoardStyle={{
              borderRadius: "2px",
              boxShadow: "0 0 0 1px rgba(34,197,94,0.15)",
            }}
            customDarkSquareStyle={{ backgroundColor: "#1a2e1a" }}
            customLightSquareStyle={{ backgroundColor: "#2d4a2d" }}
          />
        </div>
      </div>

      {/* Footer */}
      <div className="px-4 pb-4">
        <div className="flex flex-wrap gap-1.5">
          {themes.slice(0, 4).map((theme) => (
            <span
              key={theme}
              className="text-xs px-2 py-0.5 border border-green-700/30 text-zinc-500 rounded-sm"
            >
              {theme}
            </span>
          ))}
        </div>
        <p className="text-zinc-600 text-xs mt-3">
          {orientation === "white" ? "White" : "Black"} to move — find the best sequence
        </p>
      </div>
    </div>
  );
}
