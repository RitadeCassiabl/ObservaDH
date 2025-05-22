/* eslint-disable @typescript-eslint/no-explicit-any */

export interface CreateProjetoDTO {
	ano: string;
	ementa: string;
	pautaId: string;
	esferaId: string;
	numeroPl: string;
	justificativa: string;
	direitosVioladosIds?: string[];
	ideologiasIds?: string[];
	partidosIds?: string[];
	autoresIds?: string[];
}

export interface ResponseProjetoDTO {
	id: string;
	ano: string;
	ementa: string;
	pautaId: string;
	esferaId: string;
	numeroPl: string;
	justificativa: string;
	esfera?: any;
	pauta?: any;
	direitosViolados?: any[];
	ideologias?: any[];
	partidos?: any[];
	autores?: any[];
}

export interface UpdateProjetoDTO {
	id: string;
	ano?: string;
	ementa?: string;
	pautaId?: string;
	esferaId?: string;
	numeroPl?: string;
	justificativa?: string;
	direitosVioladosIds?: string[];
	ideologiasIds?: string[];
	partidosIds?: string[];
	autoresIds?: string[];
}

export interface DeleteProjetoDTO {
	id: string;
}

export interface ResponseDeleteProjetoDTO {
	sucesso: boolean;
}

export interface SearchProjetoDTO {
	id?: string;
	ano?: string;
	ementa?: string;
	pautaId?: string;
	esferaId?: string;
	numeroPl?: string;
}
