import GameIcon from "@public/assets/icons/game-icon.webp";
import CloudIcon from "@public/assets/icons/cloud-icon.webp";
import DevopsIcon from "@public/assets/icons/devops-icon.webp";
import GlobalNetworkIcon from "@public/assets/icons/global-network.webp";

export const targetAudience = [
  {
    icon: GameIcon,
    title: "Individuals",
    features: [
      "Access your computers, NAS, home automation, IP cameras, ham radios or other devices from anywhere",
      "Conveniently share files and data, or even play LAN games with others",
      "Manage secure network access to users of choice",
    ],
  },
  {
    icon: CloudIcon,
    title: "IT Teams",
    features: [
      "Simplify your network stack by unifying VPNs, VLANs, and SD-WANs with one solution",
      "Build, manage, and observe any number of remote, on premise, or cloud networks with one management interface",
      "Easily provision remote access for all of your users",
    ],
  },
  {
    icon: DevopsIcon,
    title: "DevOps",
    features: [
      "Quickly build backplane networks spanning multiple cloud providers",
      "Save on performance, storage, and bandwidth",
      "Administrate and debug from anywhere",
      "Secure corporate network overlay and failover layer",
    ],
  },
  {
    icon: GlobalNetworkIcon,
    title: "Embedded",
    features: [
      "Enjoy vastly superior network control and functionality",
      "Develop and manage products or services running on their own decentralized networks",
      "Create 4G/5G-capable secure networks for any IoT, edge or embedded device that can operate on 64MB of RAM",
    ],
  },
];
