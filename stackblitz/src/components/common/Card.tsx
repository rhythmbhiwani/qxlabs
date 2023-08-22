import Image, { StaticImageData } from "next/image";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import ReactMarkdown from "react-markdown";

interface Props {
  heading: string;
  cardBG: StaticImageData;
}

function Card({ heading, cardBG }: Props) {
  return (
    <div className="group relative bg-white text-black w-full p-10 rounded-xl transition-all duration-200 hover:scale-105 cursor-pointer overflow-hidden">
      <Image
        className="absolute top-[60%] left-[52%] translate-y-[-42%] group-hover:translate-x-[20%] transition-all duration-500 ease-in-out"
        width={590}
        src={cardBG}
        alt="Static Image"
      />
      <h4 className="text-4xl max-w-[490px] mb-20">
        <ReactMarkdown>{heading}</ReactMarkdown>
      </h4>
      <button className="flex flex-row items-center justify-start space-x-4 text-[#00a8db] font-semibold">
        <span>READ ARTICLE</span>
        <span className="group-hover:ml-10 transition-all">
          <AiOutlineArrowRight size={24} />
        </span>
      </button>
    </div>
  );
}

export default Card;
