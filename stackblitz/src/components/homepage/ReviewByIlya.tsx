import React from "react";
import Review from "../common/Review";
import Logo from "@public/assets/icons/quote-logo-shopify.svg";
import Author from "@public/assets/icons/quote-author-ilya_grigorik.jpg";

function ReviewByIlya() {
  return (
    <Review
      quote="**StackBlitz unlocks a true one-click startup** experience with the full stack running in the browser — **it's a game-changer.**"
      wrapperClassName="bg-[#fbfeff] text-black"
      authorImage={Author}
      companyImage={Logo}
      authorName="ILYA GRIGORIK"
      authorDesignation="Principal Engineer at Shopify"
    />
  );
}

export default ReviewByIlya;
