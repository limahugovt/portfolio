import Link from "next/link";

interface NavItemProps {
  href: string;
  label: string;
  borderLeftOnly?: boolean;
  isActived?: boolean;
}

export default function NavItem({
  href,
  label,
  borderLeftOnly = false,
  isActived = false,
}: NavItemProps) {
  return (
    <li
      className={`flex ${
        borderLeftOnly ? "border-l" : "border-l border-r"
      } border-slate-700`}
    >
      <Link
        href={href}
        className={`flex px-8 h-full items-center justify-center hover:border-b-[3px] hover:border-orange-300 hover:text-slate-50 
      ${
        isActived
          ? "border-b-[3px] border-orange-300 text-slate-50"
          : "text-slate-400"
      }
      transition-all duration-75`}
      >
        {label}
      </Link>
    </li>
  );
}
