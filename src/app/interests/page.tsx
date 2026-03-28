import Link from "next/link";
import { Chess } from "chess.js";
import ChessWidget from "@/components/widgets/chess-widget";
import GolfWidget from "@/components/widgets/golf-widget";

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
    for (let i = 0; i <= puzzle.initialPly; i++) {
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

const GHIN_NUMBER = "10715005";

interface GhinScore {
  adjusted_gross_score: number;
  differential: number;
  played_at: string;
  number_of_holes: number;
  score_type_display_short: string;
}

interface GhinGolfer {
  handicap_index: number;
  hi_display: string;
}

async function getGhinData(): Promise<{
  handicapIndex: number;
  hiDisplay: string;
  scores: GhinScore[];
} | null> {
  const password = process.env.GHIN_PASSWORD;
  if (!password) return null;

  try {
    // Step 1: Login to get token
    const loginRes = await fetch("https://api2.ghin.com/api/v1/golfer_login.json", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user: {
          email_or_ghin: GHIN_NUMBER,
          password,
          remember_me: "true",
        },
        token: "nonblank",
      }),
      next: { revalidate: 3600 },
    });

    if (!loginRes.ok) return null;
    const loginData = await loginRes.json();
    const token: string = loginData?.golfer_user?.golfer_user_token;
    if (!token) return null;

    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    // Step 2: Fetch handicap index
    const golferRes = await fetch(
      `https://api2.ghin.com/api/v1/golfers/search.json?per_page=1&page=1&golfer_id=${GHIN_NUMBER}&source=GHINcom`,
      { headers, next: { revalidate: 3600 } }
    );
    if (!golferRes.ok) return null;
    const golferData = await golferRes.json();
    const golfer: GhinGolfer = golferData?.golfers?.[0];
    if (!golfer) return null;

    // Step 3: Fetch recent scores
    const scoresRes = await fetch(
      `https://api2.ghin.com/api/v1/scores.json?golfer_id=${GHIN_NUMBER}&source=GHINcom&limit=3`,
      { headers, next: { revalidate: 3600 } }
    );
    if (!scoresRes.ok) {
      return { handicapIndex: golfer.handicap_index, hiDisplay: golfer.hi_display, scores: [] };
    }
    const scoresData = await scoresRes.json();
    const scores: GhinScore[] = (scoresData?.scores ?? []).slice(0, 3);

    return {
      handicapIndex: golfer.handicap_index,
      hiDisplay: golfer.hi_display,
      scores,
    };
  } catch {
    return null;
  }
}

export default async function Interests() {
  const puzzle = await getDailyPuzzle();
  const ghinData = await getGhinData();

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
          {/* Golf widget */}
          {ghinData && (
            <GolfWidget
              handicapIndex={ghinData.handicapIndex}
              hiDisplay={ghinData.hiDisplay}
              scores={ghinData.scores}
            />
          )}

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
