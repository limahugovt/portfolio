import { RiCloseFill, RiMenuLine } from "@remixicon/react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function HeaderMobile() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <header
      className={`w-full ${
        isOpened ? "h-full" : "h-[56px]"
      } border-b border-slate-700 flex text-base text-slate-400 flex-col`}
    >
      <div className="flex w-full justify-between items-center h-[56px]">
        <div className="w-full px-6 py-4">
          <p>victor-hugo</p>
        </div>
        <button
          className="p-4 border-l border-slate-700"
          onClick={() => setIsOpened(!isOpened)}
        >
          {isOpened ? (
            <RiCloseFill size={24} color="#62748E" />
          ) : (
            <RiMenuLine size={24} color="#62748E" />
          )}
        </button>
      </div>
      <AnimatePresence>
        {isOpened && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="z-10 w-full h-full bg-slate-900"
          >
            <div className="w-full px-6 py-4">
              <p># navegação:</p>
            </div>
            <div>
              <nav className="text-slate-50">
                <ul>
                  <li className="border-b border-t px-6 py-4 border-slate-700 w-full">
                    <Link href="/">_home</Link>
                  </li>
                  <li className="border-b border-t px-6 py-4 border-slate-700 w-full">
                    <Link href="/sobre-mim">_sobre-mim</Link>
                  </li>
                  <li className="border-b border-t px-6 py-4 border-slate-700 w-full">
                    <Link href="#">_projetos</Link>
                  </li>
                  <li className="border-b border-t px-6 py-4 border-slate-700 w-full">
                    <Link href="#">_contato</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
