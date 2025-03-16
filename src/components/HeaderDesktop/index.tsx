import NavItem from "../NavItem";

export default function HeaderDesktop() {
  return (
    <header className="w-full h-[56px] border-b border-slate-700 flex text-base text-slate-400 justify-between items-center">
      <div className="flex w-[740px] justify-between h-full">
        <div className="w-[183px] h-full flex items-center justify-center">
          <p>victor-hugo</p>
        </div>
        <nav className="h-full">
          <ul className="flex h-full">
            <NavItem href="#" label="_home" />
            <NavItem href="#" label="_sobre-mim" />
            <NavItem href="#" label="_projetos" />
          </ul>
        </nav>
      </div>
      <div className="flex h-full">
        <NavItem href="#" label="_contato" borderLeftOnly />
      </div>
    </header>
  );
}
