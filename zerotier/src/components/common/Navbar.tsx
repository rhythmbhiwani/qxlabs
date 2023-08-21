import React, { useState } from "react";
import Logo from "./Logo";
import { NAV_ITEM_TYPE, navItems } from "@/utils/navItems";
import Link from "next/link";
import NavDropdown from "./NavDropdown";
import Button from "./Button";
import { GiHamburgerMenu } from "react-icons/gi";
import MobileNavbar from "./MobileNavbar";

function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <>
      <MobileNavbar
        showMobileMenu={showMobileMenu}
        setShowMobileMenu={setShowMobileMenu}
      />
      <header className="section py-5 flex flex-row items-center justify-between [background:linear-gradient(90deg,#1a1a1a,#1a1a1a,#1a1a1a25,#1a1a1a00)]">
        <Logo />

        {/* NavItems */}
        <nav className="hidden lg:flex flex-row items-center justify-center space-x-5">
          {navItems.map((navItem) => (
            <div key={navItem.title}>
              {navItem.type === NAV_ITEM_TYPE.LINK && navItem.href && (
                <Link
                  className="hover-brand-color text-xl font-light"
                  href={navItem.href}
                >
                  {navItem.title}
                </Link>
              )}
              {navItem.type === NAV_ITEM_TYPE.DROPDOWN && (
                <NavDropdown navItem={navItem} />
              )}
            </div>
          ))}
        </nav>

        {/* Auth Options */}
        <div className="flex flex-wrap items-center justify-start gap-5">
          <Link
            className="text-xl font-light hover-brand-color hidden md:inline"
            href={"#"}
          >
            Login
          </Link>
          <Button
            className="!bg-brand !text-[#1a1a1a] !ring-0 hover:!bg-black hover:!text-brand hover:!ring-brand hover:!ring-1"
            title="Sign Up"
          />
          <button
            className="text-brand"
            onClick={() => setShowMobileMenu(true)}
          >
            <GiHamburgerMenu size={25} />
          </button>
        </div>
      </header>
    </>
  );
}

export default Navbar;
