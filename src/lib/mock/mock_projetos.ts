const apresentacao = {
  subtitulo: "Como funciona a",
  titulo: "criação de um PL",
  cor_texto: "text-[#FDFF78]",
  texto: ` 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat nisi nec orci maximus, eu tempus metus viverra. Pellentesque non ante turpis. Mauris venenatis vel purus non gravida. Vestibulum a ante semper, efficitur justo sit amet, iaculis enim. Pellentesque facilisis ultricies sem. Donec mollis gravida lectus, et aliquet felis lobortis vel. Donec accumsan augue vestibulum bibendum feugiat. Donec ac auctor ex. Cras tortor ex, pellentesque vel condimentum eu, posuere in nulla. Sed metus risus, finibus at erat a, porta ullamcorper dolor.
    Donec cursus vestibulum mattis. Vestibulum sodales quam eget sem ullamcorper ultricies consequat in nisl. Donec nisl quam, aliquet quis ultricies eget, euismod sit amet turpis. Phasellus nulla turpis, consequat consectetur dapibus sit amet, viverra ut neque. Cras nec porta dui. Pellentesque ut magna ex. Nam felis turpis, imperdiet ac accumsan a, maximus at nibh. In non augue maximus, venenatis velit id, varius leo. Suspendisse et quam quis ipsum rutrum ullamcorper non eu dui. Nulla condimentum nisl ligula, sed rhoncus urna sagittis non. Pellentesque pulvinar mattis odio, id egestas nunc rhoncus posuere. Cras malesuada nisl dolor. Nullam pulvinar nibh elit, ut dapibus nibh sodales sed. Nam ligula nisi, convallis vitae fringilla consectetur, pulvinar ac nisi. Maecenas faucibus leo et libero ullamcorper, auctor sollicitudin est condimentum.`
};
export { apresentacao };

const mockStatus = {
  dados: {
    dados: [
      { titulo: "Parlamentares", valor: 197 },
      { titulo: "Projetos de Lei", valor: 131 }
    ]
  },
  pautas: {
    pautas: [
      { titulo: "Linguagem Neutra", valor: 81 },
      { titulo: "Banheiros", valor: 47 },
      { titulo: "Atletas Trans", valor: 40 },
      { titulo: "Propaganda LGBTQIAPN+", valor: 33 }
    ]
  }
};
export { mockStatus };

