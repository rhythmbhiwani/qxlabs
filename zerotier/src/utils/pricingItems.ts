import WhiteIcon from "@public/assets/icons/white-knockout-512x512-v2.webp";
import BlueIcon from "@public/assets/icons/blue-knockout-512x512-v2.webp";
import OrangeIcon from "@public/assets/icons/orange-knockout-512x512-v2.webp";

export const pricingItems = [
  {
    icon: WhiteIcon,
    title: "Basic",
    description: "For Everyone / ZeroTier Hosted Controller",
    features: [
      "✓ 1 Admin",
      "✓ 25 Nodes",
      "✓ Unlimited Networks",
      "✖ Business SSO: n/a",
      "✓ Community Support",
      "FREE",
    ],
    buttonTitle: "Free Sign Up",
    colorClasses: {
      ring: "ring-white",
      button: "bg-white text-[#262626] hover:!bg-transparent hover:text-white",
    },
  },
  {
    icon: OrangeIcon,
    title: "Professional",
    description: "Licensed Only For Individuals and Testing",
    features: [
      "✓ Admins | $10 USD/mo each",
      "✓ 25 Node Packs | $5 USD/mo",
      "✓ Unlimited Networks",
      "✓ Business SSO | $5 USD/mo per seat",
      "✓ Community Support",
      "Starting at $5 USD/month",
    ],
    buttonTitle: "Sign Up",
    colorClasses: {
      ring: "ring-brand",
      button:
        "!bg-brand !text-[#1a1a1a] !ring-0 hover:!bg-transparent hover:!text-brand hover:!ring-brand hover:!ring-1",
    },
  },
  {
    icon: BlueIcon,
    title: "Business",
    description: "Licensed for Commercial Deployments",
    features: [
      "Use Cases Include:",
      "∙ IoT",
      "∙ SD-WAN",
      "∙ VPN",
      "∙ Remote Monitoring and Management",
      "Contact Sales for Pricing",
    ],
    buttonTitle: "Contact Sales",
    colorClasses: {
      ring: "ring-secondary",
      button:
        "!bg-secondary !text-white !ring-0 hover:!bg-transparent hover:!ring-secondary hover:!text-white hover:!ring",
    },
  },
];
