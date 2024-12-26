import CardApresentacao from "./ui/home/CardApresentacao";
import CardEsfera from "./ui/home/CardEsfera";
import CardInformativo from "./ui/home/CardInformativo";

const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat
            nisi nec orci maximus, eu tempus metus viverra. Pellentesque non
            ante turpis. Mauris venenatis vel purus non gravida. Vestibulum a
            ante semper, efficitur justo sit amet, iaculis enim. Pellentesque
            facilisis ultricies sem. Donec mollis gravida lectus, et aliquet
            felis lobortis vel. Donec accumsan augue vestibulum bibendum
            feugiat. Donec ac auctor ex. Cras tortor ex, pellentesque vel
            condimentum eu, posuere in nulla. Sed metus risus, finibus at erat
            a, porta ullamcorper dolor. Donec cursus vestibulum mattis.
            Vestibulum sodales quam eget sem ullamcorper ultricies consequat in
            nisl. Donec nisl quam, aliquet quis ultricies eget, euismod sit amet
            turpis. Phasellus nulla turpis, consequat consectetur dapibus sit
            amet, viverra ut neque. Cras nec porta dui. Pellentesque ut magna
            ex. Nam felis turpis, imperdiet ac accumsan a, maximus at nibh. In
            non augue maximus, venenatis velit id, varius leo. Suspendisse et
            quam quis ipsum rutrum ullamcorper non eu dui. Nulla condimentum
            nisl ligula, sed rhoncus urna sagittis non. Pellentesque pulvinar
            mattis odio, id egestas nunc rhoncus posuere. Cras malesuada nisl
            dolor. Nullam pulvinar nibh elit, ut dapibus nibh sodales sed. Nam
            ligula nisi, convallis vitae fringilla consectetur, pulvinar ac
            nisi. Maecenas faucibus leo et libero ullamcorper, auctor
            sollicitudin est condimentum. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed feugiat nisi nec orci maximus, eu
            tempus metus viverra. Pellentesque non ante turpis. Mauris venenatis
            vel purus non gravida. Vestibulum a ante semper, efficitur justo sit
            amet, iaculis enim. Pellentesque facilisis ultricies sem. Donec
            mollis gravida lectus, et aliquet felis lobortis vel. Donec accumsan
            augue vestibulum bibendum feugiat. Donec ac auctor ex. Cras tortor
            ex, pellentesque vel condimentum eu, posuere in nulla. Sed metus
            risus, finibus at erat a, porta ullamcorper dolor. Donec cursus
            vestibulum mattis. Vestibulum sodales quam eget sem ullamcorper
            ultricies consequat in nisl. Donec nisl quam, aliquet quis ultricies
            eget, euismod sit amet turpis. Phasellus nulla turpis, consequat
            consectetur dapibus sit amet, viverra ut neque. Cras nec porta dui.
            Pellentesque ut magna ex. Nam felis turpis, imperdiet ac accumsan a,
            maximus at nibh. In non augue maximus, venenatis velit id, varius
            leo. Suspendisse et quam quis ipsum rutrum ullamcorper non eu dui.
            Nulla condimentum nisl ligula, sed rhoncus urna sagittis non.
            Pellentesque pulvinar mattis odio, id egestas nunc rhoncus posuere.
            Cras malesuada nisl dolor. Nullam pulvinar nibh elit, ut dapibus
            nibh sodales sed. Nam ligula nisi, convallis vitae fringilla
            consectetur, pulvinar ac nisi. Maecenas faucibus leo et libero
            ullamcorper, auctor sollicitudin est condimentum.`;

const cards = [
  {
    subtitulo: "Visão",
    titulo: "Geral",
    texto:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eveniet inventore quo error est natus facilis. Quod odit voluptates libero dignissimos veniam accusamus omnis, autem architecto. Consequatur in error maxime.",
    rota: "/projetos",
    cor: "text-[#93F996]"
  },
  {
    subtitulo: "Esfera",
    titulo: "Federal",
    texto:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eveniet inventore quo error est natus facilis. Quod odit voluptates libero dignissimos veniam accusamus omnis, autem architecto. Consequatur in error maxime.",
    rota: "/projetos",
    cor: "text-[#FDFF78]"
  },
  {
    subtitulo: "Esfera",
    titulo: "Estadual",
    texto:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eveniet inventore quo error est natus facilis. Quod odit voluptates libero dignissimos veniam accusamus omnis, autem architecto. Consequatur in error maxime.",
    rota: "/projetos",
    cor: "text-[#F693F9]"
  }
];

const texts = [
  {
    title: "Conheça",
    subtitle: "os Parlamentares",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat nisi nec orci maximus, eu tempus metus vivrra. Pellentesque non ante turpis. Mauris venenatis",
    rota: "/parlamentares",
    cor: "text-[#F693F9]"
  },
  {
    title: "Entenda",
    subtitle: "sobre os direitos",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat nisi nec orci maximus, eu tempus metus vivrra. Pellentesque non ante turpis. Mauris venenatis",
    rota: "/direitos",
    cor: "text-[#87D9FF]"
  },
  {
    title: "Conheça",
    subtitle: "o projeto",
    text: 
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat nisi nec orci maximus, eu tempus metus vivrra. Pellentesque non ante turpis. Mauris venenatis",
    rota: "/projetos",
    cor: "text-[#93F996]"
  }
];

const page: React.FC = () => {
  return (
    <div className="flex h-full w-full flex-col gap-[4.25rem] py-[4.375rem] items-center">
      {/* CARD DE APRESENTAÇÃO DO PROJETO */}
      <article
        className="w-full h-auto flex justify-center"
        id=" CARD DE APRESENTAÇÃO DO PROJETO "
      >
        <CardApresentacao>
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
        {cards.map((card, index) =>
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
        {texts.map(item =>
          <CardInformativo
            key={item.title}
            rota={item.rota}
            subtitle={item.subtitle}
            text={item.text}
            title={item.title}
            cor={item.cor}
          />
        )}
      </article>
    </div>
  );
};

export default page;
