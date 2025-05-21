/* eslint-disable @typescript-eslint/no-explicit-any */
export interface CreateDireitoVioladoDTO {
	nome: string; // unico
	sigla: string;
	descricao: string;
}

export interface ResponseDireitoVioladoDTO {
	id: string;
	nome: string;
	sigla: string;
	descricao: string;
	projetos?: any[];
}

export interface UpdateDireitoViolado {

}
