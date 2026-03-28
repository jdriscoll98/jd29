import Link from "next/link";

interface Score {
  adjusted_gross_score: number;
  differential: number;
  played_at: string;
  number_of_holes: number;
  score_type_display_short: string;
  course_name?: string;
}

interface GolfWidgetProps {
  handicapIndex: number;
  hiDisplay: string;
  scores: Score[];
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

export default function GolfWidget({ handicapIndex, hiDisplay, scores }: GolfWidgetProps) {
  return (
    <div className="border border-green-700/30 rounded-sm bg-zinc-900/50 overflow-hidden hover:border-green-700/50 transition-colors">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-green-700/20">
        <div>
          <p className="text-green-500 text-xs tracking-widest uppercase">&#47;&#47; golf handicap</p>
          <p className="text-zinc-500 text-xs mt-0.5">GHIN index</p>
        </div>
        <Link
          href="https://www.ghin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs px-3 py-1.5 border border-green-700/40 text-green-500 rounded-sm hover:bg-green-500/10 hover:border-green-500 transition-colors tracking-wider"
        >
          ghin.com →
        </Link>
      </div>

      {/* Handicap index */}
      <div className="px-4 pt-4 pb-3 border-b border-green-700/10">
        <div className="flex items-end gap-2">
          <span className="text-5xl font-bold text-white tracking-tight">{hiDisplay}</span>
          <span className="text-zinc-500 text-sm mb-1.5">handicap index</span>
        </div>
      </div>

      {/* Recent scores */}
      {scores.length > 0 && (
        <div className="px-4 py-3">
          <p className="text-zinc-600 text-xs tracking-widest uppercase mb-2">recent rounds</p>
          <div className="space-y-2">
            {scores.map((score, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-white font-bold text-sm w-6 text-center">{score.adjusted_gross_score}</span>
                  <div>
                    <span className="text-zinc-400 text-xs">{formatDate(score.played_at)}</span>
                    <span className="text-zinc-600 text-xs ml-2">{score.number_of_holes}H</span>
                  </div>
                </div>
                <span className="text-green-600 text-xs font-mono">
                  {score.differential > 0 ? "+" : ""}{score.differential.toFixed(1)}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
