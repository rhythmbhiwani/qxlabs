import { ReactNode } from "react";

import { Rubik, Karla } from "next/font/google";
import classNames from "classnames";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";

const rubik = Rubik({ subsets: ["latin"], variable: "--rubik-font" });
const karla = Karla({ subsets: ["latin"], variable: "--karla-font" });

function MainLayout({ children }: { children: ReactNode }) {
  return (
    <main className={classNames("font-karla", rubik.variable, karla.variable)}>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </main>
  );
}

export default MainLayout;
