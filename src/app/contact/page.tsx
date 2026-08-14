import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactForm } from "@/components/ContactForm";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact the ICAP Fellows Association with general questions, membership, partnership, or media inquiries.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-maroon">
        <div className="mx-auto max-w-container px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Contact" title="Get in Touch" light />
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-container px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <h2 className="font-display text-xl font-bold text-maroon">Reach Us Directly</h2>
              <p className="mt-3 text-base leading-relaxed text-ink/70">
                For general questions, membership, partnership, media,
                feedback, or donation inquiries, use the form or contact us
                directly.
              </p>
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="mt-4 inline-block text-sm font-semibold text-gold-dark hover:text-maroon"
              >
                {siteConfig.contactEmail}
              </a>
              <p className="mt-6 text-xs text-ink/50">
                Social channels are not active yet — check back soon.
              </p>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
