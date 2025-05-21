/* eslint-disable @typescript-eslint/no-explicit-any */
import { z } from "zod";
export interface CreateEstadoDto {
	nome: string;
	sigla: string;
}

export const CreateEstadoSchema = z.object({
	nome: z.string().min(3, "Nome precisa ter ao menos 3 caracteres"),
	sigla: z.string().length(2, "Sigla deve ter exatamente 2 caracteres"),
});

export interface ResponseEstadoDto {
	id: string;
	nome: string;
	sigla: string;
	politico?: any[];
}

export interface UpdateEstadoDto {
	id: string;
	nome?: string;
	sigla?: string;
}
export const UpdateEstadoSchema = z.object({
	id: z.string().uuid("ID inválido"),
	nome: z.string().min(3, "Nome precisa ter ao menos 3 caracteres"),
	sigla: z.string().length(2, "Sigla deve ter exatamente 2 caracteres"),
});

export interface DeleteEstadoDto {
	id: string;
}

export interface ResponseDeleteEstadoDto {
	sucesso: boolean;
}

export interface SearchEstadoDto {
	id?: string;
	nome?: string;
	sigla?: string;
}
