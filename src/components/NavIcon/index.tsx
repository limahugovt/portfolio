import { RemixiconComponentType } from "@remixicon/react";
import Link from "next/link";
import { useRouter } from "next/router";

interface NavIconProps {
  href: string;
  Icon: RemixiconComponentType;
}

export default function NavIcon({ href, Icon }: NavIconProps) {
  const router = useRouter();
  const isActive = router.asPath.includes(href);

  return (
    <Link href={href}>
      <Icon
        size={24}
        className={`${
          isActive ? "fill-slate-50" : "fill-slate-500"
        } hover:fill-slate-300 transition-colors duration-150`}
      />
    </Link>
  );
}
