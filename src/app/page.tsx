import CardApresentacao from "../ui/cards/CardApresentacao";
import CardEsfera from "../ui/cards/CardEsfera";
import CardInformativo from "../ui/cards/CardInformativo";
import {
  cards_esfera,
  cards_informativos,
  apresentacao,
} from "../lib/mock/mock_home";
import { MainLayout } from "../ui/layouts/MainLayout";

const page: React.FC = () => {
  return (
    <MainLayout>
      <div className="flex h-full w-full flex-col gap-[4.25rem] items-center">
        {/* CARD DE APRESENTAÇÃO DO PROJETO */}
        <article className="w-full h-auto flex justify-center">
          <CardApresentacao
            titulo={apresentacao.titulo}
            subtitulo={apresentacao.subtitulo}
            cor={apresentacao.cor}
          >
            <p>{apresentacao.texto}</p>
          </CardApresentacao>
        </article>
        {/* CARDS DE REDIRECIONAMENTO - PLS*/}
        <article
          className="w-9/12 h-auto flex flex-col gap-16"
          id=" CARDS DE REDIRECIONAMENTO - PLS "
        >
          {/**/}
          {cards_esfera.map((card, index) => (
            <div
              key={index}
              //! AQUI ESTÁ A DIFERENÇA ENTRE OS CARDS DE REDIRECIONAMENTO - PLS
              //! AQUI SERÁ FEITO O EFEITO DE SLIDE
              className={`w-full flex ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              <CardEsfera
                cor={card.cor}
                rota={card.rota}
                texto={card.texto}
                titulo={card.titulo}
                subtitulo={card.subtitulo}
              />
            </div>
          ))}
        </article>
        {/* CARDS DE REDIRECIONAMENTO - OUTROS */}
        <article className="w-full flex justify-evenly px-[5rem] gap-24">
          {cards_informativos.map((item) => (
            <CardInformativo
              key={item.titulo}
              rota={item.rota}
              subtitulo={item.subtitulo}
              texto={item.texto}
              titulo={item.titulo}
              cor_texto={item.cor}
              isSubtitleHTML={item.isSubtitleHTML}
            />
          ))}
        </article>
      </div>
    </MainLayout>
  );
};

export default page;
