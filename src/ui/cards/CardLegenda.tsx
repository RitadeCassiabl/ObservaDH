/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { Titillium_Web } from "next/font/google";
import CardSaibaMais from "./CardSaibaMais";


const titillium_web = Titillium_Web({
  weight: ["400", "700"],
  subsets: ["latin"]
});

interface legendaProps {
  cor_texto?: string;
  children?: React.ReactNode;
  resumo?: string;
  texto?: string;
}

const legenda: React.FC<legendaProps> = ({
  cor_texto,
  texto,
  children,
  resumo
}) => {
  return (
    <div className="w-[21.5rem] flex flex-col gap-6">
      {children}
      <p className={`${titillium_web} text-white text-xl`}>
        {resumo ? resumo : ""}
      </p>
      <CardSaibaMais cor_texto={cor_texto} texto={texto ? texto : ""} />
    </div>
  );
};

export default legenda;
