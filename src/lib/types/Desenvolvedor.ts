import { LinkType } from "./link-type";

export type Desenvolvedor = {
    nome: string;
    foto: string;
    funcao: string;
    links: LinkType[]
    bio: string;
}