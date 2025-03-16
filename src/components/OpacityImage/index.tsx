import Image from "next/image";

interface OpacityImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  opacity: number;
  className?: string;
}

export default function OpacityImage({
  alt,
  height,
  opacity,
  src,
  width,
  className,
}: OpacityImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`${className} opacity-${opacity}`}
    />
  );
}
