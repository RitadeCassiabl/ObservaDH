import React from "react";
import { oswald, titillium_web } from "../fonts";

interface textos {
  children?: React.ReactNode;
  className?: string;
  shadow?: boolean;
}

const TextContent: React.FC<textos> = ({ children, className, shadow }) => {
  return (
    <h2 className={`text-white ${shadow && "text-shadow-xl "} ${className} `}>
      {children}
    </h2>
  );
};

const LineText: React.FC<textos> = ({ children, className }) => {
  return <p className={`${className}`}>{children}</p>;
};

const TextStrongOswald: React.FC<textos> = ({ children, className }) => {
  return (
    <span className={`font-normal ${oswald.className} ${className}`}>
      {children}
    </span>
  );
};

const TextStrongTitillium: React.FC<textos> = ({ children, className }) => {
  return (
    <span className={`font-normal ${titillium_web.className} ${className}`}>
      {children}
    </span>
  );
};

const TextSmallOswald: React.FC<textos> = ({ children, className }) => {
  return (
    <span className={`font-light ${oswald.className} ${className}`}>
      {children}
    </span>
  );
};

const TextSmallTitillium: React.FC<textos> = ({ children, className }) => {
  return (
    <span className={`font-light ${titillium_web.className} ${className}`}>
      {children}
    </span>
  );
};

const TextSpace: React.FC<textos> = ({ className }) => {
  return <span className={`${className}`}> </span>;
};

export {
  TextContent,
  LineText,
  TextSmallOswald,
  TextSmallTitillium,
  TextStrongOswald,
  TextStrongTitillium,
  TextSpace,
};
