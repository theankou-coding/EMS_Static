export interface NavigationItem {
  id: string;
  name: string;
  path: string;
  description?: string;
  isExternal?: boolean;
  children?: NavigationItem[];
  badge?: {
    text: string;
    variant: "new" | "hot" | "sale" | "beta";
  };
  icon?: string;
  featured?: boolean;
  disabled?: boolean;
}

export const mainNavigation: NavigationItem[] = [
  {
    id: "home",
    name: "Home",
    path: "/user/home",
    description: "home",
  },
  {
    id: "events",
    name: "Events",
    path: "/user/event",
    description: "Explore upcoming events and webinars",
  },
  {
    id: "categories",
    name: "Categories",
    path: "/user/categories",
    description: "Browse our categories",
  },

  //   {
  //     id: "about",
  //     name: "About",
  //     path: "/user/about",
  //     description: "Get in touch with our team",
  //   },
];

export const footerNavigation = {
  product: [
    { id: "footer-features", name: "Features", path: "/features" },
    { id: "footer-templates", name: "Templates", path: "/templates" },
    { id: "footer-pricing", name: "Pricing", path: "/pricing" },
    { id: "footer-releases", name: "Releases", path: "/releases" },
    { id: "footer-changelog", name: "Changelog", path: "/changelog" },
    { id: "footer-integrations", name: "Integrations", path: "/integrations" },
  ],
  company: [
    { id: "footer-about", name: "About Us", path: "/about" },
    { id: "footer-blog", name: "Blog", path: "/blog" },
  ],
  resources: [
    { id: "footer-docs", name: "Documentation", path: "/docs" },
    { id: "footer-help", name: "Help Center", path: "/help" },
    { id: "footer-community", name: "Community", path: "/community" },
    { id: "footer-partners", name: "Partner Program", path: "/partners" },
    { id: "footer-resources", name: "Resources", path: "/resources" },
    { id: "footer-webinars", name: "Webinars", path: "/webinars" },
  ],
  legal: [
    { id: "footer-terms", name: "Terms of Service", path: "/terms-of-service" },
    { id: "footer-privacy", name: "Privacy Policy", path: "/privacy-policy" },
  ],
  social: [
    {
      id: "social-telegram",
      name: "Telegram",
      path: "https://t.me/blizzerkh",
      isExternal: true,
    },
    {
      id: "social-github",
      name: "GitHub",
      path: "https://github.com/blizzertech",
      isExternal: true,
    },
    {
      id: "social-facebook",
      name: "Facebook",
      path: "https://www.facebook.com/blizzerkh1",
      isExternal: true,
    },
  ],
};

export const userNavigation = [
  { id: "user-profile", name: "Your Profile", path: "/profile" },
  { id: "user-settings", name: "Settings", path: "/settings" },
  { id: "user-billing", name: "Billing", path: "/billing" },
  { id: "user-team", name: "Team", path: "/team" },
  { id: "user-help", name: "Help", path: "/help" },
  { id: "user-logout", name: "Sign out", path: "/logout" },
];

export const mobileNavigation = mainNavigation
  .filter((item) => !["docs"].includes(item.id))
  .map((item) => ({
    ...item,
    children: item.children
      ? item.children.filter((child) => child.featured)
      : undefined,
  }));
