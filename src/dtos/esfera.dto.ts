/* eslint-disable @typescript-eslint/no-explicit-any */
import z from "zod";

export interface CreateEsferaDto {
	nome: string;
}

export const CreateEsferaSchema = z.object({
	nome: z.string().min(5, "Nome precisa ter ao menos 5 caracteres"),
});

export interface ResponseEsferaDto {
	id: string;
	nome: string;
	projetos?: any;
	politicos?: any;
}

export interface UpdateEsferaDto {
	id: string;
	nome: string;
}

export const UpdateEsferaSchema = z.object({
	id: z.string().uuid("ID inválido"),
	nome: z.string().min(5, "Nome precisa ter ao menos 5 caracteres"),
});

export interface DeleteEsferaDto {
	id: string;
}
export interface ResponseDeleteEsferaDto {
	sucesso: boolean;
}
export interface SearchEsferaDto {
	id?: string;
	nome?: string;
}
