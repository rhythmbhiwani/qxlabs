import React from "react";
import Review from "../common/Review";
import Logo from "@public/assets/icons/quote-logo-svelte.svg";
import Author from "@public/assets/icons/quote-author-rich_harris.jpg";

function ReviewByRich() {
  return (
    <Review
      quote="It's surely only a matter of time before locally installed IDEs **go the way of the Walkman.**"
      wrapperClassName="bg-[#131519] text-white"
      authorImage={Author}
      companyImage={Logo}
      authorName="RICH HARRIS"
      authorDesignation="Svelte & SvelteKit creator"
    />
  );
}

export default ReviewByRich;
