import { CTAButton } from "@/components/CTAButton";
import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/data/site-config";

export function DonationBanner() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-container px-4 py-20 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative border border-maroon/10 bg-surface-soft px-8 py-12 sm:px-14 sm:py-14">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute right-6 top-4 select-none font-display text-[7rem] leading-none text-maroon/[0.06] sm:text-[9rem]"
            >
              &rdquo;
            </span>
            <div className="relative grid gap-8 lg:grid-cols-[1.3fr_auto] lg:items-end">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-gold-dark">
                  Support Our Mission
                </p>
                <h2 className="mt-3 max-w-xl font-display text-3xl font-bold leading-tight text-maroon sm:text-4xl">
                  Your gift keeps the ICAP community strong.
                </h2>
                <p className="mt-4 max-w-[58ch] text-base leading-relaxed text-ink/70">
                  Donations support organizational initiatives, programming, alumni
                  engagement, partnerships, and the continued strength of the ICAP
                  community.
                </p>
              </div>
              <div>
                <CTAButton href={siteConfig.links.donate} variant="ghost" external>
                  Donate via PayPal / Venmo
                </CTAButton>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
