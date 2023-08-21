export enum NAV_ITEM_TYPE {
  LINK = "link",
  DROPDOWN = "dropdown",
}

export interface NAV_ITEM {
  title: string;
  href?: string;
  type: NAV_ITEM_TYPE;
  links?: NAV_ITEM[];
}

export const navItems: NAV_ITEM[] = [
  {
    title: "Features",
    href: "#",
    type: NAV_ITEM_TYPE.LINK,
  },
  {
    title: "Pricing",
    href: "#",
    type: NAV_ITEM_TYPE.LINK,
  },
  {
    title: "Download",
    href: "#",
    type: NAV_ITEM_TYPE.LINK,
  },
  {
    title: "Company",
    type: NAV_ITEM_TYPE.DROPDOWN,
    links: [
      {
        title: "Contact",
        href: "#",
        type: NAV_ITEM_TYPE.LINK,
      },
      {
        title: "About Us",
        href: "#",
        type: NAV_ITEM_TYPE.LINK,
      },
      {
        title: "Careers",
        href: "#",
        type: NAV_ITEM_TYPE.LINK,
      },
      {
        title: "Blog",
        href: "#",
        type: NAV_ITEM_TYPE.LINK,
      },
      {
        title: "Media Kit",
        href: "#",
        type: NAV_ITEM_TYPE.LINK,
      },
    ],
  },
  {
    title: "Support",
    type: NAV_ITEM_TYPE.DROPDOWN,
    links: [
      {
        title: "Documentation",
        href: "#",
        type: NAV_ITEM_TYPE.LINK,
      },
      {
        title: "Knowledge Base",
        href: "#",
        type: NAV_ITEM_TYPE.LINK,
      },
      {
        title: "Community",
        href: "#",
        type: NAV_ITEM_TYPE.LINK,
      },
      {
        title: "Getting Started",
        href: "#",
        type: NAV_ITEM_TYPE.LINK,
      },
    ],
  },
];
