const apresentacao = {
  subtitulo: "Como funciona a",
  titulo: "criação de um PL",
  cor: "text-[#FDFF78]",
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
        nome: "João Silva",
        genero: "Masculino",
        religiao: "Protestante",
        raca: "Branca",
        esfera: "Federal",
        estado: "São Paulo",
        profissao: "Advogado",
        partido: "PSDB",
        ideologia: "Conservadora"
      }
    ],
    ementa:
      "Proíbe o uso de linguagem neutra em documentos oficiais e na educação pública."
  },
  {
    id: "2",
    ano: "2021",
    numero_pl: "PL456/2023",
    pauta: "Atletas Trans",
    parlamentares: [
      {
        nome: "Ana Costa",
        genero: "Feminino",
        religiao: "Católica",
        raca: "Indígena",
        esfera: "Federal",
        estado: "Amazonas",
        profissao: "Ambientalista",
        partido: "PL",
        ideologia: "Conservadora"
      }
    ],
    ementa:
      "Proíbe a participação de atletas trans em competições esportivas femininas."
  },
  {
    id: "3",
    ano: "2021",
    numero_pl: "PL789/2022",
    pauta: "Banheiros Multigênero",
    parlamentares: [
      {
        nome: "Carlos Souza",
        genero: "Masculino",
        religiao: "Católico",
        raca: "Parda",
        esfera: "Estadual",
        estado: "Minas Gerais",
        profissao: "Professor",
        partido: "PSL",
        ideologia: "Conservadora"
      }
    ],
    ementa:
      "Proíbe o uso de banheiros públicos de gênero misto em espaços escolares e governamentais."
  },
  {
    id: "4",
    ano: "2021",
    numero_pl: "PL101/2021",
    pauta: "Propaganda LGBT",
    parlamentares: [
      {
        nome: "Maria Oliveira",
        genero: "Feminino",
        religiao: "Evangélica",
        raca: "Negra",
        esfera: "Estadual",
        estado: "Rio de Janeiro",
        profissao: "Médica",
        partido: "PTB",
        ideologia: "Conservadora"
      }
    ],
    ementa:
      "Proíbe a veiculação de propagandas que incentivem a ideologia de gênero e o movimento LGBT."
  },
  {
    id: "5",
    ano: "2021",
    numero_pl: "PL505/2020",
    pauta: "Linguagem Neutra",
    parlamentares: [
      {
        nome: "Pedro Santos",
        genero: "Masculino",
        religiao: "Católica",
        raca: "Parda",
        esfera: "Estadual",
        estado: "Pará",
        profissao: "Engenheiro Civil",
        partido: "PSDB",
        ideologia: "Liberal"
      }
    ],
    ementa: "Proíbe o uso de linguagem neutra nas escolas públicas e privadas."
  },
  {
    id: "6",
    ano: "2021",
    numero_pl: "PL808/2021",
    pauta: "Atletas Trans",
    parlamentares: [
      {
        nome: "Roberta Lima",
        genero: "Feminino",
        religiao: "Evangelica",
        raca: "Branca",
        esfera: "Federal",
        estado: "Bahia",
        profissao: "Produtora Cultural",
        partido: "MDB",
        ideologia: "Conservadora"
      }
    ],
    ementa:
      "Regulamenta a proibição de atletas trans em modalidades esportivas femininas."
  },
  {
    id: "7",
    ano: "2021",
    numero_pl: "PL202/2023",
    pauta: "Banheiros Multigênero",
    parlamentares: [
      {
        nome: "Lucas Martins",
        genero: "Masculino",
        religiao: "Católico",
        raca: "Branca",
        esfera: "Federal",
        estado: "Santa Catarina",
        profissao: "Advogado",
        partido: "PL",
        ideologia: "Conservadora"
      }
    ],
    ementa: "Proíbe a criação de espaços públicos de banheiros multigêneros."
  },
  {
    id: "8",
    ano: "2021",
    numero_pl: "PL909/2022",
    pauta: "Propaganda LGBT",
    parlamentares: [
      {
        nome: "Mariana Vieira",
        genero: "Feminino",
        religiao: "Evangélica",
        raca: "Negra",
        esfera: "Estadual",
        estado: "Pernambuco",
        profissao: "Economista",
        partido: "PSL",
        ideologia: "Conservadora"
      }
    ],
    ementa:
      "Restringe propagandas que promovem a ideologia LGBT em veículos de mídia."
  },
  {
    id: "9",
    ano: "2021",
    numero_pl: "PL303/2021",
    pauta: "Linguagem Neutra",
    parlamentares: [
      {
        nome: "Tiago Almeida",
        genero: "Masculino",
        religiao: "Católica",
        raca: "Branca",
        esfera: "Estadual",
        estado: "São Paulo",
        profissao: "Engenheiro de Software",
        partido: "PSL",
        ideologia: "Liberal"
      }
    ],
    ementa: "Proíbe o uso de termos neutros nas leis estaduais e municipais."
  },
  {
    id: "10",
    ano: "2021",
    numero_pl: "PL707/2020",
    pauta: "Atletas Trans",
    parlamentares: [
      {
        nome: "Fernanda Gomes",
        genero: "Feminino",
        religiao: "Espírita",
        raca: "Parda",
        esfera: "Estadual",
        estado: "Rio Grande do Sul",
        profissao: "Arquiteta",
        partido: "PL",
        ideologia: "Conservadora"
      }
    ],
    ementa:
      "Proíbe que atletas trans participem de competições esportivas destinadas a mulheres."
  },
  {
    id: "11",
    ano: "2022",
    numero_pl: "PL101/2022",
    pauta: "Banheiros Multigênero",
    parlamentares: [
      {
        nome: "João Silva",
        genero: "Masculino",
        religiao: "Católica",
        raca: "Branco",
        esfera: "Federal",
        estado: "São Paulo",
        profissao: "Professor",
        partido: "PL",
        ideologia: "Conservadora"
      }
    ],
    ementa:
      "Proíbe a implementação de banheiros multigêneros em escolas e espaços públicos."
  },
  {
    id: "12",
    ano: "2020",
    numero_pl: "PL808/2021",
    pauta: "Propaganda LGBT",
    parlamentares: [
      {
        nome: "Maria Oliveira",
        genero: "Feminino",
        religiao: "Evangélica",
        raca: "Negra",
        esfera: "Estadual",
        estado: "Bahia",
        profissao: "Médica",
        partido: "PSDB",
        ideologia: "Conservadora"
      }
    ],
    ementa:
      "Proíbe a promoção de campanhas publicitárias que incentivem os direitos LGBT."
  },
  {
    id: "13",
    ano: "2020",
    numero_pl: "PL109/2023",
    pauta: "Linguagem Neutra",
    parlamentares: [
      {
        nome: "Carlos Souza",
        genero: "Masculino",
        religiao: "Sem religião",
        raca: "Parda",
        esfera: "Estadual",
        estado: "Rio de Janeiro",
        profissao: "Advogado",
        partido: "DEM",
        ideologia: "Conservadora"
      }
    ],
    ementa:
      "Exclui o uso de linguagem neutra nas escolas e na comunicação pública."
  },
  {
    id: "14",
    ano: "2023",
    numero_pl: "PL505/2020",
    pauta: "Atletas Trans",
    parlamentares: [
      {
        nome: "Luciana Almeida",
        genero: "Feminino",
        religiao: "Católica",
        raca: "Indígena",
        esfera: "Federal",
        estado: "Amazonas",
        profissao: "Socióloga",
        partido: "PL",
        ideologia: "Conservadora"
      }
    ],
    ementa:
      "Regulamenta a exclusão de atletas trans em eventos esportivos femininos."
  },
  {
    id: "15",
    ano: "2021",
    numero_pl: "PL303/2021",
    pauta: "Banheiros Multigênero",
    parlamentares: [
      {
        nome: "Paulo Roberto",
        genero: "Masculino",
        religiao: "Católico",
        raca: "Branco",
        esfera: "Estadual",
        estado: "Paraná",
        profissao: "Engenheiro Ambiental",
        partido: "PL",
        ideologia: "Conservadora"
      }
    ],
    ementa:
      "Proíbe a utilização de banheiros de gênero misto nas escolas públicas."
  },
  {
    id: "16",
    ano: "2023",
    numero_pl: "PL202/2023",
    pauta: "Propaganda LGBT",
    parlamentares: [
      {
        nome: "Ana Lima",
        genero: "Feminino",
        religiao: "Sem religião",
        raca: "Branca",
        esfera: "Federal",
        estado: "Minas Gerais",
        profissao: "Engenheira de Software",
        partido: "PL",
        ideologia: "Conservadora"
      }
    ],
    ementa:
      "Proíbe a exibição de propagandas de apoio à agenda LGBT em espaços públicos."
  },
  {
    id: "17",
    ano: "2022",
    numero_pl: "PL450/2022",
    pauta: "Linguagem Neutra",
    parlamentares: [
      {
        nome: "Juliana Rocha",
        genero: "Feminino",
        religiao: "Protestante",
        raca: "Negra",
        esfera: "Estadual",
        estado: "Pernambuco",
        profissao: "Artista Plástica",
        partido: "PSOL",
        ideologia: "Conservadora"
      }
    ],
    ementa:
      "Proíbe o uso de linguagem neutra em projetos de lei e documentos oficiais."
  },
  {
    id: "18",
    ano: "2021",
    numero_pl: "PL802/2021",
    pauta: "Atletas Trans",
    parlamentares: [
      {
        nome: "Carlos Mendes",
        genero: "Masculino",
        religiao: "Católico",
        raca: "Parda",
        esfera: "Estadual",
        estado: "Mato Grosso",
        profissao: "Agrônomo",
        partido: "PSDB",
        ideologia: "Liberal"
      }
    ],
    ementa:
      "Exclui a participação de atletas trans nas competições femininas em nível estadual."
  },
  {
    id: "19",
    ano: "2020",
    numero_pl: "PL702/2020",
    pauta: "Propaganda LGBT",
    parlamentares: [
      {
        nome: "Renata Azevedo",
        genero: "Feminino",
        religiao: "Evangelica",
        raca: "Branca",
        esfera: "Federal",
        estado: "Rio de Janeiro",
        profissao: "Economista",
        partido: "PSL",
        ideologia: "Conservadora"
      }
    ],
    ementa: "Proíbe a propaganda de ideologias LGBT nas redes sociais."
  },
  {
    id: "20",
    ano: "2022",
    numero_pl: "PL102/2022",
    pauta: "Linguagem Neutra",
    parlamentares: [
      {
        nome: "José Henrique",
        genero: "Masculino",
        religiao: "Protestante",
        raca: "Branco",
        esfera: "Estadual",
        estado: "São Paulo",
        profissao: "Médico",
        partido: "PL",
        ideologia: "Conservadora"
      }
    ],
    ementa:
      "Proíbe o uso de linguagem neutra em documentos públicos e no ensino básico."
  },
  {
    id: "21",
    ano: "2022",
    numero_pl: "PL903/2021",
    pauta: "Atletas Trans",
    parlamentares: [
      {
        nome: "Amanda Rocha",
        genero: "Feminino",
        religiao: "Católica",
        raca: "Parda",
        esfera: "Federal",
        estado: "Rio de Janeiro",
        profissao: "Advogada",
        partido: "PSL",
        ideologia: "Conservadora"
      }
    ],
    ementa:
      "Proíbe atletas trans de competir em categorias femininas no esporte."
  },
  {
    id: "22",
    ano: "2022",
    numero_pl: "PL404/2023",
    pauta: "Banheiros Multigênero",
    parlamentares: [
      {
        nome: "Ricardo Alves",
        genero: "Masculino",
        religiao: "Católico",
        raca: "Branco",
        esfera: "Estadual",
        estado: "Paraná",
        profissao: "Engenheiro",
        partido: "PSDB",
        ideologia: "Liberal"
      }
    ],
    ementa:
      "Proíbe a implementação de banheiros de gênero misto em escolas públicas."
  },
  {
    id: "23",
    ano: "2019",
    numero_pl: "PL211/2021",
    pauta: "Propaganda LGBT",
    parlamentares: [
      {
        nome: "Paulo Souza",
        genero: "Masculino",
        religiao: "Protestante",
        raca: "Parda",
        esfera: "Federal",
        estado: "São Paulo",
        profissao: "Empresário",
        partido: "PL",
        ideologia: "Conservadora"
      }
    ],
    ementa:
      "Proíbe a veiculação de propaganda LGBT em mídias públicas e privadas."
  },
  {
    id: "24",
    ano: "2019",
    numero_pl: "PL999/2021",
    pauta: "Linguagem Neutra",
    parlamentares: [
      {
        nome: "Mariana Costa",
        genero: "Feminino",
        religiao: "Evangélica",
        raca: "Branca",
        esfera: "Estadual",
        estado: "Espírito Santo",
        profissao: "Professora",
        partido: "PSL",
        ideologia: "Conservadora"
      }
    ],
    ementa:
      "Proíbe o uso de linguagem neutra nas escolas do ensino fundamental."
  },
  {
    id: "25",
    ano: "2018",
    numero_pl: "PL202/2022",
    pauta: "Atletas Trans",
    parlamentares: [
      {
        nome: "Carlos Alberto",
        genero: "Masculino",
        religiao: "Católico",
        raca: "Branco",
        esfera: "Federal",
        estado: "Minas Gerais",
        profissao: "Advogado",
        partido: "PSDB",
        ideologia: "Conservadora"
      }
    ],
    ementa:
      "Exclui a participação de atletas trans em competições esportivas femininas."
  },
  {
    id: "26",
    ano: "2018",
    numero_pl: "PL345/2021",
    pauta: "Banheiros Multigênero",
    parlamentares: [
      {
        nome: "Luciana Pimentel",
        genero: "Feminino",
        religiao: "Evangélica",
        raca: "Negra",
        esfera: "Estadual",
        estado: "Bahia",
        profissao: "Economista",
        partido: "PL",
        ideologia: "Conservadora"
      }
    ],
    ementa:
      "Proíbe a criação de banheiros multigêneros em escolas públicas estaduais."
  },
  {
    id: "27",
    ano: "2019",
    numero_pl: "PL623/2021",
    pauta: "Propaganda LGBT",
    parlamentares: [
      {
        nome: "Renato Silva",
        genero: "Masculino",
        religiao: "Católica",
        raca: "Parda",
        esfera: "Estadual",
        estado: "Santa Catarina",
        profissao: "Arquiteto",
        partido: "MDB",
        ideologia: "Conservadora"
      }
    ],
    ementa:
      "Restringe a divulgação de propagandas que promovam a ideologia LGBT em canais de TV."
  },
  {
    id: "28",
    ano: "2017",
    numero_pl: "PL809/2021",
    pauta: "Linguagem Neutra",
    parlamentares: [
      {
        nome: "Fábio Tavares",
        genero: "Masculino",
        religiao: "Sem religião",
        raca: "Branco",
        esfera: "Federal",
        estado: "Pernambuco",
        profissao: "Engenheiro",
        partido: "PSDB",
        ideologia: "Liberal"
      }
    ],
    ementa:
      "Proíbe o uso de termos neutros em todas as leis federais e estaduais."
  },
  {
    id: "29",
    ano: "2017",
    numero_pl: "PL120/2022",
    pauta: "Atletas Trans",
    parlamentares: [
      {
        nome: "Sofia Ferreira",
        genero: "Feminino",
        religiao: "Evangélica",
        raca: "Parda",
        esfera: "Estadual",
        estado: "Ceará",
        profissao: "Advogada",
        partido: "PSL",
        ideologia: "Conservadora"
      }
    ],
    ementa:
      "Restringe a participação de atletas trans em competições esportivas femininas em nível estadual."
  },
  {
    id: "30",
    ano: "2017",
    numero_pl: "PL622/2023",
    pauta: "Banheiros Multigênero",
    parlamentares: [
      {
        nome: "Lucas Costa",
        genero: "Masculino",
        religiao: "Protestante",
        raca: "Branca",
        esfera: "Federal",
        estado: "Pará",
        profissao: "Médico",
        partido: "PL",
        ideologia: "Conservadora"
      }
    ],
    ementa:
      "Proíbe o uso de banheiros unissex em instituições de ensino públicas e privadas."
  },
  {
    id: "31",
    ano: "2019",
    numero_pl: "PL732/2022",
    pauta: "Propaganda LGBT",
    parlamentares: [
      {
        nome: "Carla Pereira",
        genero: "Feminino",
        religiao: "Católica",
        raca: "Negra",
        esfera: "Estadual",
        estado: "Rio de Janeiro",
        profissao: "Professora",
        partido: "PSDB",
        ideologia: "Conservadora"
      }
    ],
    ementa: "Proíbe propaganda LGBT nos meios de comunicação em horário nobre."
  },
  {
    id: "32",
    ano: "2016",
    numero_pl: "PL808/2020",
    pauta: "Linguagem Neutra",
    parlamentares: [
      {
        nome: "Renata Lima",
        genero: "Feminino",
        religiao: "Evangélica",
        raca: "Branca",
        esfera: "Estadual",
        estado: "Goiás",
        profissao: "Socióloga",
        partido: "PL",
        ideologia: "Conservadora"
      }
    ],
    ementa:
      "Proíbe o uso de linguagem neutra nas escolas públicas de ensino fundamental."
  },
  {
    id: "33",
    ano: "2023",
    numero_pl: "PL339/2022",
    pauta: "Atletas Trans",
    parlamentares: [
      {
        nome: "Eduardo Martins",
        genero: "Masculino",
        religiao: "Católico",
        raca: "Branco",
        esfera: "Estadual",
        estado: "São Paulo",
        profissao: "Empresário",
        partido: "PSDB",
        ideologia: "Liberal"
      }
    ],
    ementa:
      "Restringe a participação de atletas trans nas competições esportivas em escolas públicas."
  },
  {
    id: "34",
    ano: "2023",
    numero_pl: "PL710/2022",
    pauta: "Banheiros Multigênero",
    parlamentares: [
      {
        nome: "Carlos Lima",
        genero: "Masculino",
        religiao: "Sem religião",
        raca: "Parda",
        esfera: "Estadual",
        estado: "Rio de Janeiro",
        profissao: "Consultor",
        partido: "PL",
        ideologia: "Conservadora"
      }
    ],
    ementa: "Proíbe o uso de banheiros multigêneros em instituições de ensino."
  },
  {
    id: "35",
    ano: "2023",
    numero_pl: "PL251/2020",
    pauta: "Propaganda LGBT",
    parlamentares: [
      {
        nome: "Jéssica Oliveira",
        genero: "Feminino",
        religiao: "Evangélica",
        raca: "Negra",
        esfera: "Federal",
        estado: "Minas Gerais",
        profissao: "Pedagoga",
        partido: "PSL",
        ideologia: "Conservadora"
      }
    ],
    ementa:
      "Proíbe a propaganda LGBT em escolas públicas e em espaços de ensino privado."
  },
  {
    id: "36",
    ano: "2021",
    numero_pl: "PL200/2020",
    pauta: "Linguagem Neutra",
    parlamentares: [
      {
        nome: "Marcos Silva",
        genero: "Masculino",
        religiao: "Católico",
        raca: "Parda",
        esfera: "Estadual",
        estado: "Pará",
        profissao: "Profissional Liberal",
        partido: "MDB",
        ideologia: "Conservadora"
      }
    ],
    ementa:
      "Proíbe o uso de linguagem neutra em campanhas publicitárias governamentais."
  },
  {
    id: "37",
    ano: "2021",
    numero_pl: "PL445/2020",
    pauta: "Atletas Trans",
    parlamentares: [
      {
        nome: "Cláudia Mendes",
        genero: "Feminino",
        religiao: "Evangélica",
        raca: "Branca",
        esfera: "Estadual",
        estado: "Goiás",
        profissao: "Psicóloga",
        partido: "PSL",
        ideologia: "Conservadora"
      }
    ],
    ementa:
      "Restringe a participação de atletas trans nas competições esportivas femininas."
  },
  {
    id: "38",
    ano: "2021",
    numero_pl: "PL773/2020",
    pauta: "Banheiros Multigênero",
    parlamentares: [
      {
        nome: "Thiago Almeida",
        genero: "Masculino",
        religiao: "Católico",
        raca: "Branco",
        esfera: "Federal",
        estado: "Pará",
        profissao: "Engenheiro",
        partido: "PL",
        ideologia: "Liberal"
      }
    ],
    ementa:
      "Exclui banheiros de gênero misto em escolas públicas e universidades."
  },
  {
    id: "39",
    ano: "2021",
    numero_pl: "PL500/2020",
    pauta: "Propaganda LGBT",
    parlamentares: [
      {
        nome: "Vinícius Costa",
        genero: "Masculino",
        religiao: "Protestante",
        raca: "Parda",
        esfera: "Estadual",
        estado: "São Paulo",
        profissao: "Empresário",
        partido: "PSDB",
        ideologia: "Liberal"
      }
    ],
    ementa: "Proíbe a exibição de propagandas que promovam a ideologia LGBT."
  },
  {
    id: "40",
    ano: "2022",
    numero_pl: "PL890/2020",
    pauta: "Linguagem Neutra",
    parlamentares: [
      {
        nome: "Fernando Pereira",
        genero: "Masculino",
        religiao: "Católico",
        raca: "Branco",
        esfera: "Federal",
        estado: "Santa Catarina",
        profissao: "Arquiteto",
        partido: "PSL",
        ideologia: "Conservadora"
      }
    ],
    ementa:
      "Proíbe o uso de linguagem neutra em documentos oficiais de órgãos públicos."
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
  }
];

export { legendas };
