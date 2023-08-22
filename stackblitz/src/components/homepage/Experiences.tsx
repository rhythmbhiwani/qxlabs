import BugReportDemo from "@public/assets/demos/bug_reports.png";
import InteractiveDocumentation from "@public/assets/demos/interactive_documentation.png";
import RapidPrototyping from "@public/assets/demos/rapid_prototyping.png";
import Image from "next/image";
import MagicWand from "../graphics/MagicWand";
import ReactMarkdown from "react-markdown";
import Experience from "../common/Experience";

function Experiences() {
  return (
    <div className="bg-[#f1f4f8] text-black py-20">
      <div className="section flex flex-col items-start justify-start">
        <MagicWand />
        <span className="text-sm text-[#1b82bc] uppercase font-black font-redHatDisplay mt-3 mb-10">
          INSTANT DEV EXPERIENCES
        </span>
        <h2 className="text-7xl font-extrabold mb-10 leading-[78px] text-black/80">
          Wait, I can enjoy web dev again?
        </h2>
        <ReactMarkdown className="max-w-[740px] text-black/70 leading-loose text-lg">
          {
            "Significantly reduce time to market with **matchlessly secure, instantly reproducible, fullstack dev environments** which **boot in milliseconds.**"
          }
        </ReactMarkdown>
      </div>

      <div>
        <Experience
          heading="Instant Bug Reports"
          descriptions={[
            `Create **zero-overhead, live templates** for your users to reliably submit bugs against, **filtering out true issues** from everything else.`,
            `[Share complete environments with only a url](#), and never spin up heavy local installations for a simple bug report ever again.`,
          ]}
          image={BugReportDemo}
        />

        <Experience
          heading="Interactive Documentation"
          descriptions={[
            `[Use the StackBlitz SDK](#) to embed and interact with actual code in
            your actual docs, blog or website.`,
          ]}
          image={InteractiveDocumentation}
          invert={true}
        />

        <Experience
          heading="Rapid Prototyping"
          descriptions={[
            `Speed up your entire development process with **real time
            hot-reloading in the** [fastest dev environment ever made](#).`,
            `Collaborate remotely on different devices, send and receive instant feedback, and **get to market faster.**`,
          ]}
          image={BugReportDemo}
        />
      </div>
    </div>
  );
}

export default Experiences;
