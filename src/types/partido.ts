class Partido {
    id?: string;
    nome: string;
    sigla: string;
    projetos?: string[];
    politicos?: string[];

    constructor(
        nome: string,
        sigla: string,
        politicos?: string[],
        id?: string,
        projetos?: string[]
    ) {
        this.id = id;
        this.nome = nome;
        this.sigla = sigla;
        this.politicos = politicos;
        this.projetos = projetos;
    }
}

export { Partido };