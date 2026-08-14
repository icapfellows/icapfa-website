import { CTAButton } from "@/components/CTAButton";
import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/data/site-config";

/**
 * Deliberately minimal — mirrors the ACC reference site's membership banner:
 * one high-contrast headline, one CTA, generous white space. No secondary
 * button competing for attention (Member Login already lives in the header).
 */
export function MembershipBanner() {
  return (
    <section className="bg-maroon">
      <div className="mx-auto max-w-container px-4 py-24 text-center sm:px-6 lg:px-8">
        <Reveal className="mx-auto flex max-w-xl flex-col items-center gap-8">
          <h2 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
            Join a global network of inclusive leaders.
          </h2>
          <CTAButton href={siteConfig.links.newMember} variant="primary" external>
            Join Today
          </CTAButton>
        </Reveal>
      </div>
    </section>
  );
}
