export function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="relative border-y border-maroon/15 py-10">
      <span
        aria-hidden="true"
        className="absolute -left-1 -top-2 font-display text-6xl italic leading-none text-gold/30 sm:text-7xl"
      >
        &ldquo;
      </span>
      <p className="max-w-3xl pl-8 font-display text-2xl italic leading-snug text-maroon sm:text-3xl">
        {children}
      </p>
    </blockquote>
  );
}
