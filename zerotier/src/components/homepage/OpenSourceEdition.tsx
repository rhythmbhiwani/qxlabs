import Link from "next/link";
import React from "react";
import Button from "../common/Button";

function OpenSourceEdition() {
  return (
    <div className="section mt-20">
      <div className="bg-[#262626] p-10 rounded-2xl">
        <h3 className="heading mb-5">Open Source Community Edition</h3>
        <p className="text-xl font-light mb-5">
          Featuring unlimited nodes, networks, and admins. Self-hosted. Designed
          for non-Commercial Use cases.
        </p>
        <div className="flex flex-wrap items-center justify-start gap-5">
          <Button title="Contact SP Sales" />
          <Link className="text-xl font-light hover-brand-color" href={"#"}>
            Read Documentation
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OpenSourceEdition;
