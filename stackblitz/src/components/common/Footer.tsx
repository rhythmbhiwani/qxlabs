import { footerItems } from "@/utils/footerItems";
import Link from "next/link";

function Footer() {
  return (
    <div className="bg-[#121416]">
      <footer className="section text-white text-lg">
        <div className="pt-24 pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-x-5 gap-y-5">
          {footerItems.map((item) => (
            <div key={item.title} className="w-full my-5">
              <h2 className="text-xs font-bold tracking-[1px] text-white/90 mb-6 uppercase">
                {item.title}
              </h2>
              <nav className="list-none">
                {item.links.map((link) => (
                  <li key={link.title}>
                    <Link href={link.href} className="text-[13px] leading-3">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </nav>
            </div>
          ))}
        </div>
      </footer>
      <div className="bg-black/40">
        <div className="section flex flex-col items-center text-center justify-center py-10">
          <p className="text-white/60 text-xs mb-2">© 2023 StackBlitz, Inc.</p>
          <p className="text-white/60 opacity-60 text-[11px]">
            StackBlitz Codeflow and the Infinite Pull Request logo are
            trademarks of StackBlitz, Inc.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
