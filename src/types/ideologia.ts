import { SerializacaoDesserializacao } from "./serializacao-desserializacao";

class Ideologia {
  id?: string;
  nome: string;
  projetos?: string[];

  constructor(nome: string, projetos?: string[], id?: string) {
    this.nome = nome;
    this.projetos = projetos;
    this.id = id;
  }

  serializarIdeologia(ideologia: Ideologia): string {
    return SerializacaoDesserializacao.serializar(ideologia) as string;
  }

  desserializarIdeologia(text: string): Ideologia {
    return SerializacaoDesserializacao.desserializar(text) as Ideologia;
  }
}

export { Ideologia };