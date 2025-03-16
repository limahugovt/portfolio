import { ReactNode } from "react";
import Footer from "../Footer";
import Header from "../Header";

interface TemplateDefaultProps {
  children: ReactNode;
}

export default function TemplateDefault({ children }: TemplateDefaultProps) {
  return (
    <div className="w-full h-screen sm:p-[70px] p-4">
      <div className="bg-slate-900 w-full h-full rounded-lg border border-slate-700">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
}
