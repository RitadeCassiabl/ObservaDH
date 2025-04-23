export type PartidoModel = {
    nome: string;
    sigla: string;
    propostas: string;
    url_imagem: string;
    parlamentares: string;
};

export class Partido {
    id?: string;
    nome: string;
    sigla: string;
    imagem: string;
    projetos?: string[];
    politicos?: string[];

    constructor(
        nome: string,
        sigla: string,
        imagem: string,
        id?: string,
        projetos?: string[],
        politicos?: string[]
    ) {
        this.nome = nome;
        this.sigla = sigla;
        this.imagem = imagem;
        this.id = id;
        this.projetos = projetos || [];
        this.politicos = politicos || [];
    }

}