import Image from "next/image";
import React from "react";

interface LogoProps {
  width?: number;
  height?: number;
  alt?: string;
}

const Logo: React.FC<LogoProps> = ({
  height,
  width,
  alt = "Retreats by Traveon Logo",
}) => {
  return (
    <Image
      src="/logo/logo-sq.png"
      width={width}
      height={height}
      alt={alt}
      style={{ display: "block" }}
    />
  );
};

export default Logo;
