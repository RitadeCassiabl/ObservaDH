interface TextProps {
  children?: React.ReactNode;
  className?: string;
  shadow?: boolean;
}
const TextoEspaco: React.FC<TextProps> = ({ className }) => (
  <span className={`${className}`}> </span>
);

export default TextoEspaco;
