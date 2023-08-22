import CardBgBytecodeAlliance from "@public/assets/cards/card-bg-bytecode_alliance.png";
import CardBgVite from "@public/assets/cards/card-bg-vite.png";
import FlaskPotionLight from "@public/assets/icons/flask-potion-light.svg";
import Image from "next/image";
import Card from "../common/Card";

function Beginning() {
  return (
    <div className="relative [background-image:linear-gradient(to_top,rgb(0,0,0,.32),transparent400px)] py-32 before:[background-image:url('/assets/effects/section-bg-pink.png')] before:absolute before:top-0 before:right-0 before:w-[840px] before:h-[440px] before:bg-center before:bg-no-repeat before:bg-contain before:z-[-1]">
      <div className="section flex flex-col items-start justify-start">
        <Image width={40} src={FlaskPotionLight} alt="FlaskPotionLight" />
        <span className="text-sm text-[#ff2e9f] uppercase font-black font-redHatDisplay mt-3 mb-5">
          INVESTED IN THE FUTURE
        </span>
        <h2 className="text-6xl font-bold font-redHatDisplay mb-10">
          This is just the beginning.
        </h2>
        <p className="max-w-[660px] text-white/70 text-lg leading-loose">
          We&apos;re working with and{" "}
          <span className="font-bold text-white/90">
            invested in the fastest growing open source projects
          </span>{" "}
          to make instant, secure-by-default{" "}
          <span className="font-bold text-white/90">
            browser-based computing
          </span>{" "}
          accessible to everyone.
        </p>

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-20 py-20">
          <Card
            heading="StackBlitz has joined the **Bytecode Alliance**"
            cardBG={CardBgBytecodeAlliance}
          />
          <Card
            heading="StackBlitz is now the **Largest backer of Vite**"
            cardBG={CardBgVite}
          />
        </div>
      </div>
    </div>
  );
}

export default Beginning;
