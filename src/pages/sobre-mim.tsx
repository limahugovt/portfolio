import {
  RiGamepadFill,
  RiProfileFill,
  RiTerminalBoxFill,
} from "@remixicon/react";
import TemplateDefault from "../components/TemplateDefault";
import NavIcon from "../components/NavIcon";

export default function AboutMe() {
  return (
    <TemplateDefault>
      <section className="w-full h-[calc(100%-112px)] flex">
        <div className="flex border-r border-slate-700">
          <div className="h-full w-[69px] border-r border-slate-700 flex flex-col items-center gap-8 py-3">
            <NavIcon
              href="#informacoes-profissionais"
              Icon={RiTerminalBoxFill}
            />
            <NavIcon href="#informacoes-pessoais" Icon={RiProfileFill} />
            <NavIcon href="#gostos-pessoais" Icon={RiGamepadFill} />
          </div>
          <div className="w-[243px]">
            <p>oi</p>
          </div>
        </div>
      </section>
    </TemplateDefault>
  );
}
