import type { LucideIcon } from "lucide-react";
import { Inbox } from "lucide-react";

export function EmptyState({
  icon: Icon = Inbox,
  title,
  description,
  action,
}: {
  icon?: LucideIcon;
  title: string;
  description: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center gap-3 border border-dashed border-maroon/20 bg-surface-off px-6 py-16 text-center">
      <Icon className="h-8 w-8 text-maroon/40" aria-hidden="true" />
      <h3 className="font-display text-lg font-bold text-maroon">{title}</h3>
      <p className="max-w-md text-base leading-relaxed text-ink/70">{description}</p>
      {action}
    </div>
  );
}
