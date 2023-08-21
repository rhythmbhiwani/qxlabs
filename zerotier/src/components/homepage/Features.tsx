import { featureItems } from "@/utils/featureItems";
import classNames from "classnames";
import Image from "next/image";
import Button from "../common/Button";

function Features() {
  return (
    <div className="section py-10">
      <div className="bg-[#262626] p-10 rounded-3xl">
        {featureItems.map((item) => (
          <div
            key={item.title}
            className={classNames(
              "flex items-center justify-center my-5 flex-col gap-10",
              {
                "lg:flex-row": !item.invert,
              },
              {
                "lg:flex-row-reverse": item.invert,
              }
            )}
          >
            <Image width={512} src={item.image} alt="VPN and SD-WAN" />
            <div>
              <h3 className="text-xl md:text-3xl font-semibold mb-5">
                {item.title}
              </h3>
              {item.descriptionHTML.map((d) => (
                <p
                  key={d}
                  className="text-lg md:text-2xl my-5 font-light"
                  dangerouslySetInnerHTML={{ __html: d }}
                ></p>
              ))}

              <Button
                className="bg-white text-[#262626] hover:!bg-transparent hover:text-white"
                title={item.buttonTitle}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
