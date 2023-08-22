import React from "react";
import Feature from "../common/Feature";
import FeatureFreshEnvironment from "@public/assets/demos/feature-fresh_environment.webp";
import FeatureZeroLatency from "@public/assets/demos/feature-zero_latency.webp";
import FeaturesChromeDevTools from "@public/assets/demos/features-chrome_dev_tools.webp";
import GraphqlLooped from "@public/assets/demos/graphql_looped.webp";

function Features() {
  return (
    <div className="[background-image:linear-gradient(to_bottom,rgb(0,0,0,.32),transparent80%)] relative py-32 before:[background-image:url('/assets/effects/section-bg-cyan.png')] before:absolute before:top-0 before:right-0 before:w-[840px] before:h-[440px] before:bg-center before:bg-no-repeat before:bg-contain before:z-[-1]">
      <div className="section text-5xl text-center">
        <h2 className="mb-10">
          Use the web{" "}
          <span className="font-bold text-[#69f5ff]">to build the web.</span>
        </h2>
      </div>

      <Feature
        heading="Seamless Node.js debugging with Chrome Dev Tools"
        description="Debug backend applications just as easily as frontend, using the powerful tools **already shipped in your browser.**"
        image={FeaturesChromeDevTools}
      />

      <Feature
        heading="Run the backend in the frontend."
        description="If it can run on Node.js, it can run on StackBlitz WebContainers, including backend functionality and libraries, meaning you can **run servers. In your browser.**"
        image={GraphqlLooped}
        invert={true}
      />

      <Feature
        heading="Fresh, fast environments on every page load."
        description="Reinstalling `node_modules` is as simple as refreshing the page, and since StackBlitz package installations are orders of magnitude
    faster than local, **installing packages is now a trivial endeavour.**"
        image={FeatureFreshEnvironment}
      />

      <Feature
        heading="Zero latency. Work offline."
        description="No external servers to connect to means no delays between your keystrokes and editor, and **an internet connection is not required.**"
        image={FeatureZeroLatency}
        invert={true}
      />
    </div>
  );
}

export default Features;
