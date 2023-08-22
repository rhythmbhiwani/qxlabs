import { TypeAnimation } from "react-type-animation";

const TEXTS = [
  "Code.",
  "Create Bug Report.",
  "Run Live Example.",
  "Learn New Framework.",
  "Teach New Framework.",
  "Create Rapid Prototype.",
  "Present Live Demo.",
  "Collaborate.",
  "Get Feedback.",
];

function Banner() {
  return (
    <div className="background-image:linear-gradient(to_top,rgb(0,0,0,.32),transparent_400px)]">
      <div className="section lg:[background-image:url(/assets/effects/banner.gif)] py-40 relative overflow-hidden [ bg-no-repeat bg-right bg-contain">
        <div>
          <h1 className="font-redHatDisplay font-extrabold text-8xl">Click.</h1>
          <TypeAnimation
            sequence={TEXTS.map((t) => [t, 2000]).flat()}
            cursor={false}
            speed={50}
            deletionSpeed={80}
            className="font-redHatDisplay font-extrabold text-8xl whitespace-nowrap hidden lg:block"
            repeat={Infinity}
            preRenderFirstString
          />
          <h1 className="font-redHatDisplay font-extrabold text-8xl lg:hidden">
            Code.
          </h1>
          <h1 className="font-redHatDisplay font-extrabold text-8xl text-[#69f5ff]">
            Done.
          </h1>
        </div>

        <p className="mt-20 opacity-60 text-xl max-w-[600px] leading-loose">
          Stay in the flow with instant dev experiences. No more hours
          stashing/pulling/installing locally — just click, and start coding.
        </p>
      </div>
    </div>
  );
}

export default Banner;
