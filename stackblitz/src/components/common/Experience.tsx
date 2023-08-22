import classNames from "classnames";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { SpecialComponents } from "react-markdown/lib/ast-to-react";
import { NormalComponents } from "react-markdown/lib/complex-types";

interface Props {
  heading: string;
  descriptions: string[];
  image: StaticImageData;
  invert?: boolean;
}

const customComponents: Partial<
  Omit<NormalComponents, keyof SpecialComponents> & SpecialComponents
> = {
  a: ({ children }) => (
    <Link href="#" className="text-[#00a3cc]">
      {children}
    </Link>
  ),
};

function Experience({ image, heading, descriptions, invert = false }: Props) {
  return (
    <div
      className={classNames(
        "flex flex-col items-center justify-center gap-10 py-20",
        { "lg:flex-row": !invert },
        { "lg:flex-row-reverse": invert }
      )}
    >
      <div className="flex lg:w-1/2 flex-col p-5 lg:p-14">
        <h4 className="text-5xl font-redHatDisplay mb-8 max-w-md leading-[1.2]">
          {heading}
        </h4>
        {descriptions.map((description) => (
          <ReactMarkdown
            components={customComponents}
            key={description}
            className="max-w-[500px] text-black/70 text-lg leading-loose mb-5"
          >
            {description}
          </ReactMarkdown>
        ))}
      </div>
      <div className="lg:w-1/2">
        <Image src={image} alt="Demo Image" />
      </div>
    </div>
  );
}

export default Experience;
