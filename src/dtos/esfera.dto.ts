/* eslint-disable @typescript-eslint/no-explicit-any */
import z from "zod";

export interface CreateEsferaDTO {
	nome: string;
}

export const CreateEsferaSchema = z.object({
	nome: z.string().min(5, "Nome precisa ter ao menos 5 caracteres"),
});

export interface ResponseEsferaDTO {
	id: string;
	nome: string;
	projetos?: any;
	politicos?: any;
}

export interface UpdateEsferaDTO {
	id: string;
	nome: string;
}

export const UpdateEsferaSchema = z.object({
	id: z.string().uuid("ID inválido"),
	nome: z.string().min(5, "Nome precisa ter ao menos 5 caracteres"),
});

export interface DeleteEsferaDTO {
	id: string;
}
export interface ResponseDeleteEsferaDTO {
	sucesso: boolean;
}
export interface SearchEsferaDTO {
	id?: string;
	nome?: string;
}
