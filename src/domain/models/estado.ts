import { SerializacaoDesserializacao } from "./serializacao-desserializacao";

class Estado {
	id?: string;
	nome: string;
	politicos?: string[];

	constructor({
		id,
		nome,
		politicos,
	}: {
		id?: string;
		nome: string;
		politicos?: string[];
	}) {
		this.id = id;
		this.nome = nome;
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
