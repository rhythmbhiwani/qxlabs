import { targetAudience } from "@/utils/targetAudience";
import Image from "next/image";

function TargetAudience() {
  return (
    <div className="section py-20">
      <h2 className="heading text-2xl md:text-5xl mb-5 font-rubik text-center">
        Secure networks for teams of any size
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {targetAudience.map((item) => (
          <div
            key={item.title}
            className="text-center flex flex-col items-center justify-start"
          >
            <Image width={170} src={item.icon} alt="GameIcon" />
            <h4 className="text-xl md:text-3xl font-semibold mb-5">
              Individuals
            </h4>
            {item.features.map((feature) => (
              <p className="text-lg md:text-xl my-2" key={feature}>
                {feature}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TargetAudience;
