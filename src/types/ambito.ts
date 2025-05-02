import { Projeto } from "./projeto";
import { SerializacaoDesserializacao } from "./serializacao-desserializacao";

class Ambito {
  id?: string;
  nome: string;
  projetos?: Projeto[];

  constructor(nome: string, projetos?: Projeto[], id?: string) {
    this.id = id;
    this.nome = nome;
    this.projetos = projetos;
  }

  serializarAmbito(ambito: Ambito): string {
    return SerializacaoDesserializacao.serializar(ambito) as string;
  }

  desserializarAmbito(text: string): Ambito {
    return SerializacaoDesserializacao.desserializar(text) as Ambito;
  }
}

export { Ambito };