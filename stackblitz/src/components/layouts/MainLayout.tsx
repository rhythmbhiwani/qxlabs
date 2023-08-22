import { ReactNode } from "react";

import { Inter, Red_Hat_Display } from "next/font/google";
import classNames from "classnames";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--inter-font" });
const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  variable: "--redHatDisplay-font",
});

function MainLayout({ children }: { children: ReactNode }) {
  return (
    <main
      className={classNames(
        "font-inter",
        inter.variable,
        redHatDisplay.variable
      )}
    >
      <Navbar />
      <div>{children}</div>
      <Footer />
    </main>
  );
}

export default MainLayout;
