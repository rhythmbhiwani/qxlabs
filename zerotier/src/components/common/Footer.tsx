import { footerItems } from "@/utils/footerItems";
import { footerSocialIcons } from "@/utils/footerSocialIcons";
import Link from "next/link";
import Logo from "./Logo";

function Footer() {
  return (
    <footer className="section text-white text-lg">
      <div className="pt-24 pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-x-5 gap-y-5">
        <div className="w-full lg:col-span-2">
          <Link href={"/"}>
            <Logo />
          </Link>
          <p className="mt-5">Securely Connecting The World&apos;s Devices </p>
        </div>
        {footerItems.map((item) => (
          <div key={item.title} className="w-full">
            <h2 className="text-xl tracking-widest mb-3 uppercase">
              {item.title}
            </h2>
            <nav className="list-none mb-4">
              {item.links.map((link) => (
                <li key={link.title}>
                  <Link href={link.href} className="hover-brand-color">
                    {link.title}
                  </Link>
                </li>
              ))}
            </nav>
          </div>
        ))}
      </div>
      <div>
        <div className="py-4 flex flex-row items-center justify-start space-x-5">
          {footerSocialIcons.map(({ Icon, href }, index) => (
            <Link key={index} href={href}>
              <Icon size={25} />
            </Link>
          ))}
        </div>
      </div>
      <div className="mx-auto py-4 flex flex-wrap justify-between sm:flex-row pb-10 pr-5">
        <p className="text-left">© 2023 ZeroTier, Inc. All rights reserved.</p>
        <span className="flex flex-row items-center justify-start space-x-2">
          <Link href={"#"}>Terms</Link>
          <Link href={"#"}>Privacy Policy</Link>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
