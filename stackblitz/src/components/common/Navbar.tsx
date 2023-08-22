import { navItems } from "@/utils/navItems";
import Link from "next/link";
import LogoFull from "./LogoFull";
import LogoIcon from "./LogoIcon";

function Navbar() {
  return (
    <header className="w-full flex flex-row items-center justify-between section py-10 px-5">
      <div className="flex flex-row items-center justify-center">
        <LogoIcon />
        <LogoFull />
      </div>

      <nav className="lg:flex flex-row items-center justify-center gap-10 opacity-70 hidden">
        {navItems.map((navItem) => (
          <Link key={navItem.title} href={navItem.href}>
            {navItem.title}
          </Link>
        ))}
      </nav>

      <Link href={"#"}>Sign In</Link>
    </header>
  );
}

export default Navbar;