//! PROJETOS DE LEI FALSOS
const projetosMock = [
  {
    id: "1",
    ano: "2021",
    numero_pl: "PL123/2021",
    pauta: "Linguagem Neutra",
    parlamentares: [
      {
        url_imagem:
          "https://superawesomevectors.com/wp-content/uploads/2016/02/businessman-with-suit-flat-vector-icon-800x566.jpg",
        nome: "João Silva",
        genero: "Masculino",
        religiao: "Cristão",
        raca: "Branco",
        esfera: "Federal",
        estado: "São Paulo",
        profissao: "Advogado",
        partido: "PSDB",
        ideologia: "Direita"
      }
    ],
    ementa:
      "FALSO: Proíbe o uso de linguagem neutra em documentos oficiais e na educação pública."
  },
  {
    id: "2",
    ano: "2021",
    numero_pl: "PL456/2023",
    pauta: "Atletas Trans",
    parlamentares: [
      {
        url_imagem:
          "https://static.vecteezy.com/system/resources/thumbnails/043/361/881/small/default-placeholder-avatar-profile-on-gray-background-woman-avatar-user-profile-person-icon-silhouette-profile-picture-for-unknown-or-anonymous-individual-for-social-media-website-free-vector.jpg",
        nome: "Ana Costa",
        genero: "Feminino",
        religiao: "Católico",
        raca: "Indígena",
        esfera: "Estadual",
        estado: "Amazonas",
        profissao: "Ambientalista",
        partido: "PL",
        ideologia: "Extrema Direita"
      }
    ],
    ementa:
      "FALSO: Proíbe a participação de atletas trans em competições esportivas femininas."
  },
  {
    id: "3",
    ano: "2024",
    numero_pl: "PL789/2022",
    pauta: "Banheiros Multigênero",
    parlamentares: [
      {
        url_imagem:
          "https://superawesomevectors.com/wp-content/uploads/2016/02/businessman-with-suit-flat-vector-icon-800x566.jpg",
        nome: "Carlos Almeida",
        genero: "Não Binário",
        religiao: "Agnóstico",
        raca: "Polaco",
        esfera: "Municipal",
        estado: "Minas Gerais",
        profissao: "Economista",
        partido: "PT",
        ideologia: "Centro Esquerda"
      },
      {
        url_imagem:
          "https://static.vecteezy.com/system/resources/thumbnails/043/361/881/small/default-placeholder-avatar-profile-on-gray-background-woman-avatar-user-profile-person-icon-silhouette-profile-picture-for-unknown-or-anonymous-individual-for-social-media-website-free-vector.jpg",
        nome: "Fernanda Oliveira",
        genero: "Feminino",
        religiao: "Não identificado",
        raca: "Pardo",
        esfera: "Estadual",
        estado: "Rio de Janeiro",
        profissao: "Professora",
        partido: "PSOL",
        ideologia: "Esquerda Radical"
      }
    ],
    ementa:
      "FALSO: Autoriza o uso de banheiros de acordo com a identidade de gênero de cada indivíduo."
  },
  {
    id: "4",
    ano: "2020",
    numero_pl: "PL321/2020",
    pauta: "Propaganda LGBT",
    parlamentares: [
      {
        url_imagem:
          "https://superawesomevectors.com/wp-content/uploads/2016/02/businessman-with-suit-flat-vector-icon-800x566.jpg",
        nome: "Lucas Pereira",
        genero: "Masculino",
        religiao: "Satanista",
        raca: "Não identificado",
        esfera: "Estadual",
        estado: "Bahia",
        profissao: "Empresário",
        partido: "DEM",
        ideologia: "Centro Direita"
      }
    ],
    ementa:
      "FALSO: Proíbe a veiculação de propaganda LGBT em horários nobres de TV e rádio."
  },
  {
    id: "5",
    ano: "2022",
    numero_pl: "PL432/2022",
    pauta: "Atletas Trans",
    parlamentares: [
      {
        url_imagem:
          "https://static.vecteezy.com/system/resources/thumbnails/043/361/881/small/default-placeholder-avatar-profile-on-gray-background-woman-avatar-user-profile-person-icon-silhouette-profile-picture-for-unknown-or-anonymous-individual-for-social-media-website-free-vector.jpg",
        nome: "Mariana Souza",
        genero: "Feminino",
        religiao: "Cristão",
        raca: "Branco",
        esfera: "Federal",
        estado: "São Paulo",
        profissao: "Advogada",
        partido: "PSDB",
        ideologia: "Direita"
      }
    ],
    ementa:
      "FALSO: Limita a participação de atletas trans em competições femininas de alto nível."
  },
  {
    id: "6",
    ano: "2022",
    numero_pl: "PL112/2022",
    pauta: "Banheiros Multigênero",
    parlamentares: [
      {
        url_imagem:
          "https://superawesomevectors.com/wp-content/uploads/2016/02/businessman-with-suit-flat-vector-icon-800x566.jpg",
        nome: "Joaquim Ferreira",
        genero: "Masculino",
        religiao: "Católico",
        raca: "Pardo",
        esfera: "Federal",
        estado: "Pará",
        profissao: "Médico",
        partido: "MDB",
        ideologia: "Centro"
      }
    ],
    ementa:
      "FALSO: Autoriza o uso de banheiros multigênero em estabelecimentos públicos e privados."
  },
  {
    id: "7",
    ano: "2021",
    numero_pl: "PL543/2021",
    pauta: "Propaganda LGBT",
    parlamentares: [
      {
        url_imagem:
          "https://superawesomevectors.com/wp-content/uploads/2016/02/businessman-with-suit-flat-vector-icon-800x566.jpg",
        nome: "Ricardo Santos",
        genero: "Masculino",
        religiao: "Evangélico",
        raca: "Branco",
        esfera: "Estadual",
        estado: "São Paulo",
        profissao: "Comerciante",
        partido: "PRB",
        ideologia: "Centro Direita"
      }
    ],
    ementa: "FALSO: Regula a exibição de propaganda LGBT na mídia."
  },
  {
    id: "8",
    ano: "2021",
    numero_pl: "PL234/2021",
    pauta: "Linguagem Neutra",
    parlamentares: [
      {
        url_imagem:
          "https://static.vecteezy.com/system/resources/thumbnails/043/361/881/small/default-placeholder-avatar-profile-on-gray-background-woman-avatar-user-profile-person-icon-silhouette-profile-picture-for-unknown-or-anonymous-individual-for-social-media-website-free-vector.jpg",
        nome: "Beatriz Silva",
        genero: "Feminino",
        religiao: "Não identificado",
        raca: "Pardo",
        esfera: "Federal",
        estado: "Pernambuco",
        profissao: "Arquiteta",
        partido: "PT",
        ideologia: "Esquerda"
      }
    ],
    ementa:
      "FALSO: Permite o uso de linguagem neutra em todos os documentos oficiais."
  },
  {
    id: "9",
    ano: "2023",
    numero_pl: "PL678/2023",
    pauta: "Atletas Trans",
    parlamentares: [
      {
        url_imagem:
          "https://superawesomevectors.com/wp-content/uploads/2016/02/businessman-with-suit-flat-vector-icon-800x566.jpg",
        nome: "André Oliveira",
        genero: "Masculino",
        religiao: "Católico",
        raca: "Preto",
        esfera: "Federal",
        estado: "Ceará",
        profissao: "Professor",
        partido: "PDT",
        ideologia: "Centro"
      }
    ],
    ementa:
      "FALSO: Permite a participação de atletas trans em competições esportivas femininas, desde que haja critério de performance."
  },
  {
    id: "10",
    ano: "2023",
    numero_pl: "PL891/2023",
    pauta: "Banheiros Multigênero",
    parlamentares: [
      {
        url_imagem:
          "https://static.vecteezy.com/system/resources/thumbnails/043/361/881/small/default-placeholder-avatar-profile-on-gray-background-woman-avatar-user-profile-person-icon-silhouette-profile-picture-for-unknown-or-anonymous-individual-for-social-media-website-free-vector.jpg",
        nome: "Luciana Costa",
        genero: "Feminino",
        religiao: "Cristão",
        raca: "Branco",
        esfera: "Estadual",
        estado: "Goiás",
        profissao: "Médica",
        partido: "PSL",
        ideologia: "Centro Direita"
      }
    ],
    ementa:
      "FALSO: Estabelece que os banheiros em espaços públicos devem ser unissex e sem distinção de gênero."
  },
  {
    id: "11",
    ano: "2023",
    numero_pl: "PL234/2023",
    pauta: "Propaganda LGBT",
    parlamentares: [
      {
        url_imagem:
          "https://superawesomevectors.com/wp-content/uploads/2016/02/businessman-with-suit-flat-vector-icon-800x566.jpg",
        nome: "Carlos Rocha",
        genero: "Masculino",
        religiao: "Evangélico",
        raca: "Branco",
        esfera: "Federal",
        estado: "Minas Gerais",
        profissao: "Deputado",
        partido: "PSDB",
        ideologia: "Direita"
      }
    ],
    ementa:
      "FALSO: Limita a propaganda LGBT em horários específicos e restritos."
  },
  {
    id: "12",
    ano: "2021",
    numero_pl: "PL987/2021",
    pauta: "Linguagem Neutra",
    parlamentares: [
      {
        url_imagem:
          "https://superawesomevectors.com/wp-content/uploads/2016/02/businessman-with-suit-flat-vector-icon-800x566.jpg",
        nome: "José Pereira",
        genero: "Masculino",
        religiao: "Católico",
        raca: "Pardo",
        esfera: "Federal",
        estado: "Bahia",
        profissao: "Engenheiro",
        partido: "PL",
        ideologia: "Centro"
      }
    ],
    ementa:
      "FALSO: Proíbe o uso de linguagem neutra nas escolas públicas e privadas."
  },
  {
    id: "13",
    ano: "2022",
    numero_pl: "PL110/2022",
    pauta: "Atletas Trans",
    parlamentares: [
      {
        url_imagem:
          "https://static.vecteezy.com/system/resources/thumbnails/043/361/881/small/default-placeholder-avatar-profile-on-gray-background-woman-avatar-user-profile-person-icon-silhouette-profile-picture-for-unknown-or-anonymous-individual-for-social-media-website-free-vector.jpg",
        nome: "Cláudia Lima",
        genero: "Feminino",
        religiao: "Cristão",
        raca: "Branco",
        esfera: "Estadual",
        estado: "Rio de Janeiro",
        profissao: "Psicóloga",
        partido: "PSOL",
        ideologia: "Esquerda Radical"
      }
    ],
    ementa:
      "FALSO: Permite que atletas trans participem de competições sem exigências de hormonização."
  },
  {
    id: "14",
    ano: "2023",
    numero_pl: "PL111/2023",
    pauta: "Banheiros Multigênero",
    parlamentares: [
      {
        url_imagem:
          "https://superawesomevectors.com/wp-content/uploads/2016/02/businessman-with-suit-flat-vector-icon-800x566.jpg",
        nome: "Fernando Souza",
        genero: "Masculino",
        religiao: "Católico",
        raca: "Pardo",
        esfera: "Federal",
        estado: "Espírito Santo",
        profissao: "Advogado",
        partido: "MDB",
        ideologia: "Centro"
      }
    ],
    ementa:
      "FALSO: Defende a criação de banheiros públicos multigênero em estabelecimentos privados."
  },
  {
    id: "15",
    ano: "2021",
    numero_pl: "PL123/2021",
    pauta: "Propaganda LGBT",
    parlamentares: [
      {
        url_imagem:
          "https://static.vecteezy.com/system/resources/thumbnails/043/361/881/small/default-placeholder-avatar-profile-on-gray-background-woman-avatar-user-profile-person-icon-silhouette-profile-picture-for-unknown-or-anonymous-individual-for-social-media-website-free-vector.jpg",
        nome: "Gabriela Santos",
        genero: "Feminino",
        religiao: "Não identificado",
        raca: "Amarelo",
        esfera: "Federal",
        estado: "São Paulo",
        profissao: "Psicóloga",
        partido: "PSOL",
        ideologia: "Esquerda Radical"
      }
    ],
    ementa: "FALSO: Proíbe propaganda LGBT em canais de TV por assinatura."
  },
  {
    id: "16",
    ano: "2022",
    numero_pl: "PL123/2022",
    pauta: "Linguagem Neutra",
    parlamentares: [
      {
        url_imagem:
          "https://static.vecteezy.com/system/resources/thumbnails/043/361/881/small/default-placeholder-avatar-profile-on-gray-background-woman-avatar-user-profile-person-icon-silhouette-profile-picture-for-unknown-or-anonymous-individual-for-social-media-website-free-vector.jpg",
        nome: "Joana Silva",
        genero: "Feminino",
        religiao: "Católico",
        raca: "Branco",
        esfera: "Estadual",
        estado: "Pará",
        profissao: "Advogada",
        partido: "PSL",
        ideologia: "Centro"
      }
    ],
    ementa:
      "FALSO: Proíbe a utilização de linguagem neutra em documentos e textos oficiais."
  },
  {
    id: "17",
    ano: "2021",
    numero_pl: "PL765/2021",
    pauta: "Atletas Trans",
    parlamentares: [
      {
        url_imagem:
          "https://superawesomevectors.com/wp-content/uploads/2016/02/businessman-with-suit-flat-vector-icon-800x566.jpg",
        nome: "André Gomes",
        genero: "Masculino",
        religiao: "Evangélico",
        raca: "Branco",
        esfera: "Federal",
        estado: "Pará",
        profissao: "Empresário",
        partido: "PSDB",
        ideologia: "Centro"
      }
    ],
    ementa:
      "FALSO: Proíbe a participação de atletas trans em categorias esportivas femininas."
  },
  {
    id: "18",
    ano: "2023",
    numero_pl: "PL1111/2023",
    pauta: "Banheiros Multigênero",
    parlamentares: [
      {
        url_imagem:
          "https://static.vecteezy.com/system/resources/thumbnails/043/361/881/small/default-placeholder-avatar-profile-on-gray-background-woman-avatar-user-profile-person-icon-silhouette-profile-picture-for-unknown-or-anonymous-individual-for-social-media-website-free-vector.jpg",
        nome: "Tânia Costa",
        genero: "Feminino",
        religiao: "Católico",
        raca: "Branco",
        esfera: "Federal",
        estado: "Minas Gerais",
        profissao: "Engenheira",
        partido: "PSB",
        ideologia: "Centro"
      }
    ],
    ementa:
      "FALSO: Estabelece o uso de banheiros multigênero para promover inclusão social."
  },
  {
    id: "19",
    ano: "2023",
    numero_pl: "PL453/2023",
    pauta: "Propaganda LGBT",
    parlamentares: [
      {
        url_imagem:
          "https://superawesomevectors.com/wp-content/uploads/2016/02/businessman-with-suit-flat-vector-icon-800x566.jpg",
        nome: "Daniel Oliveira",
        genero: "Masculino",
        religiao: "Evangélico",
        raca: "Branco",
        esfera: "Estadual",
        estado: "Santa Catarina",
        profissao: "Comerciante",
        partido: "PSL",
        ideologia: "Centro Direita"
      }
    ],
    ementa:
      "FALSO: Proíbe a veiculação de conteúdo LGBTQI+ na publicidade voltada ao público infanto-juvenil."
  },
  {
    id: "20",
    ano: "2022",
    numero_pl: "PL899/2022",
    pauta: "Linguagem Neutra",
    parlamentares: [
      {
        url_imagem:
          "https://static.vecteezy.com/system/resources/thumbnails/043/361/881/small/default-placeholder-avatar-profile-on-gray-background-woman-avatar-user-profile-person-icon-silhouette-profile-picture-for-unknown-or-anonymous-individual-for-social-media-website-free-vector.jpg",
        nome: "Roberta Lima",
        genero: "Feminino",
        religiao: "Não identificado",
        raca: "Branco",
        esfera: "Federal",
        estado: "São Paulo",
        profissao: "Psicóloga",
        partido: "PSOL",
        ideologia: "Esquerda"
      }
    ],
    ementa:
      "FALSO: Exige que a linguagem neutra seja adotada em todos os documentos públicos."
  }
];
export { projetosMock };

