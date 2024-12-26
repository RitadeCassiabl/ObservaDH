import { Oswald, Titillium_Web } from "next/font/google";
import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

const oswald = Oswald({ weight: ["400", "700"], subsets: ["latin"] });

const titillium_web = Titillium_Web({
  weight: ["400", "700"],
  subsets: ["latin"]
});

interface CardInformativoProps {
  title: string;
  subtitle: string;
  isSubtitleHTML?: boolean;
  texto: string;
  rota: string;
  cor: string;
}

const CardInformativo: React.FC<CardInformativoProps> = ({
  rota,
  subtitle,
  isSubtitleHTML = false,
  texto,
  title,
  cor
}) => {
  return (
    <div className="flex flex-col justify-between w-[22.5rem] h-[35rem] bg-gradient-to-b from-[#050B17] to-[#122144] border-[3px] p-12 gap-20 border-[#2C52A4] rounded-[5px] shadow-lg shadow-[#87D9FF]">
      <h1
        className={`${cor} ${oswald.className} text-[2.5rem] text-shadow-lg font-normal`}
      >
        {title}{" "}
        <span className={`${titillium_web.className} text-[2.5rem] font-light`}>
          {isSubtitleHTML
            ? <span dangerouslySetInnerHTML={{ __html: subtitle }} />
            : subtitle}
        </span>
      </h1>
      <section className="text-xl h-64 text-white font-normal">
        {texto}
      </section>
      <div className="w-full flex justify-end">
        <Link href={rota}>
          <BsArrowRight size={32} color="white" />
        </Link>
      </div>
    </div>
  );
};

export default CardInformativo;
