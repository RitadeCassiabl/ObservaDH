import { parlamentar } from "./parlamentar";

export type ProjetoLei = {
    id: string;
    ano: string;
    numero_pl: string;
    pauta: string;
    parlamentares: parlamentar[];
    ementa: string;
    justificativa: string;
    violacoes: string[];
    ideologia: string[];
};