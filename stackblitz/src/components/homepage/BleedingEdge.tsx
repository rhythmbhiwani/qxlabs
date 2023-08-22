import { comparisionItems } from "@/utils/comparisionItems";
import { customComponents } from "@/utils/customComponents";
import CardBgWebcontainer from "@public/assets/cards/card-bg-webcontainer.png";
import ReactMarkdown from "react-markdown";
import Card from "../common/Card";
import LogoFull from "../common/LogoFull";
import BleedingEdgeGraphic from "../graphics/BleedingEdgeGraphic";

function BleedingEdge() {
  return (
    <div className="relative [background-image:linear-gradient(to_bottom,rgb(0,0,0,.32),transparent80%)] py-32 before:[background-image:url('/assets/effects/section-bg-cyan.png')] before:absolute before:top-0 before:right-0 before:w-[840px] before:h-[440px] before:bg-center before:bg-no-repeat before:bg-contain before:z-[-1]">
      <div className="section flex flex-col items-start justify-start">
        <BleedingEdgeGraphic />
        <span className="text-sm text-[#00e6ff] uppercase font-black font-redHatDisplay mt-3 mb-10">
          BLEEDING EDGE
        </span>
        <h2 className="text-5xl lg:text-7xl font-bold font-redHatDisplay mb-10 max-w-[900px] leading-[78px]">
          The first dev environment{" "}
          <span className="font-bold text-[#00e6ff]">faster</span> and{" "}
          <span className="font-bold text-[#00e6ff]">more secure</span> than
          local.
        </h2>

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-20 py-20">
          <Card
            heading="**Introducing WebContainers:** Run Node.js in your browser"
            cardBG={CardBgWebcontainer}
          />
          <ReactMarkdown
            components={customComponents}
            className="flex items-center justify-center text-white/70 text-lg leading-loose"
          >
            {
              "Powered by **WebContainers**, the **first WebAssembly-based operating system** which boots **entire development environments** in **milliseconds, securely** within your **browser tab.**"
            }
          </ReactMarkdown>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 overflow-x-auto">
          <div className="flex flex-col items-start justify-center">
            <h4 className="text-5xl font-redHatDisplay mb-10">
              What about other online IDEs?
            </h4>
            <div className="flex flex-col items-start justify-center space-y-10 leading-loose text-white/70">
              <ReactMarkdown components={customComponents}>
                {
                  "Unlike StackBlitz, **legacy online IDEs** run on remote servers and **stream the results back** to your browser. This approach yields **few security benefits** and provides a **worse experience** than your local machine in nearly every way."
                }
              </ReactMarkdown>
              <ReactMarkdown components={customComponents}>
                {
                  "**StackBlitz solves these problems by doing all compute inside your browser.** This leverages decades of speed and security innovations and also **unlocks key development & debugging benefits** (see below)."
                }
              </ReactMarkdown>
            </div>
          </div>

          <table className="text-sm border-collapse border-spacing-0">
            <thead>
              <tr>
                <th></th>
                <th className="px-5 py-7">
                  <LogoFull addIcon={true} />
                </th>
                <th className="text-white/70 px-5 py-7">Legacy Online IDEs</th>
              </tr>
            </thead>
            <tbody>
              {comparisionItems.map((item) => (
                <tr key={item.title}>
                  <td className="py-7 px-4 align-middle font-semibold text-white/80 border border-white/10 border-l-0">
                    {item.title}
                  </td>
                  <td className="bg-[#151619] px-8 py-6 text-center border border-white/10">
                    <span className="w-full flex items-center justify-center mb-3">
                      {item.stackblitz.icon}
                    </span>
                    {item.stackblitz.text && (
                      <span>{item.stackblitz.text}</span>
                    )}
                  </td>
                  <td className="px-8 py-6 flex flex-col items-center justify-center gap-3 text-center border border-white/10">
                    <span className="w-full flex items-center justify-center">
                      {item.others.icon}
                    </span>
                    {item.others.text && <span>{item.others.text}</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default BleedingEdge;
