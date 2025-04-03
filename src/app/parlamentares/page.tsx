import GraficoBarraMultiplas from "@/ui/graficos/GraficoBarrasMultiplas";
import { projetosMock, partidosMock } from "@/lib/mock/mock_projetos";
import {
  contarGeneroPorIdeologia,
  contarPropostasPorParlamentar,
  contarReligiaoPorEtnia,
  obterEsferasUnicas,
  obterEstadosUnicos,
  obterGeneroUnico,
  obterIdeologiasUnica,
  obterPartidosUnicos,
  obterProfissoesUnicas,
} from "@/lib/utils/projetoLeiUtils";

import GraficoBarraEmpilhadaVertical from "@/ui/graficos/GraficoBarraEmpilhadaVertical";
import { oswald } from "@/ui/fonts";
import CardLegenda from "@/ui/cards/CardLegenda";
import {
  TextContent,
  LineText,
  TextStrongOswald,
  TextSmallTitillium,
  TextSpace,
} from "@/ui/components/ComponentesTexto";
import { legendas } from "@/lib/mock/mock_parlamentares";
import DropdownButton from "@/ui/dropdown/DropdownButton";
import { Button } from "@/components/ui/button";
import { MdOutlineFilterAlt } from "react-icons/md";
import {
  CardComponenteParlamentar,
  CardComponentePartido,
} from "@/ui/cards/CardComponente";
import { MainLayout } from "@/ui/Layouts/MainLayout";

// ! Obtendo informações para os dropdowns
const esferas = obterEsferasUnicas(projetosMock);
const estados = obterEstadosUnicos(projetosMock);
const genero = obterGeneroUnico(projetosMock);
const partidos = obterPartidosUnicos(projetosMock);
const ideologias = obterIdeologiasUnica(projetosMock);
const profissoes = obterProfissoesUnicas(projetosMock);

// ô_ô

const parlamentares: React.FC = () => {
  const partidosOrdenados = [...partidosMock].sort(
    (a, b) => parseInt(b.propostas) - parseInt(a.propostas)
  );
  return (
    <MainLayout>
      <div className="flex h-full w-full flex-col gap-[4.5rem] items-center px-11 py-16">
        <article className="flex flex-col w-full  gap-20">
          <div className="w-full text-shadow-xl text-7xl text-white text-center">
            <TextContent>
              <TextSmallTitillium>Ranking</TextSmallTitillium>
              <TextSpace />
              <TextStrongOswald>dos Parlamentares</TextStrongOswald>
            </TextContent>
          </div>
          <section className="w-full flex items-center justify-start gap-24">
            <section className="flex gap-12 px-10">
              <DropdownButton
                elementos={esferas}
                titulo="Esfera"
                className="w-32"
              />
              <DropdownButton
                elementos={genero}
                titulo="Gênero"
                className="w-32"
              />
              <DropdownButton
                elementos={estados}
                titulo="Estado"
                className="w-32 text-center"
              />
              <DropdownButton
                elementos={partidos}
                titulo="Partidos"
                className="w-32"
              />
              <DropdownButton
                elementos={ideologias}
                titulo="Ideologia"
                className="w-32"
              />
              <DropdownButton
                elementos={profissoes}
                titulo="Profissão"
                className="w-32"
              />
            </section>
            <Button className="flex flex-row justify-center border-[#D974FD] text-[#D974FD] bg-transparent border-[1px] rounded-[3px] w-32 h-12 hover:bg-inherit active:text-white active:bg-[#D974FD] transition-colors duration-75">
              Filtrar <MdOutlineFilterAlt />
            </Button>
          </section>
          <div className="flex flex-col gap-10 justify-center">
            <div className="flex flex-row w-full px-16 h-[4.25rem] bg-[#122144] border border-b-0 border-[#87D9FF] rounded-t-[5px] font-semibold text-2xl text-[#87D9FF]">
              <section className="w-1/2 h-full px-16 grid grid-cols-2 gap-4 items-center">
                <p>{"Deputado(a)"}</p>
                <p>{"Nome"}</p>
              </section>
              <section className="w-1/2 h-full px-12 grid grid-cols-3 gap-4 items-center">
                <p>{"Partido"}</p>
                <p>{"Estado"}</p>
                <p>{"Propostas"}</p>
              </section>
            </div>
            <div
              className="h-[800px] w-full rounded-md flex flex-col items-center gap-10 overflow-auto "
              color="black"
            >
              {projetosMock.map((item) => {
                return item.parlamentares.map((parlamentar) => (
                  <CardComponenteParlamentar
                    key={`${item.numero_pl}-${parlamentar.nome}`}
                    parlamentar={parlamentar}
                    propostas={contarPropostasPorParlamentar(
                      projetosMock,
                      parlamentar.nome
                    )}
                  />
                ));
              })}
            </div>
          </div>
        </article>
        <article className="flex flex-col w-full  gap-20">
          <div className="w-full text-shadow-xl text-7xl text-white text-center">
            <TextContent>
              <TextSmallTitillium>Ranking</TextSmallTitillium>
              <TextSpace />
              <TextStrongOswald>dos Partidos</TextStrongOswald>
            </TextContent>
          </div>
          <div className="flex flex-col gap-10 justify-center">
            <div className="flex flex-row w-full px-16 h-[4.25rem] bg-[#122144] border border-b-0 border-[#87D9FF] rounded-t-[5px] font-semibold text-2xl text-[#87D9FF]">
              <section className="w-1/2 h-full px-16 grid grid-cols-2 gap-4 items-center">
                <p>{"Partido"}</p>
                <p>{"Nome"}</p>
              </section>
              <section className="w-1/2 h-full px-12 grid grid-cols-3 gap-4 items-center">
                <p className="text-center">{"Sigla"}</p>
                <p>{"Parlamentares"}</p>
                <p>{"Propostas"}</p>
              </section>
            </div>
            <div
              className="h-[800px] w-full rounded-md flex flex-col items-center gap-10 overflow-auto "
              color="black"
            >
              {partidosOrdenados.map((item) => {
                return (
                  <CardComponentePartido key={`${item.nome}`} partido={item} />
                );
              })}
            </div>
          </div>
        </article>
        <article className="flex flex-col justify-center gap-20 ">
          <h2
            className={`${oswald.className} text-shadow-xl text-7xl text-white text-center`}
          >
            {" "}
            Dados Estatísticos{" "}
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
                  <TextStrongOswald>{"Ideologia Política"}</TextStrongOswald>
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
                  <TextStrongOswald>{"Religião"}</TextStrongOswald>
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
    </MainLayout>
  );
};
export default parlamentares;
