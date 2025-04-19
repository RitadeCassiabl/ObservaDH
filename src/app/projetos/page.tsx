import { MdOutlineFilterAlt } from "react-icons/md";

import { apresentacao, legendas, projetosMock } from "../../mocks/mock-projetos";

import {
  contarPautasPorAno,
  contarProjetosPorAno,
  obterAnosUnicos,
  obterEsferasUnicas,
  obterEstadosUnicos,
  obterPautasUnicas,
} from "@/lib/utils/projeto-projeto-utils";

import { CarrosselPlsProps } from "@/types/interfaces/carrossel-interface";
import { ProjetoLei } from "@/types/projeto-lei";
import { elemento } from "@/types/elemento-dropdown";

import { Button } from "@/components/ui-shacnui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui-shacnui/carousel";

import Card from "@/components/ui/cards";
import DropdownButton from "@/components/ui/dropdown/dropdown-button";
import GraficoBarraEmpilhadaHorizontal from "@/components/ui/graficos/barra-empilhada-hoizontal";
import GraficoLinhaPontos from "@/components/ui/graficos/linha-pontos";
import GraficoMapa from "@/components/ui/graficos/grafico-mapa";
import MainLayout from "@/components/ui/layouts/main-layout";
import Texto from "@/components/ui/componente-texto";


const page: React.FC = () => {
  const esferas = obterEsferasUnicas(projetosMock);
  const anos = obterAnosUnicos(projetosMock);
  const estados = obterEstadosUnicos(projetosMock);
  const pautas = obterPautasUnicas(projetosMock);

  const dropdown_items = [
    {
      titulo: "Esfera",
      elementos: esferas,
    },
    {
      titulo: "Ano",
      elementos: anos,
    },
    {
      titulo: "Estado",
      elementos: estados,
    },
    {
      titulo: "Pauta",
      elementos: pautas,
    },
  ];

  return (
    <MainLayout>
      <div className="flex h-full w-full flex-col gap-24 items-center px-11">
        <Apresentacao apresentacao={apresentacao} />
        <GraficoMapa />
        <Divisor />
        <PropostasDados items={dropdown_items} projetos={projetosMock} />
      </div>
    </MainLayout>
  );
};

interface apresentacaoProps {
  apresentacao: {
    subtitulo: string;
    titulo: string;
    cor_texto: string;
    texto: string;
  };
}

const Apresentacao = ({ apresentacao }: apresentacaoProps) => {
  return (
    <section>
      <Card.Apresentacao
        subtitulo={apresentacao.subtitulo}
        titulo={apresentacao.titulo}
        cor={apresentacao.cor_texto}
      >
        {apresentacao.texto}
      </Card.Apresentacao>
    </section>
  );
};

interface FiltroElementosProps {
  items: {
    elementos: elemento[];
    titulo: string;
  }[];
}

const Filtro = ({ items }: FiltroElementosProps) => {
  return (
    <section className="w-full flex items-center justify-start gap-24">
      <section className="flex gap-12 px-10">
        {items.map((item, index) => (
          <DropdownButton
            key={index}
            elementos={item.elementos}
            titulo={item.titulo}
            className="w-32 text-center"
          />
        ))}
      </section>
      <Button className="flex flex-row justify-center border-[#D974FD] text-[#D974FD] bg-transparent border-[1px] rounded-[3px] w-32 h-12 hover:bg-inherit active:text-white active:bg-[#D974FD] transition-colors duration-75">
        Filtrar <MdOutlineFilterAlt />
      </Button>
    </section>
  );
};



const CarrosselPls = ({ projetos }: CarrosselPlsProps) => {
  return (
    <section>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-[82rem]"
      >
        <CarouselContent className="">
          {projetos.map((item, index) => (
            <CarouselItem key={index} className="basis-1/2 flex justify-center">
              <Card.Projeto projeto={item} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

const Divisor = () => {
  return (
    <span className="border-b-[1.5px] shadow-bottom shadow-[#AFC4F9] w-full" />
  );
};

const SubTitulo = () => {
  return (
    <Texto.Raiz className="text-7xl text-shadow-xl">
      <Texto.Pequeno.Titillium>Propostas</Texto.Pequeno.Titillium>
      <Texto.Espaco />
      <Texto.Forte.Oswald>e Dados Estatísticos</Texto.Forte.Oswald>
    </Texto.Raiz>
  );
};

const NumeroPls = () => {
  return (
    <section className="w-full flex justify-center gap-[4.5rem]">
      <Card.Legenda
        cor_texto={legendas.find((item) => item.titulo === "PL's")?.cor}
        texto={legendas.find((item) => item.titulo === "PL's")?.texto}
        resumo={legendas.find((item) => item.titulo === "PL's")?.resumo}
      >
        <Texto.Raiz className="text-6xl">
          <Texto.Linha>
            <Texto.Forte.Oswald>{"Número"}</Texto.Forte.Oswald>
            <Texto.Espaco />
            <Texto.Pequeno.Titillium>{"de"}</Texto.Pequeno.Titillium>
          </Texto.Linha>
          <Texto.Linha className="text-[#93F996]">
            <Texto.Pequeno.Titillium>{"PL's"}</Texto.Pequeno.Titillium>
            <Texto.Espaco />
            <Texto.Forte.Oswald>{"por ano"}</Texto.Forte.Oswald>
          </Texto.Linha>
        </Texto.Raiz>
      </Card.Legenda>
      <GraficoLinhaPontos dados={contarProjetosPorAno(projetosMock)} />
    </section>
  );
};

const NumeroPautas = () => {
  return (
    <section className="w-full flex justify-center gap-[4.5rem]">
      <GraficoBarraEmpilhadaHorizontal
        dados={contarPautasPorAno(projetosMock)}
      />
      <Card.Legenda
        cor_texto={legendas.find((item) => item.titulo === "Pautas")?.cor}
        texto={legendas.find((item) => item.titulo === "Pautas")?.texto}
        resumo={legendas.find((item) => item.titulo === "Pautas")?.resumo}
      >
        <div>
          <Texto.Raiz className="text-6xl w-[374px]">
            <Texto.Linha className="w-full">
              <Texto.Forte.Oswald>{"Número"}</Texto.Forte.Oswald>
              <Texto.Espaco />
              <Texto.Pequeno.Titillium>{"de"}</Texto.Pequeno.Titillium>
            </Texto.Linha>
            <Texto.Linha className="text-[#F693F9]">
              <Texto.Pequeno.Titillium>{"Pautas"}</Texto.Pequeno.Titillium>
              <Texto.Espaco />
              <Texto.Forte.Oswald>{"por ano"}</Texto.Forte.Oswald>
            </Texto.Linha>
          </Texto.Raiz>
        </div>
      </Card.Legenda>
    </section>
  );
};

interface PropostasDadosProps {
  items: {
    elementos: elemento[];
    titulo: string;
  }[];
  projetos: ProjetoLei[];
}

const PropostasDados = ({ items, projetos }: PropostasDadosProps) => {
  return (
    <>
      <SubTitulo />
      <Filtro items={items} />
      <CarrosselPls projetos={projetos} />
      <NumeroPls />
      <NumeroPautas />
    </>
  );
};
export default page;
