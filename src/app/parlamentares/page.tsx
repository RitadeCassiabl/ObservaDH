import GraficoBarraMultiplas from "@/ui/graficos/GraficoBarrasMultiplas";
import { projetosMock } from "@/lib/mock/mock_projetos";
import {
  contarGeneroPorIdeologia,
  contarReligiaoPorEtnia
} from "@/lib/utils/projetoLeiUtils";

import GraficoBarraEmpilhadaVertical from "@/ui/graficos/GraficoBarraEmpilhadaVertical";
import { Oswald } from "next/font/google";
import CardLegenda from "@/ui/cards/CardLegenda";
import {
  TextContent,
  LineText,
  TextStrongOswald,
  TextSmallTitillium
} from "@/ui/components/ComponentesTexto";
import { legendas } from "@/lib/mock/mock_parlamentares";

const oswald = Oswald({ weight: ["400", "700"], subsets: ["latin"] });

// ô_ô

const parlamentares: React.FC = () => {
  return (
    <div className="flex h-full w-full flex-col gap-[4.5rem] items-center">
      <article className="border-white border w-full h-[40rem] text-shadow-xl text-7xl text-white text-center">
        RANKING
      </article>
      <article className="border-white border w-full h-[40rem] text-shadow-xl text-7xl text-white text-center">
        RANKING
      </article>
      <article className="flex flex-col justify-center gap-20 ">
        <h2
          className={`${oswald.className} text-shadow-xl text-7xl text-white text-center`}
        >
          {" "}Dados Estatísticos{" "}
        </h2>
        <section className="flex gap-20">
          <GraficoBarraMultiplas
            dados={contarGeneroPorIdeologia(projetosMock)}
          />
          <CardLegenda
            texto={legendas[0].texto}
            cor_texto={legendas[0].cor_texto}
            resumo={legendas[0].resumo}
          >
            <TextContent className="text-5xl w-full">
              <LineText>
                <TextStrongOswald>
                  {"Ideologia Política"}
                </TextStrongOswald>
              </LineText>
              <LineText>
                <TextSmallTitillium className="text-[#D974FD]">
                  {"x Gênero"}
                </TextSmallTitillium>
              </LineText>
            </TextContent>
          </CardLegenda>
        </section>
        <section className="flex gap-20">
          <CardLegenda
            texto={legendas[1].texto}
            cor_texto={legendas[1].cor_texto}
            resumo={legendas[1].resumo}
          >
            <TextContent className="text-5xl w-full">
              <LineText>
                <TextStrongOswald>
                  {"Religião"}
                </TextStrongOswald>
              </LineText>
              <LineText>
                <TextSmallTitillium className="text-[#FF977A]">
                  {"x Raça"}
                </TextSmallTitillium>
              </LineText>
            </TextContent>
          </CardLegenda>
          <GraficoBarraEmpilhadaVertical
            dados={contarReligiaoPorEtnia(projetosMock)}
          />
        </section>
      </article>
    </div>
  );
};
export default parlamentares;
