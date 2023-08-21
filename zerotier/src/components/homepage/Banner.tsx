import Link from "next/link";
import React from "react";
import Button from "../common/Button";

function Banner() {
  return (
    <div className="[background:linear-gradient(90deg,#1a1a1a,#1a1a1a,#1a1a1a25,#1a1a1a00)] py-32">
      <div className="bg-banner bg-center absolute top-0 right-0 h-[45rem] w-full z-[-1] bg-no-repeat" />
      <div className="section grid grid-cols-1 md:grid-cols-2 z-10">
        <div className="flex flex-col w-full items-start justify-center">
          <h1 className="heading text-3xl md:text-6xl mb-5 font-rubik">
            Securely connect any device, anywhere
          </h1>

          <p className="text-lg md:text-2xl">
            ZeroTier lets you build modern, secure multi-point virtualized
            networks of almost any type. From robust peer-to-peer networking to
            multi-cloud mesh infrastructure, we enable global connectivity with
            the simplicity of a local network.
          </p>
          <div className="flex flex-wrap items-center justify-start gap-5 mt-10">
            <Button
              className="!bg-brand !text-[#1a1a1a] !ring-0 hover:!bg-transparent hover:!text-brand hover:!ring-brand hover:!ring-1"
              title="Get ZeroTier"
            />
            <Link className="text-xl font-light hover-brand-color" href={"#"}>
              Learn More &gt;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
