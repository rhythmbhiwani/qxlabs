import React from "react";
import Review from "../common/Review";
import Logo from "@public/assets/icons/quote-logo-github.svg";
import Author from "@public/assets/icons/quote-author-tom_preston_werner.png";

function ReviewByTom() {
  return (
    <Review
      quote="StackBlitz is the first online IDE **whose compute model makes sense to me.**"
      wrapperClassName="bg-[#131519] text-white"
      authorImage={Author}
      companyImage={Logo}
      authorName="TOM PRESTON-WERNER"
      authorDesignation="founder of GitHub & Investor in StackBlitz"
    />
  );
}

export default ReviewByTom;
