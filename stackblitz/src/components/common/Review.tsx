import Image, { StaticImageData } from "next/image";
import React from "react";
import ReactMarkdown from "react-markdown";

interface Props {
  quote: string;
  wrapperClassName: string;
  authorImage: StaticImageData;
  companyImage: StaticImageData;
  authorName: string;
  authorDesignation: string;
}

function Review({
  authorDesignation,
  authorImage,
  authorName,
  companyImage,
  quote,
  wrapperClassName,
}: Props) {
  return (
    <div className={wrapperClassName}>
      <div className="section text-center py-20">
        <h4 className="font-redHatDisplay text-4xl max-w-3xl mx-auto mb-10 leading-normal">
          <ReactMarkdown>{'"' + quote + '"'}</ReactMarkdown>
        </h4>

        <div className="flex flex-row items-center justify-center space-x-10">
          <Image
            width={48}
            src={authorImage}
            alt="QuoteAuthorStephenFluin"
            className="rounded-full"
          />
          <Image width={36} src={companyImage} alt="Company Logo" />
          <div className="flex flex-col items-start justify-center">
            <span className="font-bold">{authorName}</span>
            <span className="opacity-60">{authorDesignation}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;
