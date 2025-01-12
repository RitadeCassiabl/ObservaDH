export type LinkType = {
    site: string;
    imagem: string;
    link: string;
}

export type Desenvolvedor = {
    nome: string;
    foto: string;
    funcao: string;
    links: LinkType[]
    bio: string;
}