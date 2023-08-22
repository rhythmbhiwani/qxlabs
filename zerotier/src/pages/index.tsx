import Banner from "@/components/homepage/Banner";
import CallToActions from "@/components/homepage/CallToActions";
import Features from "@/components/homepage/Features";
import MeetAlert from "@/components/homepage/MeetAlert";
import OpenSourceEdition from "@/components/homepage/OpenSourceEdition";
import PricingSection from "@/components/homepage/PricingSection";
import Reviews from "@/components/homepage/Reviews";
import TargetAudience from "@/components/homepage/TargetAudience";
import { NextSeo } from "next-seo";

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
