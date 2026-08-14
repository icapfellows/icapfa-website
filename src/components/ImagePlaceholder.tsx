import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/cn";

/**
 * Neutral placeholder shown wherever a real photograph belongs but hasn't
 * been uploaded to public/images/ yet. Swap in a next/image once the real
 * file lands — this component is intentionally undecorated so it never
 * gets mistaken for finished content.
 */
export function ImagePlaceholder({
  label,
  className,
}: {
  label?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex h-full w-full flex-col items-center justify-center gap-2 bg-surface-soft text-maroon/40",
        className
      )}
    >
      <ImageIcon className="h-8 w-8" aria-hidden="true" />
      {label ? (
        <span className="px-4 text-center text-xs font-semibold uppercase tracking-wide text-maroon/40">
          {label}
        </span>
      ) : null}
    </div>
  );
}
