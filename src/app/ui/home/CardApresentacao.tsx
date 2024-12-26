import { Oswald, Titillium_Web } from "next/font/google";
import React from "react";

const oswald = Oswald({ weight: ["400", "700"], subsets: ["latin"] });

const titillium_web = Titillium_Web({
  weight: ["400", "700"],
  subsets: ["latin"]
});

interface CardApresentacaoProps {
  children?: React.ReactNode;
}

const cardApresetacao: React.FC<CardApresentacaoProps> = ({
children
}) => {
  return (
    <section className="w-11/12 h-[43.4375rem] bg-gradient-to-b from-[#050B17] to-[#1A326E]  border-[1px] border-[#87D9FF] p-16 rounded-[5px] shadow-lg shadow-[#87D9FF]">
      <article className="w-full h-full flex flex-col gap-4">
        <h2
          className={`${oswald.className} text-[5rem] text-white text-shadow-xl font-normal`}
        >
          O que é o{" "}
          <span
            className={`text-[#87D9FF] ${titillium_web.className} font-light`}
          >
            ObservaDH?
          </span>
        </h2>
        <section className="h-[28rem] w-full overflow-y-auto shadow-inner no-scrollbar">
          <div className="text-white text-2xl font-light text-justify ">
           {children}
           </div>
        </section>
      </article>
    </section>
  );
};
export default cardApresetacao;
