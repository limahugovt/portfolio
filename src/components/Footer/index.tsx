import { RiGithubFill, RiLinkedinFill, RiTwitterXFill } from "@remixicon/react";

export default function Footer() {
  const githubLink = "https://github.com/limahugovt";

  return (
    <footer className="h-[56px] w-full flex justify-between items-center border-t border-slate-700 text-slate-400">
      <div className="flex h-full items-center">
        <div className="px-2 lg:px-[26.5px] text-sm lg:text-base">
          <p>me encontre no:</p>
        </div>
        <a
          href="#"
          className="border-x border-slate-700 h-full px-4 flex items-center"
        >
          <RiTwitterXFill
            className="fill-slate-500 hover:fill-slate-50 transition-colors duration-150"
            size={24}
          />
        </a>
        <a
          href="#"
          className="border-x border-slate-700 h-full px-4 flex items-center"
        >
          <RiLinkedinFill
            className="fill-slate-500 hover:fill-slate-50 transition-colors duration-150"
            size={24}
          />
        </a>
      </div>
      <a
        href={githubLink}
        target="_blank"
        className="border-l border-slate-700 h-full px-4 flex items-center gap-1 hover:text-slate-50 fill-slate-500 hover:fill-slate-50 transition-colors duration-150"
      >
        <p className="hidden lg:block">@limahugovt</p>
        <RiGithubFill size={24} />
      </a>
    </footer>
  );
}