const legendas = [
  {
    titulo: "PL's",
    cor: "text-[#93F996]",
    resumo: `
     Pls lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis esse, inventore doloribus non cumque, sint illo in modi corporis reprehenderit animi explicabo, sapiente voluptate? Sunt a ducimus atque possimus quasi.
    `,
    texto: `
    
     Pls lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis esse, inventore doloribus non cumque, sint illo in modi corporis reprehenderit animi explicabo, sapiente voluptate? Sunt a ducimus atque possimus quasi.
     Ipsum dolor sit amet, consectetur adipisicing elit. Perferendis esse, inventore doloribus non cumque, sint illo in modi corporis reprehenderit animi explicabo, sapiente voluptate? Sunt a ducimus atque possimus quasi.
     Dolor sit amet, consectetur adipisicing elit. Perferendis esse, inventore doloribus non cumque, sint illo in modi corporis reprehenderit animi explicabo, sapiente voluptate? Sunt a ducimus atque possimus quasi.
    `
  },
  {
    titulo: "Pautas",
    cor: "text-[#F693F9]",
    resumo: `
    Pautas lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis esse, inventore doloribus non cumque, sint illo in modi corporis reprehenderit animi explicabo, sapiente voluptate? Sunt a ducimus atque possimus quasi.`,
    texto: `
      Pautas lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis esse, inventore doloribus non cumque, sint illo in modi corporis reprehenderit animi explicabo, sapiente voluptate? Sunt a ducimus atque possimus quasi.
      Ipsum dolor sit amet, consectetur adipisicing elit. Perferendis esse, inventore doloribus non cumque, sint illo in modi corporis reprehenderit animi explicabo, sapiente voluptate? Sunt a ducimus atque possimus quasi.
      Dolor sit amet, consectetur adipisicing elit. Perferendis esse, inventore doloribus non cumque, sint illo in modi corporis reprehenderit animi explicabo, sapiente voluptate? Sunt a ducimus atque possimus quasi.
     `
  },
];

export { legendas };
