interface TextProps {
	children?: React.ReactNode;
	className?: string;
	shadow?: boolean;
}

const TextoLinha: React.FC<TextProps> = ({ children, className }) => (
	<p className={`${className}`}>{children}</p>
);

export default TextoLinha;
