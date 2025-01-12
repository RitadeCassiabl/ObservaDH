// import Image from 'next/image';
// import julio from "@/assets/fotos/julio.jpeg";

import CardBio from "@/ui/cards/CardBio";
// imp

const mockDevs = [
  {
    nome: "Júlio César",
    foto: "https://github.com/follijulio.png",
    funcao: "Dev Frontend",
    links: [
      {
        site: "lattes",
        imagem: "https://i.imgur.com/2iVxee6.png",
        link: "http://lattes.cnpq.br/5914564529954569"
      },
      {
        site: "github",
        imagem: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
        link: "https://github.com/follijulio"
      }
    ],
    bio:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin accumsan nulla justo, sed molestie nisi scelerisque vulputate. Integer nibh risus, pretium et neque sed, efficitur vehicula tortor. Integer ut ullamcorper ex. Aenean porta, nisi sed gravida pellentesque, mi turpis porta leo, in euismod massa mauris eget augue. Aenean urna tortor, scelerisque vitae vulputate a, lobortis et metus.    "
  }
];

const desenvolvedores: React.FC = () => {
  return (
    <div className="flex flex-col h-full w-full gap-24 px-11 py-16   ">
      <section>
        {mockDevs.map(item => {
          return <CardBio key={item.nome} desenvolvedor={item} />;
        })}
      </section>
      <section className="h-[150rem]" />
    </div>
  );
};
export default desenvolvedores;
