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
    ano: "2024",
    numero_pl: "PL123/2024",
    pauta: "Educação",
    parlamentares: [
      {
        nome: "João Silva",
        genero: "Masculino",
        religiao: "Católica",
        raca: "Branca",
        esfera: "Federal",
        estado: "São Paulo",
        profissao: "Advogado",
        partido: "PSDB",
        ideologia: "Liberal"
      }
    ],
    ementa: "Expande o acesso ao ensino integral nas escolas públicas."
  },
  {
    id: "2",
    ano: "2023",
    numero_pl: "PL456/2023",
    pauta: "Saúde",
    parlamentares: [
      {
        nome: "Ana Costa",
        genero: "Feminino",
        religiao: "Ateia",
        raca: "Indígena",
        esfera: "Federal",
        estado: "Amazonas",
        profissao: "Ambientalista",
        partido: "Rede",
        ideologia: "Sustentável"
      }
    ],
    ementa: "Prevê a distribuição de medicamentos essenciais gratuitos."
  },
  {
    id: "3",
    ano: "2022",
    numero_pl: "PL789/2022",
    pauta: "Meio Ambiente",
    parlamentares: [
      {
        nome: "Carlos Souza",
        genero: "Masculino",
        religiao: "Protestante",
        raca: "Parda",
        esfera: "Municipal",
        estado: "Minas Gerais",
        profissao: "Professor",
        partido: "PSL",
        ideologia: "Conservadora"
      }
    ],
    ementa: "Cria um programa nacional de reflorestamento."
  },
  {
    id: "4",
    ano: "2021",
    numero_pl: "PL101/2021",
    pauta: "Segurança Pública",
    parlamentares: [
      {
        nome: "Maria Oliveira",
        genero: "Feminino",
        religiao: "Evangélica",
        raca: "Negra",
        esfera: "Estadual",
        estado: "Rio de Janeiro",
        profissao: "Médica",
        partido: "PT",
        ideologia: "Progressista"
      }
    ],
    ementa:
      "Moderniza os equipamentos da polícia e propõe treinamento humanizado."
  },
  {
    id: "5",
    ano: "2020",
    numero_pl: "PL505/2020",
    pauta: "Infraestrutura",
    parlamentares: [
      {
        nome: "Pedro Santos",
        genero: "Masculino",
        religiao: "Católica",
        raca: "Parda",
        esfera: "Estadual",
        estado: "Pará",
        profissao: "Engenheiro Civil",
        partido: "PV",
        ideologia: "Progressista"
      }
    ],
    ementa: "Propõe a criação de ciclovias em todas as capitais do país."
  },
  {
    id: "6",
    ano: "2022",
    numero_pl: "PL808/2024",
    pauta: "Cultura",
    parlamentares: [
      {
        nome: "Roberta Lima",
        genero: "Feminino",
        religiao: "Espírita",
        raca: "Branca",
        esfera: "Federal",
        estado: "Bahia",
        profissao: "Produtora Cultural",
        partido: "PDT",
        ideologia: "Liberal"
      }
    ],
    ementa:
      "Incentiva o financiamento de artistas locais através de editais públicos."
  },
  {
    id: "7",
    ano: "2024",
    numero_pl: "PL202/2023",
    pauta: "Direitos Humanos",
    parlamentares: [
      {
        nome: "Lucas Martins",
        genero: "Masculino",
        religiao: "Agnóstico",
        raca: "Branca",
        esfera: "Federal",
        estado: "Santa Catarina",
        profissao: "Advogado",
        partido: "PSB",
        ideologia: "Progressista"
      }
    ],
    ementa: "Garante proteção adicional às vítimas de violência doméstica."
  },
  {
    id: "8",
    ano: "2022",
    numero_pl: "PL909/2022",
    pauta: "Economia",
    parlamentares: [
      {
        nome: "Mariana Vieira",
        genero: "Feminino",
        religiao: "Evangélica",
        raca: "Negra",
        esfera: "Estadual",
        estado: "Pernambuco",
        profissao: "Economista",
        partido: "MDB",
        ideologia: "Conservadora"
      },
      {
        nome: "Mariane Vieira",
        genero: "Feminino",
        religiao: "Evangélica",
        raca: "Negra",
        esfera: "Estadual",
        estado: "Pernambuco",
        profissao: "Economista",
        partido: "MDB",
        ideologia: "Conservadora"
      }
    ],
    ementa:
      "Reduz os impostos para pequenas empresas durante crises econômicas."
  },
  {
    id: "9",
    ano: "2021",
    numero_pl: "PL303/2021",
    pauta: "Tecnologia",
    parlamentares: [
      {
        nome: "Tiago Almeida",
        genero: "Masculino",
        religiao: "Católica",
        raca: "Branca",
        esfera: "Municipal",
        estado: "São Paulo",
        profissao: "Engenheiro de Software",
        partido: "NOVO",
        ideologia: "Liberal"
      }
    ],
    ementa:
      "Cria incentivos fiscais para empresas que investem em inovação tecnológica."
  },
  {
    id: "10",
    ano: "2021",
    numero_pl: "PL707/2020",
    pauta: "Mobilidade Urbana",
    parlamentares: [
      {
        nome: "Fernanda Gomes",
        genero: "Feminino",
        religiao: "Espírita",
        raca: "Parda",
        esfera: "Municipal",
        estado: "Rio Grande do Sul",
        profissao: "Arquiteta",
        partido: "PSD",
        ideologia: "Progressista"
      }
    ],
    ementa:
      "Propõe a ampliação de transportes públicos elétricos nas grandes cidades."
  },
  {
    id: "10",
    ano: "2021",
    numero_pl: "PL707/2020",
    pauta: "Mobilidade Urbana",
    parlamentares: [
      {
        nome: "Fernanda Gomes",
        genero: "Feminino",
        religiao: "Espírita",
        raca: "Parda",
        esfera: "Municipal",
        estado: "Rio Grande do Sul",
        profissao: "Arquiteta",
        partido: "PSD",
        ideologia: "Progressista"
      }
    ],
    ementa:
      "Propõe a ampliação de transportes públicos elétricos nas grandes cidades."
  },
  {
    id: "11",
    ano: "2022",
    numero_pl: "PL101/2022",
    pauta: "Educação",
    parlamentares: [
      {
        nome: "João Silva",
        genero: "Masculino",
        religiao: "Católico",
        raca: "Branco",
        esfera: "Federal",
        estado: "São Paulo",
        profissao: "Professor",
        partido: "PT",
        ideologia: "Socialista"
      }
    ],
    ementa:
      "Implementa ensino integral para escolas públicas em áreas vulneráveis."
  },
  {
    id: "12",
    ano: "2021",
    numero_pl: "PL808/2021",
    pauta: "Saúde Pública",
    parlamentares: [
      {
        nome: "Maria Oliveira",
        genero: "Feminino",
        religiao: "Evangelica",
        raca: "Negra",
        esfera: "Estadual",
        estado: "Bahia",
        profissao: "Médica",
        partido: "PSOL",
        ideologia: "Progressista"
      }
    ],
    ementa: "Ampliação do acesso a medicamentos genéricos no SUS."
  },
  {
    id: "13",
    ano: "2023",
    numero_pl: "PL109/2023",
    pauta: "Segurança",
    parlamentares: [
      {
        nome: "Carlos Souza",
        genero: "Masculino",
        religiao: "Sem religião",
        raca: "Parda",
        esfera: "Municipal",
        estado: "Rio de Janeiro",
        profissao: "Advogado",
        partido: "DEM",
        ideologia: "Conservadora"
      }
    ],
    ementa: "Criação de câmeras de vigilância em áreas de alta criminalidade."
  },
  {
    id: "14",
    ano: "2020",
    numero_pl: "PL505/2020",
    pauta: "Direitos Humanos",
    parlamentares: [
      {
        nome: "Luciana Almeida",
        genero: "Feminino",
        religiao: "Espírita",
        raca: "Indígena",
        esfera: "Federal",
        estado: "Amazonas",
        profissao: "Socióloga",
        partido: "PSB",
        ideologia: "Progressista"
      }
    ],
    ementa:
      "Reconhecimento de territórios indígenas e ampliação de direitos trabalhistas."
  },
  {
    id: "15",
    ano: "2021",
    numero_pl: "PL303/2021",
    pauta: "Meio Ambiente",
    parlamentares: [
      {
        nome: "Paulo Roberto",
        genero: "Masculino",
        religiao: "Católico",
        raca: "Branco",
        esfera: "Estadual",
        estado: "Paraná",
        profissao: "Engenheiro Ambiental",
        partido: "PV",
        ideologia: "Ecologista"
      }
    ],
    ementa:
      "Incentivo ao reflorestamento com espécies nativas em áreas degradadas."
  },
  {
    id: "16",
    ano: "2023",
    numero_pl: "PL202/2023",
    pauta: "Tecnologia",
    parlamentares: [
      {
        nome: "Ana Lima",
        genero: "Feminino",
        religiao: "Sem religião",
        raca: "Branca",
        esfera: "Federal",
        estado: "Minas Gerais",
        profissao: "Engenheira de Software",
        partido: "NOVO",
        ideologia: "Liberal"
      }
    ],
    ementa: "Criação de plataformas para transparência pública digital."
  },
  {
    id: "17",
    ano: "2022",
    numero_pl: "PL450/2022",
    pauta: "Cultura",
    parlamentares: [
      {
        nome: "Juliana Rocha",
        genero: "Feminino",
        religiao: "Protestante",
        raca: "Negra",
        esfera: "Municipal",
        estado: "Pernambuco",
        profissao: "Artista Plástica",
        partido: "PSOL",
        ideologia: "Progressista"
      }
    ],
    ementa: "Incentivo a projetos culturais em comunidades periféricas."
  },
  {
    id: "18",
    ano: "2021",
    numero_pl: "PL802/2021",
    pauta: "Agricultura",
    parlamentares: [
      {
        nome: "Carlos Mendes",
        genero: "Masculino",
        religiao: "Católico",
        raca: "Parda",
        esfera: "Estadual",
        estado: "Mato Grosso",
        profissao: "Agrônomo",
        partido: "MDB",
        ideologia: "Conservadora"
      }
    ],
    ementa: "Subsídios para produtores rurais em situação de vulnerabilidade."
  },
  {
    id: "19",
    ano: "2020",
    numero_pl: "PL702/2020",
    pauta: "Trabalho",
    parlamentares: [
      {
        nome: "Renata Azevedo",
        genero: "Feminino",
        religiao: "Espírita",
        raca: "Branca",
        esfera: "Federal",
        estado: "Rio de Janeiro",
        profissao: "Economista",
        partido: "PSDB",
        ideologia: "Liberal"
      }
    ],
    ementa: "Criação de políticas de estímulo ao primeiro emprego."
  }
  // ... Adicione mais projetos para completar os 20
];

export { projetosMock };

const mockData = [
  { year: "2016", projetos: 3 },
  { year: "2018", projetos: 1 },
  { year: "2019", projetos: 9 },
  { year: "2020", projetos: 39 },
  { year: "2021", projetos: 70 },
  { year: "2022", projetos: 24 },
  { year: "2023", projetos: 65 },
  { year: "2024", projetos: 1 }
];

export { mockData };
