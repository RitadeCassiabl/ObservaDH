import { DadosGraficoBarraEmpilhadaVertical, DadosGraficoBarrasMultiplas } from "../types/Graficos";
import { ProjetoLei } from "../types/Projetos";

function contarProjetosPorAno(data: ProjetoLei[]) {
  const anosContagem: Record<string, number> = {};

  data.forEach(item => {
    anosContagem[item.ano] = (anosContagem[item.ano] || 0) + 1;
  });

  return Object.entries(anosContagem).map(([ano, projetos]) => ({
    ano,
    projetos
  }));
}

function contarPautasPorAno(data: ProjetoLei[]) {
  const pautasPorAno: Record<string, Record<string, number>> = {};

  data.forEach(item => {
    if (!pautasPorAno[item.ano]) {
      pautasPorAno[item.ano] = {};
    }
    if (!pautasPorAno[item.ano][item.pauta]) {
      pautasPorAno[item.ano][item.pauta] = 0;
    }
    pautasPorAno[item.ano][item.pauta]++;
  });

  return Object.entries(pautasPorAno).map(([ano, pautas]) => ({
    ano: ano,
    linguagensNeutra: pautas["Linguagem Neutra"] || 0,
    atletasTrans: pautas["Atletas Trans"] || 0,
    banheirosMultigenero: pautas["Banheiros Multigênero"] || 0,
    propagandaLGBT: pautas["Propaganda LGBT"] || 0
  }));
}

function contarGeneroPorIdeologia(data: ProjetoLei[]) {
  const resultado: DadosGraficoBarrasMultiplas[] = [];

  const ideologiasFixas = [
    "Extrema Direita",
    "Direita",
    "Centro Direita",
    "Centro",
    "Centro Esquerda",
    "Esquerda",
    "Esquerda Radical"
  ];

  const generoPorIdeologia: Record<
    string,
    { homens: number; mulheres: number }
  > = ideologiasFixas.reduce((acc, ideologia) => {
    acc[ideologia] = { homens: 0, mulheres: 0 };
    return acc;
  }, {} as Record<string, { homens: number; mulheres: number }>);

  data.forEach(item => {
    item.parlamentares.forEach(parlamentar => {
      const ideologia = parlamentar.ideologia || "Desconhecida";
      const genero = parlamentar.genero || "Desconhecido";

      const ideologiaFinal = ideologiasFixas.includes(ideologia)
        ? ideologia
        : "Desconhecida";

      if (genero === "Masculino") {
        generoPorIdeologia[ideologiaFinal].homens++;
      } else if (genero === "Feminino") {
        generoPorIdeologia[ideologiaFinal].mulheres++;
      }
    });
  });

  for (const [ideologia, { homens, mulheres }] of Object.entries(
    generoPorIdeologia
  )) {
    resultado.push({ ideologia, homens, mulheres });
  }

  return resultado;
}function contarReligiaoPorEtnia(data: ProjetoLei[]) {
  const resultado: DadosGraficoBarraEmpilhadaVertical[] = [];

  const religioes: Record<
    string,
    { branco: number; preto: number; pardo: number; amarelo: number; indigena: number; indefinido: number }
  > = {};

  data.forEach(item => {
    item.parlamentares.forEach(parlamentar => {
      const etnia = (parlamentar.raca?.toLowerCase() || "indefinido") as keyof typeof religioes[string];
      const religiao = parlamentar.religiao || "Não identificado";

      if (!religioes[religiao]) {
        religioes[religiao] = {
          branco: 0,
          preto: 0,
          pardo: 0,
          amarelo: 0,
          indigena: 0,
          indefinido: 0,
        };
      }

      if (etnia in religioes[religiao]) {
        religioes[religiao][etnia]++;
      } else {
        religioes[religiao].indefinido++;
      }
    });
  });

  for (const [religiao, etnias] of Object.entries(religioes)) {
    resultado.push({
      religiao,
      ...etnias,
    });
  }

  resultado.sort((a, b) => {
    if (a.religiao === "Não identificado") return 1;
    if (b.religiao === "Não identificado") return -1;
    return 0;
  });
 
  return resultado;
}


