import { NAV_ITEM } from "@/utils/navItems";
import classNames from "classnames";
import Link from "next/link";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

function MobileNavDropdown({ navItem }: { navItem: NAV_ITEM }) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!navItem.links) return null;
  return (
    <div>
      <button
        onClick={() => setIsExpanded((value) => !value)}
        className="hover-brand-color text-xl font-light flex flex-row items-center"
      >
        {navItem.title}{" "}
        <span
          className={classNames(
            "transition-all",
            { "rotate-180 transition-all": isExpanded },
            { "rotate-0 ": !isExpanded }
          )}
        >
          <IoIosArrowDown size={20} className={`ml-1`} aria-hidden="true" />
        </span>
      </button>
      {isExpanded && (
        <div className="w-full flex flex-col text-lg font-light ml-10 mt-5">
          {navItem?.links?.map((item) => (
            <Link key={item.title} href={item.href ?? "#"}>
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default MobileNavDropdown;
