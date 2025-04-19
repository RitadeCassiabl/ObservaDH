import { mockSobre } from "@/mocks/mock-sobre";

import MainLayout from "@/components/ui/layouts/main-layout";


const page: React.FC = () => {
  
  //render
  return (
    <MainLayout>
      <div className="flex h-full w-full flex-col gap-[4.25rem] items-center px-36 text-white text-3xl text-justify">
        {mockSobre.map((item, index) => {
          return (
            <Sobre
              key={index}
              isReverse={index % 2 == 0 ? true : false}
              texto_longo={item.texto_longo}
              texto={item.texto}
              url_imagem={item.url_imagem}
            />
          );
        })}
      </div>
    </MainLayout>
  );
};

interface sobreProps {
  texto_longo: string;
  texto: string;
  url_imagem: string;
  isReverse?: boolean;
}

const Sobre: React.FC<sobreProps> = ({
  texto,
  texto_longo,
  url_imagem,
  isReverse,
}) => {
  return (
    <div className="flex flex-col gap-[4.5rem]">
      <article>
        <p>{texto_longo}</p>
      </article>
      <article
        className={`flex h-auto gap-10 ${isReverse ? "flex-row-reverse" : ""}`}
      >
        <section className="">
          <img
            src={url_imagem}
            alt="imagem de apresentação"
            className="object-cover min-w-[32.5rem] min-h-[30rem] w-[32.5rem] h-[30rem] rounded-[10px] border-2 border-[#87D9FF]"
          />
        </section>
        <section className="">
          <p className="">{texto}</p>
        </section>
      </article>
    </div>
  );
};

export default page;
