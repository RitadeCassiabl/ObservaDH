interface TextProps {
	children?: React.ReactNode;
	className?: string;
	shadow?: boolean;
}

const TextoRaiz: React.FC<TextProps> = ({ children, className, shadow }) => (
	<h2 className={`text-white ${shadow ? "text-shadow-xl" : ""} ${className}`}>
		{children}
	</h2>
);
export default TextoRaiz;
