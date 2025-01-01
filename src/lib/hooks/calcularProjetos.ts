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
export { pegarAno, obterAnos, obterEstados, obterPautas };
