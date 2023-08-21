import { NAV_ITEM_TYPE, navItems } from "@/utils/navItems";
import Logo from "./Logo";
import Link from "next/link";
import NavDropdown from "./NavDropdown";
import Button from "./Button";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";

function MobileNavbar({
  showMobileMenu,
  setShowMobileMenu,
}: {
  showMobileMenu: boolean;
  setShowMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  if (!showMobileMenu) return true;

  return (
    <div className="fixed top-0 left-0 right-0 bg-black bottom-0">
      <header className="section py-5 flex flex-row items-center justify-between">
        <Logo />

        {/* Auth Options */}
        <div className="flex flex-wrap items-center justify-start gap-5">
          <Button
            className="!bg-brand !text-[#1a1a1a] !ring-0 hover:!bg-black hover:!text-brand hover:!ring-brand hover:!ring-1"
            title="Sign Up"
          />
          <button
            className="text-brand"
            onClick={() => setShowMobileMenu(false)}
          >
            <FaTimes size={25} />
          </button>
        </div>
      </header>

      {/* NavItems */}
      <nav className="w-11/12 mx-auto flex flex-col items-start justify-center space-y-5">
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
    </div>
  );
}

export default MobileNavbar;
