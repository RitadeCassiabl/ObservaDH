class Partido {
    id?: string;
    nome: string;
    codigo: string;
    projetos?: string[];
    politicos?: string[];

    constructor(
        nome: string,
        codigo: string,
        politicos?: string[],
        id?: string,
        projetos?: string[]
    ) {
        this.id = id;
        this.nome = nome;
        this.codigo = codigo;
        this.politicos = politicos;
        this.projetos = projetos;
    }
}

export { Partido };