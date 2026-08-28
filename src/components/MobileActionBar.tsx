import { Link } from "@tanstack/react-router";
import { mailHref, telHref, waHref } from "@/config/site";

export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-border bg-card lg:hidden">
      <a
        href={telHref()}
        className="flex min-h-[56px] flex-col items-center justify-center gap-1 border-r border-border text-xs font-semibold text-navy"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
        </svg>
        Call
      </a>
      <a
        href={waHref()}
        className="flex min-h-[56px] flex-col items-center justify-center gap-1 border-r border-border bg-esg/10 text-xs font-semibold text-esg"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2Zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .1-1.7-.1a13 13 0 0 1-5.6-4.9c-.4-.6-1-1.6-1-3s.7-2.1 1-2.4c.2-.3.5-.4.7-.4h.5c.2 0 .4 0 .6.5l.8 1.9c.1.2 0 .4-.1.6l-.4.5c-.1.2-.3.3-.1.6.5.9 1 1.5 1.7 2.1.7.6 1.3.8 1.6 1 .2.1.4.1.5-.1l.7-.8c.2-.2.3-.2.6-.1l1.8.9c.3.1.4.2.5.3.1.2.1.6-.1 1.2Z" />
        </svg>
        WhatsApp
      </a>
      <Link
        to="/contact"
        className="flex min-h-[56px] flex-col items-center justify-center gap-1 bg-orange text-xs font-semibold text-white"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <path d="M4 4h16v12H7l-3 3V4Z" />
        </svg>
        Get a Quote
      </Link>
      <a href={mailHref()} className="sr-only">
        Email WISDOM
      </a>
    </div>
  );
}
