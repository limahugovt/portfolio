import { RiCloseFill, RiMenuLine } from "@remixicon/react";
import { useState } from "react";

export default function HeaderMobile() {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <header className="w-full h-[56px] border-b border-slate-700 flex text-base text-slate-400 justify-between items-center">
      <div className="w-full px-6 py-4">
        <p>victor-hugo</p>
      </div>
      <button
        className="p-4 border-l border-slate-700"
        onClick={() => setIsOpened(!isOpened)}
      >
        {isOpened ? (
          <RiMenuLine size={24} color="#62748E" />
        ) : (
          <RiCloseFill size={24} color="#62748E" />
        )}
      </button>
    </header>
  );
}
