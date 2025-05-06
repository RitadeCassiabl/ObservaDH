//TODO: modificar ao implementar projetos
class Pauta {
    id?: string;
    nome: string;
    projetos?: string[];

    constructor(
        nome: string,
        projetos?: string[],
        id?: string
    ) {
        this.nome = nome;
        this.projetos = projetos;
        this.id = id;
    }
}

export { Pauta }