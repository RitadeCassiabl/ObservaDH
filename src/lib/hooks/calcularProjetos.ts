import { ProjetoLei } from "../types/projetos";

function pegarAno(data: ProjetoLei[]) {
  const anosContagem: Record<string, number> = {};

  data.forEach(item => {
    anosContagem[item.ano] = (anosContagem[item.ano] || 0) + 1;
  });

  return Object.entries(anosContagem).map(([year, projetos]) => ({
    year,
    projetos
  }));
}

function pegarPautas(data: ProjetoLei[]) {
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
    year: ano,
    linguagensNeutra: pautas["Linguagem Neutra"] || 0,
    atletasTrans: pautas["Atletas Trans"] || 0,
    banheirosMultigenero: pautas["Banheiros Multigênero"] || 0,
    propagandaLGBT: pautas["Propaganda LGBT"] || 0
  }));
}


// ! - - - - - - - - - - - - - - - - - - - - - - - - - - - - - !

function obterAnos(
  projetos: ProjetoLei[]
): { titulo: string; value: string }[] {
  const anos = projetos.map(projeto => projeto.ano);
  const anosUnicos = Array.from(new Set(anos));
  return anosUnicos.map(ano => ({
    titulo: ano,
    value: ano.toLowerCase()
  }));
}

function obterEstados(
  projetos: ProjetoLei[]
): { titulo: string; value: string }[] {
  const estados = projetos.map(projeto => projeto.parlamentares[0].estado);
  const estadosUnicos = Array.from(new Set(estados));
  return estadosUnicos.map(estado => ({
    titulo: estado,
    value: estado.toLowerCase()
  }));
}

function obterPautas(
  projetos: ProjetoLei[]
): { titulo: string; value: string }[] {
  const pautas = projetos.map(projeto => projeto.pauta);
  const pautasUnicas = Array.from(new Set(pautas));
  return pautasUnicas.map(pauta => ({
    titulo: pauta,
    value: pauta.toLowerCase()
  }));
}
export { pegarAno, pegarPautas, obterAnos, obterEstados, obterPautas };
