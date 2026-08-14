import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "ghostLight";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  /** Marks the link as leaving the site: opens in a new tab and shows an icon + sr-only note. */
  external?: boolean;
  className?: string;
}

const variantClasses: Record<Variant, string> = {
  primary: "bg-gold text-white shadow-[0_1px_2px_rgba(69,16,22,0.15)] hover:bg-gold-dark hover:shadow-[0_10px_20px_-8px_rgba(122,93,20,0.55)]",
  secondary: "bg-white text-maroon shadow-[0_1px_2px_rgba(69,16,22,0.1)] hover:bg-surface-off hover:shadow-[0_10px_20px_-8px_rgba(69,16,22,0.2)]",
  outline:
    "bg-transparent text-white border border-white/60 hover:bg-white/10 hover:border-white",
  ghost:
    "bg-transparent text-maroon border border-maroon/20 hover:border-maroon hover:bg-surface-off",
  ghostLight:
    "bg-transparent text-white border border-white/40 hover:bg-white/10 hover:border-white",
};

export function CTAButton({
  href,
  children,
  variant = "primary",
  external = false,
  className,
}: CTAButtonProps) {
  const classes = cn(
    "group inline-flex items-center gap-2 rounded px-6 py-3.5 text-base font-semibold transition-all duration-200 ease-out hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] active:duration-75",
    variantClasses[variant],
    className
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
        <ArrowUpRight
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        />
        <span className="sr-only">(opens in a new tab)</span>
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
