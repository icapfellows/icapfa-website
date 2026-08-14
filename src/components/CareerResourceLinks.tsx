import { ArrowUpRight } from "lucide-react";
import type { CareerResourceCategory } from "@/data/careerResourceLinks";

export function CareerResourceLinks({ categories }: { categories: CareerResourceCategory[] }) {
  return (
    <div className="flex flex-col gap-10">
      {categories.map((cat) => (
        <div key={cat.category}>
          <h3 className="font-display text-lg font-bold text-maroon">{cat.category}</h3>
          <ul className="mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {cat.items.map((item) => (
              <li key={item.name} className="border-b border-maroon/10 pb-3">
                {item.url ? (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-start gap-1 text-sm font-semibold text-gold-dark hover:text-maroon"
                  >
                    {item.name}
                    <ArrowUpRight className="mt-0.5 h-3.5 w-3.5 flex-shrink-0" aria-hidden="true" />
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                ) : (
                  <span className="text-sm font-semibold text-maroon">{item.name}</span>
                )}
                {item.description ? (
                  <p className="mt-1 text-xs leading-relaxed text-ink/60">{item.description}</p>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
