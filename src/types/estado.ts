import { SerializacaoDesserializacao } from "./serializacao-desserializacao";

class Estado {
  id?: string;
  nome: string;
  politicos?: string[];

  constructor(nome: string, id?: string, politicos?: string[]) {
    this.nome = nome;
    this.id = id;
    this.politicos = politicos;
  }

  serializarEstado(estado: Estado): string {
    return SerializacaoDesserializacao.serializar(estado) as string;
  }

  desserializarEstado(text: string): Estado {
    return SerializacaoDesserializacao.desserializar(text) as Estado;
  }
}

export { Estado };
