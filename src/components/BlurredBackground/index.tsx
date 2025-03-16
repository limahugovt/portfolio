interface BlurredBackgroundProps {
  width: string;
  height: string;
  background: string;
  top?: string;
  left?: string;
  bottom?: string;
  right?: string;
  className?: string;
}

export default function BlurredBackground({
  width,
  height,
  background,
  top,
  left,
  bottom,
  right,
  className,
}: BlurredBackgroundProps) {
  return (
    <div
      className={className}
      style={{
        filter: "blur(80px)",
        position: "absolute",
        width,
        height,
        background,
        opacity: "0.4",
        top,
        left,
        bottom,
        right,
      }}
    />
  );
}
