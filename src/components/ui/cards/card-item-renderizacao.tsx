import { oswald } from "../../../lib/fonts/fonts";

interface itemRenderProps {
  titulo: string;
  valor: string;
  className?: string;
  cor_texto?: string;
  cor_segundo_texto?: string;
}

const CardItemRenderizacao: React.FC<itemRenderProps> = ({
  titulo,
  valor,
  className,
  cor_texto,
  cor_segundo_texto,
}) => {
  return (
    <p className={`text-2xl  ${className} ${oswald.className}`}>
      <span className={`mr-2  ${cor_texto ? cor_texto : "text-[#AFC4F9]"}`}>
        {titulo}
        {":"}
      </span>
      <span
        className={`truncate ${
          cor_segundo_texto ? cor_segundo_texto : "text-white"
        } `}
      >
        {valor}
      </span>
    </p>
  );
};

export default CardItemRenderizacao;
