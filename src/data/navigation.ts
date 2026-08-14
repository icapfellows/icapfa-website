export interface NavItem {
  label: string;
  href: string;
}

// Primary header navigation, in display order.
export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Events & Community", href: "/events" },
  { label: "Members", href: "/members" },
  { label: "Career & Resources", href: "/resources" },
  { label: "Entrepreneurship", href: "/entrepreneurship" },
  { label: "In Remembrance", href: "/remembrance" },
  { label: "Support Us", href: "/support" },
  { label: "Contact", href: "/contact" },
];

export const footerNav: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Events & Community", href: "/events" },
  { label: "Members", href: "/members" },
  { label: "Career & Resources", href: "/resources" },
  { label: "Entrepreneurship", href: "/entrepreneurship" },
  { label: "In Remembrance", href: "/remembrance" },
  { label: "Support Us", href: "/support" },
  { label: "Contact", href: "/contact" },
];
