import Feature1 from "@public/assets/feature1.webp";
import Feature2 from "@public/assets/feature2.webp";

export const featureItems = [
  {
    title: "It just works",
    image: Feature1,
    descriptionHTML: [
      "ZeroTier combines the capabilities of <strong>VPN</strong> and <strong>SD-WAN</strong>, simplifying network management. Enjoy flexibility while avoiding costly hardware vendor lock in.",
    ],
    buttonTitle: "Learn More >",
    invert: false,
  },
  {
    title: "Speed, flexibility, and security",
    image: Feature2,
    descriptionHTML: [
      "Set up ZeroTier in minutes with remote, automated deployment.",
      "Emulates Layer 2 Ethernet with multipath, multicast, and bridging capabilities.",
      "ZeroTier's zero-trust networking solution provides scalable security with 256-bit end-to-end encryption.",
    ],
    buttonTitle: "Get ZeroTier",
    invert: true,
  },
];
