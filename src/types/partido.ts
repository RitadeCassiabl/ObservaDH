class Partido {
    id?: number;
    nome: string;
    codigo: string;
    projetos?: string[];
    politicos?: string[];

    constructor(
        nome: string,
        codigo: string,
        politicos?: string[],
        id?: number,
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