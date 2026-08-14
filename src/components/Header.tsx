import Image from "next/image";
import Link from "next/link";
import { primaryNav } from "@/data/navigation";
import { siteConfig } from "@/data/site-config";
import { MobileMenu } from "@/components/MobileMenu";

const LOGO_SRC: string | null = "/logo/icapfa-logo.png";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-maroon/10 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-container items-center justify-between gap-4 px-4 py-1.5 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center">
          {LOGO_SRC ? (
            <Image
              src={LOGO_SRC}
              alt="ICAP Fellows Association"
              width={629}
              height={505}
              className="h-16 w-auto flex-shrink-0 object-contain sm:h-24"
              priority
            />
          ) : (
            <span className="flex items-center gap-2 whitespace-nowrap font-display text-base font-bold text-maroon sm:text-lg">
              <span aria-hidden="true" className="inline-block h-8 w-8 flex-shrink-0 rounded bg-maroon" />
              <span>
                ICAP <span className="text-gold-dark">Fellows</span> Association
              </span>
            </span>
          )}
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-4 xl:flex"
        >
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap text-sm font-semibold text-maroon/80 transition-colors hover:text-gold-dark"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden xl:block">
          <a
            href={siteConfig.links.memberLogin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center whitespace-nowrap rounded bg-maroon px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-maroon-dark"
          >
            Member Login
          </a>
        </div>

        <MobileMenu />
      </div>
    </header>
  );
}
