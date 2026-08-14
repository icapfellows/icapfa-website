import Image from "next/image";
import { CTAButton } from "@/components/CTAButton";
import { siteConfig } from "@/data/site-config";

/**
 * Homepage hero photo — the 2025 ICAPFA Annual Picnic in Washington, D.C.
 * Swap for a different real photo under public/images/ at any time by
 * changing this path.
 */
const HERO_IMAGE_SRC: string | null = "/images/hero/hero-main.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-maroon via-maroon-dark to-maroon">
      {HERO_IMAGE_SRC ? (
        <Image
          src={HERO_IMAGE_SRC}
          alt="ICAP Fellows at the 2025 Annual Picnic in Washington, D.C."
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      ) : null}
      {/* Directional tint — darkest where the headline sits, lighter over
          the photo's right side so the group is still clearly visible. */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-maroon-dark/85 via-maroon-dark/40 to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-maroon-dark/35 via-transparent to-transparent"
        aria-hidden="true"
      />

      {/* Understated corner accent — two thin gold rules, not a shape/blob. */}
      <span
        aria-hidden="true"
        className="absolute bottom-10 left-4 hidden h-24 w-px bg-gold/40 sm:block lg:left-8"
      />
      <span
        aria-hidden="true"
        className="absolute bottom-10 left-4 hidden h-px w-16 bg-gold/40 sm:block lg:left-8"
      />

      <div className="relative mx-auto max-w-container px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <div className="max-w-2xl">
          <p
            className="animate-fade-slide-up flex items-center gap-3 text-sm font-bold uppercase tracking-[0.16em] text-gold"
            style={{ animationDelay: "80ms" }}
          >
            <span className="h-px w-8 bg-gold" aria-hidden="true" />
            {siteConfig.programAbbreviation} Fellows Association ({siteConfig.orgAbbreviation})
          </p>
          <h1
            className="animate-fade-slide-up mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[3.75rem]"
            style={{ animationDelay: "180ms" }}
          >
            {siteConfig.tagline}
          </h1>
          <p
            className="animate-fade-slide-up mt-6 max-w-lg text-xl leading-relaxed text-white/80"
            style={{ animationDelay: "280ms" }}
          >
            The ICAP Fellows Association connects, elevates, and supports a global
            community of leaders working across diplomacy, foreign policy,
            government, nonprofit organizations, and the private sector.
          </p>

          <div
            className="animate-fade-slide-up mt-9 flex flex-wrap items-center gap-4"
            style={{ animationDelay: "380ms" }}
          >
            <div className="flex flex-col gap-2 sm:flex-row">
              <CTAButton href={siteConfig.links.newMember} variant="primary" external>
                Join ICAPFA
              </CTAButton>
              <CTAButton href={siteConfig.links.memberLogin} variant="outline" external>
                Member Login
              </CTAButton>
            </div>
            <CTAButton href="/support" variant="ghostLight">
              Support Our Mission
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
