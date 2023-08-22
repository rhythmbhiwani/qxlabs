import React from "react";
import Review from "../common/Review";
import Logo from "@public/assets/icons/quote-logo-google.svg";
import Author from "@public/assets/icons/quote-author-stephen_fluin.png";

{
  /* <div className="bg-[#fbfeff] text-black">
        <h4>
          &quot;Being able to instantly open and share environments has
          significantly reduced our team&apos;s support burden for bug
          reproductions and enabled rapid innovation.&quot;
        </h4>

        <div className="flex flex-row items-center justify-center space-x-10">
          <Image
            width={48}
            src={QuoteAuthorStephenFluin}
            alt="QuoteAuthorStephenFluin"
            className="rounded-full"
          />
          <Image width={48} src={QuoteLogoGoogle} alt="QuoteLogoGoogle" />
          <div>
            <span>STEPHEN FLUIN</span>
            <span>Developer Relations Lead at Google</span>
          </div>
        </div>
      </div> */
}
function ReviewByStephen() {
  return (
    <Review
      quote="Being able to instantly open and share environments has **significantly reduced our team's support burden** for bug reproductions and enabled rapid innovation."
      wrapperClassName="bg-[#fbfeff] text-black"
      authorImage={Author}
      companyImage={Logo}
      authorName="STEPHEN FLUIN"
      authorDesignation="Developer Relations Lead at Google"
    />
  );
}

export default ReviewByStephen;