function contarPropostasPorParlamentar(data: ProjetoLei[], nome: string): number {
  let contador = 0;
  data.forEach(projeto => {
    projeto.parlamentares.forEach(parlamentar => {
      if (parlamentar.nome.toLowerCase() === nome.toLowerCase()) {
        contador++;
      }
    });
  });

  return contador;
}




// ! - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - !

function obterAnosUnicos(
  projetos: ProjetoLei[]
): { titulo: string; value: string }[] {
  const anos = projetos.map(projeto => projeto.ano);
  const anosUnicos = Array.from(new Set(anos));
  return anosUnicos.map(ano => ({
    titulo: ano,
    value: ano.toLowerCase()
  }));
}
function obterEsferasUnicas(
  projetos: ProjetoLei[]
): {titulo: string; value: string}[] {
    const esferas = projetos.map(projeto => projeto.parlamentares[0].esfera);
  const esferasUnicas = Array.from(new Set(esferas));
  return esferasUnicas.map(esfera => ({
    titulo: esfera,
    value: esfera.toLowerCase()
  }));
}

function obterEstadosUnicos(
  projetos: ProjetoLei[]
): { titulo: string; value: string }[] {
  const estados = projetos.map(projeto => projeto.parlamentares[0].estado);
  const estadosUnicos = Array.from(new Set(estados));
  return estadosUnicos.map(estado => ({
    titulo: estado,
    value: estado.toLowerCase()
  }));
}

function obterPautasUnicas(
  projetos: ProjetoLei[]
): { titulo: string; value: string }[] {
  const pautas = projetos.map(projeto => projeto.pauta);
  const pautasUnicas = Array.from(new Set(pautas));
  return pautasUnicas.map(pauta => ({
    titulo: pauta,
    value: pauta.toLowerCase()
  }));
}

function obterGeneroUnico (
  parlamentares: ProjetoLei[]
): { titulo: string; value: string }[] {
  const generos = parlamentares.map(parlamentar => parlamentar.parlamentares[0].genero);
  const generosUnicos = Array.from(new Set(generos));
  return generosUnicos.map(genero => ({
    titulo: genero,
    value: genero.toLowerCase()
  }));
}

function obterPartidosUnicos(
  projetos: ProjetoLei[]
): { titulo: string; value: string }[] {
  const partidos = projetos.flatMap(projeto =>
    projeto.parlamentares.map(parlamentar => parlamentar.partido)
  );
  const partidosUnicos = Array.from(new Set(partidos));
  return partidosUnicos.map(partido => ({
    titulo: partido,
    value: partido.toLowerCase()
  }));
}

function obterIdeologiasUnica(
  projetos: ProjetoLei[]
): { titulo: string; value: string }[] {
  const ideologias = projetos.flatMap(projeto =>
    projeto.parlamentares.map(parlamentar => parlamentar.ideologia)
  );
  const ideologiasUnicas = Array.from(new Set(ideologias));
  return ideologiasUnicas.map(ideologia => ({
    titulo: ideologia,
    value: ideologia.toLowerCase()
  }));
}

function obterProfissoesUnicas(
  projetos: ProjetoLei[]
): {titulo: string; value: string}[] {
 const profissoes = projetos.map(projeto => projeto.parlamentares[0].profissao);
 const profissoesUnicas = Array.from(new Set(profissoes));
 return profissoesUnicas.map(profissao => ({
  titulo: profissao,
  value: profissao.toLowerCase()
  
 }));
 
}

export {
  contarProjetosPorAno,
  contarPautasPorAno,
  obterProfissoesUnicas,
  obterIdeologiasUnica,
  obterPartidosUnicos,
  obterGeneroUnico,
  obterEsferasUnicas,
  obterAnosUnicos,
  obterEstadosUnicos,
  obterPautasUnicas,
  contarGeneroPorIdeologia,
  contarReligiaoPorEtnia,
  contarPropostasPorParlamentar
};
