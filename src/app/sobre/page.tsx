const mockSobre = [
  {
    texto_longo:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin accumsan nulla justo, sed molestie nisi scelerisque vulputate. Integer nibh risus, pretium et neque sed, efficitur vehicula tortor. Integer ut ullamcorper ex. Aenean porta, nisi sed gravida pellentesque, mi turpis porta leo, in euismod massa mauris eget augue. Aenean urna tortor, scelerisque vitae vulputate a, lobortis et metus. Vivamus ut turpis lobortis, vulputate mauris id, sodales enim. Fusce bibendum sapien leo, at vestibulum erat ornare eget. Maecenas accumsan, lectus fermentum dapibus mattis, velit leo euismod leo, non molestie odio enim ac nulla. Nam et ultricies erat.",
    texto:
      "Fusce semper eu odio a laoreet. Phasellus viverra porta erat eget tempus. Donec sit amet risus at sapien tempor efficitur vel ac est. Vestibulum aliquet arcu hendrerit, rhoncus justo ac, euismod arcu. Aliquam volutpat venenatis elit eget commodo. Maecenas vitae sem at nisl faucibus imperdiet eget non nulla. Nulla facilisi. Etiam dignissim, odio at lacinia scelerisque, tellus felis facilisis dolor, eget condimentum libero nunc eu nunc. Duis ut lectus in sem consequat fermentum pretium.",
    url_imagem:
      "https://i.pinimg.com/originals/4f/16/08/4f1608fde265e925c59001d7c3c97ff1.jpg"
  },
  {
    texto_longo:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin accumsan nulla justo, sed molestie nisi scelerisque vulputate. Integer nibh risus, pretium et neque sed, efficitur vehicula tortor. Integer ut ullamcorper ex. Aenean porta, nisi sed gravida pellentesque, mi turpis porta leo, in euismod massa mauris eget augue. Aenean urna tortor, scelerisque vitae vulputate a, lobortis et metus. Vivamus ut turpis lobortis, vulputate mauris id, sodales enim. Fusce bibendum sapien leo, at vestibulum erat ornare eget. Maecenas accumsan, lectus fermentum dapibus mattis, velit leo euismod leo, non molestie odio enim ac nulla. Nam et ultricies erat.",
    texto:
      "Fusce semper eu odio a laoreet. Phasellus viverra porta erat eget tempus. Donec sit amet risus at sapien tempor efficitur vel ac est. Vestibulum aliquet arcu hendrerit, rhoncus justo ac, euismod arcu. Aliquam volutpat venenatis elit eget commodo. Maecenas vitae sem at nisl faucibus imperdiet eget non nulla. Nulla facilisi. Etiam dignissim, odio at lacinia scelerisque, tellus felis facilisis dolor, eget condimentum libero nunc eu nunc. Duis ut lectus in sem consequat fermentum pretium.",
    url_imagem:
      "https://i.pinimg.com/originals/4f/16/08/4f1608fde265e925c59001d7c3c97ff1.jpg"
  }
];

interface sobreProps {
  texto_longo: string;
  texto: string;
  url_imagem: string;
}

const SobreImagemDireita: React.FC<sobreProps> = ({
  texto,
  texto_longo,
  url_imagem
}) => {
  return (
    <div className="flex flex-col gap-[4.5rem]">
      <article>
        <p>
          {texto_longo}
        </p>
      </article>
      <article className="flex flex-row h-auto gap-10">
        <section className="">
          <p className="">
            {texto}
          </p>
        </section>
        <section className="">
          <img
            src={url_imagem}
            alt="imagem de apresentação"
            className="object-cover min-w-[32.5rem] min-h-[30rem] w-[32.5rem] h-[30rem] rounded-[10px] border-2 border-[#87D9FF]"
          />
        </section>
      </article>
    </div>
  );
};

const SobreImagemEsquerda: React.FC<sobreProps> = ({
  texto,
  texto_longo,
  url_imagem
}) => {
  return (
    <div className="flex flex-col gap-[4.5rem]">
      <article>
        <p>
          {texto_longo}
        </p>
      </article>
      <article className="flex flex-row h-auto gap-10">
        <section className="">
          <img
            src={url_imagem}
            alt="imagem de apresentação"
            className="object-cover min-w-[32.5rem] min-h-[30rem] w-[32.5rem] h-[30rem] rounded-[10px] border-2 border-[#87D9FF]"
          />
        </section>
        <section className="">
          <p className="">
            {texto}
          </p>
        </section>
      </article>
    </div>
  );
};

const page: React.FC = () => {
  return (
    <div className="flex h-full w-full flex-col gap-[4.25rem] items-center px-36 py-16 text-white text-3xl text-justify">
      <SobreImagemDireita texto_longo={mockSobre[0].texto_longo} texto={mockSobre[0].texto} url_imagem={mockSobre[0].url_imagem} />
      <SobreImagemEsquerda texto_longo={mockSobre[1].texto_longo} texto={mockSobre[1].texto} url_imagem={mockSobre[1].url_imagem} />
    </div>
  );
};

export default page;
