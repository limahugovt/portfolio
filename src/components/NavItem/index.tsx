interface NavItemProps {
  href: string;
  label: string;
}

export default function NavItem({ href, label }: NavItemProps) {
  return (
    <li className="flex border-l border-r border-slate-700">
      <div className="flex px-8 h-full items-center justify-center hover:border-b-[3px] hover:border-orange-300 hover:text-slate-50">
        <a href={href}>{label}</a>
      </div>
    </li>
  );
}
