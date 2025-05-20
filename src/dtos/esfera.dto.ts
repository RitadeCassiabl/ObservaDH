import z from "zod";

export interface EsferaResponseDto {
	id: string;
	nome: string;
}

export interface CreateEsferaDto {
	nome: string;
}

export const CreateEsferaSchema = {
	nome: z.string().min(5, "Nome precisa ter ao menos 5 caracteres")
};
