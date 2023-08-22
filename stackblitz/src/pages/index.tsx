import Banner from "@/components/homepage/Banner";
import Beginning from "@/components/homepage/Beginning";
import BleedingEdge from "@/components/homepage/BleedingEdge";
import BottomCTA from "@/components/homepage/BottomCTA";
import Companies from "@/components/homepage/Companies";
import Environments from "@/components/homepage/Environments";
import Experiences from "@/components/homepage/Experiences";
import Features from "@/components/homepage/Features";
import ReviewByIlya from "@/components/homepage/ReviewByIlya";
import ReviewByRich from "@/components/homepage/ReviewByRich";
import ReviewByStephen from "@/components/homepage/ReviewByStephen";
import ReviewByTom from "@/components/homepage/ReviewByTom";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <>
      <NextSeo title="StackBlitz | Instant Dev Environments | Click. Code. Done." />
      <Banner />

      <Environments />

      <Companies />

      <Experiences />

      <ReviewByStephen />

      <BleedingEdge />

      <ReviewByTom />

      <Features />

      <ReviewByRich />

      <Beginning />

      <ReviewByIlya />

      <BottomCTA />
    </>
  );
}
