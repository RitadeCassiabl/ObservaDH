import { titillium_web } from "../fonts";
import CardSaibaMais from "./CardSaibaMais";

interface legendaProps {
  cor_texto?: string;
  children?: React.ReactNode;
  resumo?: string;
  texto?: string;
}

const CardLegenda: React.FC<legendaProps> = ({
  cor_texto,
  texto,
  children,
  resumo,
}) => {
  return (
    <div className="w-[21.5rem] flex flex-col gap-6">
      {children}
      <p className={`${titillium_web} text-white text-xl text-justify `}>
        {resumo ? resumo : ""}
      </p>
      <CardSaibaMais cor_texto={cor_texto} texto={texto ? texto : ""} />
    </div>
  );
};

export default CardLegenda;
