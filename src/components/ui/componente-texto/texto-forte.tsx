import { oswald, titillium_web } from "../../../lib/fonts/fonts";

interface TextProps {
  children?: React.ReactNode;
  className?: string;
  shadow?: boolean;
}

const TextoForte = {
  Oswald: ({ children, className }: TextProps) => (
    <span className={`font-normal ${oswald.className} ${className}`}>
      {children}
    </span>
  ),
  Titillium: ({ children, className }: TextProps) => (
    <span className={`font-normal ${titillium_web.className} ${className}`}>
      {children}
    </span>
  ),
};

export default TextoForte;
