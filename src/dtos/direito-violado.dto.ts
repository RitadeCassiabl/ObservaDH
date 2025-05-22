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

export interface UpdateDireitoVioladoDTO {
	id: string;
	nome: string;
	sigla: string;
	descricao: string;
}

export interface DeleteDireitoViladoDTO {
	id: string;
}

export interface ResponseDeleteDireitoVioladoDTO {
	sucesso: boolean;
}

export interface SearchDireitoVioladoDTO {
	id?: string;
	nome?: string;
}
