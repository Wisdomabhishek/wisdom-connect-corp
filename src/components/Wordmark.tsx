import { Link } from "@tanstack/react-router";

/**
 * Typographic WISDOM wordmark.
 * Replace the inner markup with the official logo file once it is added to
 * src/assets, keeping the same link wrapper and sizing.
 */
export function Wordmark({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <Link to="/" className="group inline-flex flex-col leading-none" aria-label="WISDOM home">
      <span
        className={`font-display text-2xl font-extrabold tracking-[0.18em] ${
          tone === "light" ? "text-white" : "text-navy"
        }`}
      >
        WISD<span className="text-orange">O</span>M
      </span>
      <span
        className={`mt-1 text-[9px] font-medium uppercase tracking-[0.22em] ${
          tone === "light" ? "text-white/60" : "text-muted-foreground"
        }`}
      >
        Service You Can Trust
      </span>
    </Link>
  );
}
