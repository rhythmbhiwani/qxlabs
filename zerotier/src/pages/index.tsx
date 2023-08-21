import CallToActions from "@/components/homepage/CallToActions";
import OpenSourceEdition from "@/components/homepage/OpenSourceEdition";
import PricingSection from "@/components/homepage/PricingSection";
import Reviews from "@/components/homepage/Reviews";
import TargetAudience from "@/components/homepage/TargetAudience";
import { NextSeo } from "next-seo";
import Image from "next/image";
import Link from "next/link";
import Feature1 from "../../public/assets/feature1.webp";
import Feature2 from "../../public/assets/feature2.webp";
import Features from "@/components/homepage/Features";
import MeetAlert from "@/components/homepage/MeetAlert";
import Banner from "@/components/homepage/Banner";

export default function Home() {
  return (
    <>
      <NextSeo title="ZeroTier | Global Area Networking" />

      <Banner />

      <MeetAlert />

      <Features />

      <Reviews />

      <TargetAudience />

      <PricingSection />

      <CallToActions />

      <OpenSourceEdition />
    </>
  );
}
