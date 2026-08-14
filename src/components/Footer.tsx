import Link from "next/link";
import { footerNav } from "@/data/navigation";
import { siteConfig } from "@/data/site-config";

export function Footer() {
  const year = new Date().getFullYear();
  const hasSocialLinks = Object.values(siteConfig.social).some(Boolean);

  return (
    <footer className="bg-maroon text-white">
      <div className="mx-auto max-w-container px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-lg font-bold">ICAP Fellows Association</p>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              {siteConfig.nonprofitStatusLine}
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-gold">
              Explore
            </h3>
            <ul className="mt-4 space-y-2.5">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/80 hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-gold">
              Get Involved
            </h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={siteConfig.links.memberLogin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/80 hover:text-white"
                >
                  Member Login
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.links.newMember}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/80 hover:text-white"
                >
                  Join ICAPFA
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.links.donate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/80 hover:text-white"
                >
                  Donate
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.links.icapAspen}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/80 hover:text-white"
                >
                  ICAP Aspen
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-gold">
              Connect
            </h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link href="/contact" className="text-sm text-white/80 hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
            <div className="mt-4">
              {hasSocialLinks ? (
                <ul className="flex gap-3">
                  {siteConfig.social.linkedin ? (
                    <li>
                      <a
                        href={siteConfig.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-white/80 hover:text-white"
                      >
                        LinkedIn
                      </a>
                    </li>
                  ) : null}
                </ul>
              ) : (
                <p className="text-sm text-white/50">Social links coming soon</p>
              )}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-8 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {siteConfig.orgName}. All rights reserved.
          </p>
          <p>{siteConfig.orgAbbreviation} is a 501(c)(3) nonprofit organization.</p>
        </div>
      </div>
    </footer>
  );
}
