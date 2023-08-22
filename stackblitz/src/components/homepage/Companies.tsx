import { lovedByCompanies } from "@/utils/lovedByCompanies";
import Image from "next/image";
import React from "react";

function Companies() {
  return (
    <div className="relative bg-green-purplish text-white px-10 py-20 text-center before:[backgroun1d-image:url('/assets/effects/quote-logo_grid-bg-pink.png')] before:bg-no-repeat before:w-full before:bottom-[-42px] before:left-0 before:bg-[left_center] before:bg-contain before:absolute before:h-96 before:mix-blend-lighten before:box-border after:[background-image:url('/assets/effects/quote-logo_grid-bg-blue.png')] after:bg-no-repeat after:w-full after:top-[-44px] after:right-0 after:bg-[right_center] after:bg-contain after:absolute after:h-96 after:mix-blend-lighten after:box-border overflow-hidden">
      <div className="section font-redHatDisplay text-4xl text-center font-bold">
        <h4 className="mb-5 font-normal">
          Loved by millions of developers every month
        </h4>
        <h4 className="mb-20">at the world&apos;s largest companies</h4>

        <div className="grid grid-cols-4 gap-x-10 gap-y-20">
          {lovedByCompanies.map((item) => (
            <div key={item.alt} className="flex items-center justify-center">
              <Image
                height={40}
                width={100}
                className="object-contain"
                src={item.image}
                alt={item.alt}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Companies;
