import Folder from "@/src/components/Folder";
import NavIcon from "@/src/components/NavIcon";
import TemplateDefault from "@/src/components/TemplateDefault";
import {
  RiArrowDownSFill,
  RiCloseFill,
  RiGamepadFill,
  RiProfileFill,
  RiTerminalBoxFill,
} from "@remixicon/react";
import { useState } from "react";

export default function AboutMe() {
  const [isShowFolders, setIsShowFolders] = useState(true);

  return (
    <TemplateDefault>
      <section className="w-full h-[calc(100%-112px)] flex">
        <div className="flex w-full">
          <div className="h-full w-[69px] border-r border-slate-700 flex flex-col items-center gap-8 py-3">
            <NavIcon
              href="/sobre-mim/informacoes-profissionais"
              Icon={RiTerminalBoxFill}
            />
            <NavIcon
              href="/sobre-mim/informacoes-pessoais"
              Icon={RiProfileFill}
            />
            <NavIcon href="/sobre-mim/gostos-pessoais" Icon={RiGamepadFill} />
          </div>
          <div className="w-[244px] border-r border-slate-700">
            <div
              className="flex items-center gap-3 border-b border-slate-700 py-3 px-6 cursor-pointer"
              onClick={() => setIsShowFolders(!isShowFolders)}
            >
              <RiArrowDownSFill
                className={`${isShowFolders ? "" : "rotate-180"} text-slate-50`}
                size={16}
              />
              <p>info-pessoais</p>
            </div>
            {isShowFolders && (
              <div className="flex gap-2 p-3 flex-col border-b border-slate-700">
                <Folder
                  name="biografia"
                  files={["teste"]}
                  classNameFolder="text-rose-400"
                />
                <Folder
                  name="outra-pasta"
                  files={["arquivo1", "arquivo2"]}
                  classNameFolder="text-teal-400"
                />
                <Folder
                  name="outra-pasta"
                  files={["arquivo1", "arquivo2"]}
                  classNameFolder="text-teal-400"
                />
              </div>
            )}
          </div>
          <div className="flex flex-col w-[calc(100%-313px)]">
            <div className="h-[49px] border-b border-slate-700 flex">
              <div className="flex gap-1 w-60 h-full px-6 items-center border-r border-slate-700">
                <p className="w-full text-slate-400">arquivo1</p>
                <RiCloseFill
                  size={16}
                  className="fill-slate-400 cursor-pointer"
                />
              </div>
              <div className="flex gap-1 w-60 h-full px-6 items-center border-r border-slate-700">
                <p className="w-full text-slate-400">arquivo1</p>
                <RiCloseFill
                  size={16}
                  className="fill-slate-400 cursor-pointer"
                />
              </div>
            </div>
            <div className="px-10 py-3">
              <p>oi</p>
            </div>
          </div>
        </div>
      </section>
    </TemplateDefault>
  );
}
