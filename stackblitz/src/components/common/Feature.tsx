import { customComponents } from "@/utils/customComponents";
import classNames from "classnames";
import Image, { StaticImageData } from "next/image";
import ReactMarkdown from "react-markdown";

interface Props {
  heading: string;
  description: string;
  image: StaticImageData;
  invert?: boolean;
}

function Feature({ image, heading, description, invert = false }: Props) {
  return (
    <div
      className={classNames(
        "flex flex-col items-center justify-center gap-10 py-20",
        { "lg:flex-row": !invert },
        { "lg:flex-row-reverse": invert }
      )}
    >
      <div className="flex lg:w-1/2 flex-col p-5 lg:p-14">
        <h4 className="text-5xl font-redHatDisplay mb-8 lg:max-w-md leading-[1.2]">
          {heading}
        </h4>
        <ReactMarkdown
          components={customComponents}
          className="lg:max-w-[500px] text-white/70 text-lg leading-loose"
        >
          {description}
        </ReactMarkdown>
      </div>
      <div className="lg:w-1/2">
        <Image src={image} alt="Demo Image" />
      </div>
    </div>
  );
}

export default Feature;
