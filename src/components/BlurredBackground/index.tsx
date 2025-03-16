interface BlurredBackgroundProps {
  width: string;
  height: string;
  background: string;
  top?: string;
  left?: string;
  bottom?: string;
  right?: string;
}

export default function BlurredBackground({
  width,
  height,
  background,
  top,
  left,
  bottom,
  right,
}: BlurredBackgroundProps) {
  return (
    <div
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
