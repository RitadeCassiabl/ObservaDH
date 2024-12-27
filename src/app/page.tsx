import CardApresentacao from "../ui/cards/CardApresentacao";
import CardEsfera from "../ui/home/CardEsfera";
import CardInformativo from "../ui/home/CardInformativo";
import { cards_esfera, cards_informativos, text } from "../lib/mock/mock_home";



const page: React.FC = () => {
  return (
    <div className="flex h-full w-full flex-col gap-[4.25rem] py-[4.375rem] items-center">
      {/* CARD DE APRESENTAÇÃO DO PROJETO */}
      <article
        className="w-full h-auto flex justify-center"
        id=" CARD DE APRESENTAÇÃO DO PROJETO "
      >
        <CardApresentacao titulo={""} subtitulo={""} cor={""}>
          <p>
            {text}
          </p>
        </CardApresentacao>
      </article>
      {/* CARDS DE REDIRECIONAMENTO - PLS*/}
      <article
        className="w-9/12 h-auto flex flex-col gap-16"
        id=" CARDS DE REDIRECIONAMENTO - PLS "
      >
        {cards_esfera.map((card, index) =>
          <div
            key={index}
            //! AQUI ESTÁ A DIFERENÇA ENTRE OS CARDS DE REDIRECIONAMENTO - PLS
            className={`w-full flex ${index % 2 === 0
              ? "justify-start"
              : "justify-end"}`}
          >
            <CardEsfera
              cor={card.cor}
              rota={card.rota}
              texto={card.texto}
              titulo={card.titulo}
              subtitulo={card.subtitulo}
            />
          </div>
        )}
      </article>
      {/* CARDS DE REDIRECIONAMENTO - OUTROS */}
      <article
        className="w-full flex justify-evenly px-[5rem] gap-24"
        id=" CARDS DE REDIRECIONAMENTO - OUTROS "
      >
        {cards_informativos.map(item =>
          <CardInformativo
            key={item.title}
            rota={item.rota}
            subtitle={item.subtitle}
            texto={item.text}
            title={item.title}
            cor={item.cor}
            isSubtitleHTML={item.isSubtitleHTML}
          />
        )}
      </article>
    </div>
  );
};

export default page;
