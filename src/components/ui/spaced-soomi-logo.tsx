import React from "react";

type LogoType = "main" | "secondary";

interface SpacedSoomiLogoProps {
  height: number; // original height in px
  type: LogoType;
  src: string;
}

// A component that renders the Soomi logo with appropriate spacing around it
// based on whether it's the main or secondary logo, according to corporate design guidelines.
const SpacedSoomiLogo: React.FC<SpacedSoomiLogoProps> = ({ height, type, src }) => {
  // Corporate logo spacing factors
  const marginYFactor = type === "main"
    ? 0.2
    : 0.3;

  const newHeight = height / (1 + 2 * marginYFactor);
  const margin = marginYFactor * height;

  return (
    <img
      src={src}
      alt={`Soomi ${type === "main" ? "Main" : "Secondary"} Logo`}
      style={{
        height: `${newHeight}px`,
        margin: `${margin}px`,
        width: "auto"
      }}
    />
  );
};

export default SpacedSoomiLogo;
