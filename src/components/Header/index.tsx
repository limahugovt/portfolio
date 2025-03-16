import useGetWidth from "@/src/hooks/useGetWidth";
import HeaderDesktop from "../HeaderDesktop";
import HeaderMobile from "../HeaderMobile";

export default function Header() {
  const width = useGetWidth();
  return width > 899 ? <HeaderDesktop /> : <HeaderMobile />;
}
