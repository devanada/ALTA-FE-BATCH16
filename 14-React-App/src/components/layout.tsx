import { ReactNode } from "react";

import Navbar from "./navbar";
import Footer from "./footer";

interface Props {
  children: ReactNode;
}

const Layout = (props: Readonly<Props>) => {
  const { children } = props;

  return (
    <div className="w-full h-screen bg-white font-roboto flex flex-col overflow-auto">
      <Navbar />
      <div className="container grow mx-auto py-4 px-8 flex flex-col">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
