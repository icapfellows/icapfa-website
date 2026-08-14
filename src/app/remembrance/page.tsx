import type { Metadata } from "next";
import { MemorialProfile } from "@/components/MemorialProfile";
import { memorials } from "@/data/memorials";

export const metadata: Metadata = {
  title: "In Remembrance",
  description:
    "The International Career Advancement Program honors the lives, leadership, and enduring legacies of the cherished advisors and Fellows who have shaped this organization.",
  alternates: { canonical: "/remembrance" },
};

export default function RemembrancePage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="font-display text-3xl font-bold text-maroon sm:text-4xl">
          In Remembrance
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/80">
          The International Career Advancement Program honors the lives,
          leadership, and enduring legacies of the cherished advisors and
          Fellows who have shaped the history, culture, and community of this
          organization.
        </p>

        <div className="mt-14">
          {memorials.map((memorial) => (
            <MemorialProfile key={memorial.id} memorial={memorial} />
          ))}
        </div>
      </div>
    </section>
  );
}
