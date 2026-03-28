import Link from "next/link";
import { Chess } from "chess.js";
import ChessWidget from "@/components/widgets/chess-widget";

interface LichessPuzzleResponse {
  puzzle: {
    id: string;
    rating: number;
    themes: string[];
    initialPly: number;
    solution: string[];
  };
  game: {
    pgn: string;
  };
}

async function getDailyPuzzle(): Promise<{
  fen: string;
  puzzleId: string;
  rating: number;
  themes: string[];
  orientation: "white" | "black";
} | null> {
  try {
    const res = await fetch("https://lichess.org/api/puzzle/daily", {
      next: { revalidate: 3600 }, // revalidate every hour
      headers: { Accept: "application/json" },
    });
    if (!res.ok) return null;

    const data: LichessPuzzleResponse = await res.json();
    const { puzzle, game } = data;

    // Replay PGN to the puzzle's starting position
    const chess = new Chess();
    chess.loadPgn(game.pgn);
    const history = chess.history({ verbose: true });

    const boardAtPuzzle = new Chess();
    for (let i = 0; i < puzzle.initialPly; i++) {
      boardAtPuzzle.move(history[i]);
    }

    // The side to move at puzzle start is who needs to find the solution
    const turn = boardAtPuzzle.turn(); // "w" or "b"
    const orientation = turn === "w" ? "white" : "black";

    return {
      fen: boardAtPuzzle.fen(),
      puzzleId: puzzle.id,
      rating: puzzle.rating,
      themes: puzzle.themes,
      orientation,
    };
  } catch {
    return null;
  }
}

export default async function Interests() {
  const puzzle = await getDailyPuzzle();

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-mono">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-zinc-950/80 backdrop-blur-sm border-b border-green-700/30 px-6 py-4 flex items-center gap-4">
        <Link href="/" className="text-green-500 hover:text-green-400 transition-colors text-sm">
          ← back
        </Link>
        <span className="text-zinc-600">/</span>
        <h1 className="text-sm text-zinc-400">interests</h1>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Intro */}
        <div className="mb-12">
          <p className="text-green-500 text-sm mb-2 tracking-widest uppercase">&#47;&#47; my interests</p>
          <h2 className="text-4xl font-bold mb-4 text-white">Beyond the Code</h2>
          <p className="text-zinc-400 text-base leading-relaxed">
            A few things I&apos;m into when I&apos;m not writing software.
          </p>
        </div>

        {/* Widget grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Chess widget */}
          {puzzle ? (
            <ChessWidget
              fen={puzzle.fen}
              puzzleId={puzzle.puzzleId}
              rating={puzzle.rating}
              themes={puzzle.themes}
              orientation={puzzle.orientation}
            />
          ) : (
            <div className="border border-green-700/30 rounded-sm bg-zinc-900/50 p-6">
              <p className="text-green-500 text-xs tracking-widest uppercase mb-3">&#47;&#47; daily chess puzzle</p>
              <p className="text-zinc-500 text-sm mb-4">Couldn&apos;t load today&apos;s puzzle.</p>
              <Link
                href="https://lichess.org/training"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs px-3 py-1.5 border border-green-700/40 text-green-500 rounded-sm hover:bg-green-500/10 hover:border-green-500 transition-colors tracking-wider"
              >
                open lichess →
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
