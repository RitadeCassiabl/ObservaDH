import { SerializacaoDesserializacao } from "./serializacao-desserializacao";

class DireitoViolado {
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

  serializarDireitoViolado(direito: DireitoViolado): string {
    return SerializacaoDesserializacao.serializar(direito) as string;
  }

  desserializarDireitoViolado(text: string): DireitoViolado {
    return SerializacaoDesserializacao.desserializar(text) as DireitoViolado;
  }
}

export { DireitoViolado };
