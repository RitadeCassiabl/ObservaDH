import { oswald, titillium_web } from "../fonts";

interface TextProps {
  children?: React.ReactNode;
  className?: string;
  shadow?: boolean;
}

const TextoPequeno = {
  Oswald: ({ children, className }: TextProps) => (
    <span className={`font-light ${oswald.className} ${className}`}>
      {children}
    </span>
  ),
  Titillium: ({ children, className }: TextProps) => (
    <span className={`font-light ${titillium_web.className} ${className}`}>
      {children}
    </span>
  ),
};

export default TextoPequeno;