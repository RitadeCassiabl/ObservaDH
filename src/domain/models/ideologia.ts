import { SerializacaoDesserializacao } from "./serializacao-desserializacao";

class Ideologia {
  id?: string;
  nome: string;
  projetos?: string[];

  constructor({
    id,
    nome,
    projetos
  }: {
    id?: string;
    nome: string;
    projetos?: string[];
  }) {
    this.id = id;
    this.nome = nome;
    this.projetos = projetos;
  }

  serializarIdeologia(ideologia: Ideologia): string {
    return SerializacaoDesserializacao.serializar(ideologia) as string;
  }

  desserializarIdeologia(text: string): Ideologia {
    return SerializacaoDesserializacao.desserializar(text) as Ideologia;
  }
}

export { Ideologia };
