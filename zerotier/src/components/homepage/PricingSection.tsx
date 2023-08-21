import { pricingItems } from "@/utils/pricingItems";
import classNames from "classnames";
import Image from "next/image";
import Button from "../common/Button";

function PricingSection() {
  return (
    <div className="section py-20 text-center">
      <h2 className="heading text-2xl md:text-5xl mb-5 font-rubik">Pricing</h2>
      <p className="text-lg mb-10">
        ZeroTier makes networking easy for everyone - anywhere.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {pricingItems.map((item) => (
          <div
            key={item.title}
            className={classNames(
              "w-full flex flex-col items-center justify-center text-center py-10 px-5 ring rounded-xl",
              item.colorClasses.ring
            )}
          >
            <Image width={64} src={item.icon} alt="Basic" />
            <h4 className="text-3xl font-semibold mt-3 mb-3">{item.title}</h4>
            <p className="text-lg font-light mb-3">{item.description}</p>
            <ul className="text-lg font-light">
              {item.features.map((feature) => (
                <li className="my-2" key={feature}>
                  {feature}
                </li>
              ))}
            </ul>
            <div className="flex-1 flex items-center justify-end pt-8">
              <Button
                title={item.buttonTitle}
                className={item.colorClasses.button}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PricingSection;
