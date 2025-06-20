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
  // {
  //   id: 'products',
  //   name: 'Products',
  //   path: '/products',
  //   description: 'Explore our products and service',
  //   children: [
  //     {
  //       id: 'features-overview',
  //       name: 'Features Overview',
  //       path: '/features/overview',
  //       description: 'Summary of all features'
  //     },
  //     {
  //       id: 'ui-components',
  //       name: 'UI Components',
  //       path: '/features/components',
  //       description: 'Explore our design components',
  //       featured: true
  //     },

  //     {
  //       id: 'accessibility',
  //       name: 'Accessibility',
  //       path: '/features/accessibility',
  //       description: 'WCAG compliant components'
  //     },
  //     {
  //       id: 'responsive',
  //       name: 'Responsive Design',
  //       path: '/features/responsive',
  //       description: 'Mobile-friendly design system'
  //     }
  //   ]
  // },
  // {
  //   id: 'products',
  //   name: 'Products',
  //   path: '/products',
  //   description: 'Plans and pricing information',
  //       children: [
  //     {
  //       id: 'term',
  //       name: 'Term of Serivice',
  //       path: '/terms-of-service',
  //       description: 'Understand about our Term of Service'
  //     },
  //     {
  //       id: 'privacy',
  //       name: 'Privacy Policy',
  //       path: '/privacy-policy',
  //       description: 'Understand about our Privacy Policy'
  //     }
  //   ]
  // },
  {
    id: "home",
    name: "Home",
    path: "/home",
    description: "home",
  },

  // {
  //   id: 'documents',
  //   name: 'Document',
  //   path: '/documents',
  //   description: 'Get in touch with our team'
  // },
  {
    id: "contact us",
    name: "Contact Us",
    path: "/contact-us",
    description: "contact us of information",
  },

  // {
  //   id: "about us",
  //   name: "About Us",
  //   path: "/about-us",
  //   description: "about us of information",
  // },
  // {
  //   id: 'privacy&term',
  //   name: 'Privacy&Term',
  //   path: '/privacy-policy-and-term-of-service',
  //   description: 'Understand about Our Privacy&Term',
  //   children: [
  //     {
  //       id: 'term',
  //       name: 'Term of Serivice',
  //       path: '/terms-of-service',
  //       description: 'Understand about our Term of Service'
  //     },
  //     {
  //       id: 'privacy',
  //       name: 'Privacy Policy',
  //       path: '/privacy-policy',
  //       description: 'Understand about our Privacy Policy'
  //     }
  //   ]
  // },
  {
    id: "about",
    name: "About",
    path: "/about",
    description: "Get in touch with our team",
  },
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
