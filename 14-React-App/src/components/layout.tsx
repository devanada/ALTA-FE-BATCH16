import { ReactNode } from "react";

import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

interface Props {
  children: ReactNode;
}

const Layout = (props: Readonly<Props>) => {
  const { children } = props;

  return (
    <div className="w-full h-screen bg-white dark:bg-black font-roboto flex flex-col overflow-auto">
      <Navbar />
      <div className="container grow mx-auto py-4 px-8 flex flex-col">
        {children}
      </div>
      <Toaster />
      <Footer />
    </div>
  );
};

export default Layout;
