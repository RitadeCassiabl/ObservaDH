import { SerializacaoDesserializacao } from "./serializacao-desserializacao";

class Esfera {
  id?: string;
  nome: string;
  projetos?: string[];

  constructor(nome: string, projetos?: string[], id?: string) {
    this.id = id;
    this.nome = nome;
    this.projetos = projetos;
  }

  serializarEsfera(esfera: Esfera): string {
    return SerializacaoDesserializacao.serializar(esfera) as string;
  }

  desserializarEsfera(text: string): Esfera {
    return SerializacaoDesserializacao.desserializar(text) as Esfera;
  }
}

export { Esfera };