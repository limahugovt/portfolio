interface NavItemProps {
  href: string;
  label: string;
  borderLeftOnly?: boolean;
}

export default function NavItem({
  href,
  label,
  borderLeftOnly = false,
}: NavItemProps) {
  return (
    <li
      className={`flex ${
        borderLeftOnly ? "border-l" : "border-l border-r"
      } border-slate-700`}
    >
      <div className="flex px-8 h-full items-center justify-center hover:border-b-[3px] hover:border-orange-300 hover:text-slate-50 transition-all duration-75">
        <a href={href}>{label}</a>
      </div>
    </li>
  );
}
