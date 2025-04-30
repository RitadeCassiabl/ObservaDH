//TODO: modificações necessárias

import { SerializacaoDesserializacao } from "./serializacao-desserializacao";

class Projeto {
  id?: string;
  ano?: string;
  numero_pl?: string;
  pauta?: string;
  justificativa?: string;
  ementa?: string;
  ambitoId?: string;
  ambito?: string;
  autores?: string[];
  partidos?: string[];
  direitosViolados?: string[];
  ideologias?: string[];

  constructor(
    id?: string,
    ano?: string,
    numero_pl?: string,
    pauta?: string,
    justificativa?: string,
    ementa?: string,
    ambitoId?: string,
    ambito?: string,
    autores?: string[],
    partidos?: string[],
    direitosViolados?: string[],
    ideologias?: string[]
  ) {
    this.id = id;
    this.ano = ano;
    this.numero_pl = numero_pl;
    this.pauta = pauta;
    this.justificativa = justificativa;
    this.ementa = ementa;
    this.ambitoId = ambitoId;
    this.ambito = ambito;
    this.autores = autores;
    this.partidos = partidos;
    this.direitosViolados = direitosViolados;
    this.ideologias = ideologias;
  }

  serializarProjeto(projeto: Projeto ): string {
    return SerializacaoDesserializacao.serializar(projeto) as string;
  }

  desserializarProjeto(text: string): Projeto {
    return SerializacaoDesserializacao.desserializar(text) as Projeto;
  }
}

export { Projeto };