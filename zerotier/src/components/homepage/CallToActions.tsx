import { ctaItems } from "@/utils/ctaItems";
import Image from "next/image";
import React from "react";
import Button from "../common/Button";
import classNames from "classnames";

function CallToActions() {
  return (
    <div className="section grid grid-cols-1 gap-10">
      {ctaItems.map((item) => (
        <div
          key={item.heading}
          className={classNames(
            "rounded-3xl bg-secondary p-10 flex flex-col",
            {
              "md:flex-row": item.invert,
            },
            {
              "md:flex-row-reverse": !item.invert,
            }
          )}
        >
          <Image
            className="mx-auto"
            width={375}
            src={item.image}
            alt={item.heading}
          />
          <div className="flex flex-col items-start justify-center space-y-5">
            <h3 className="heading font-rubik text-2xl md:text-5xl">
              {item.heading}
            </h3>
            <p className="text-2xl">{item.description}</p>
            <Button title={item.buttonTitle} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default CallToActions;
