class Politico {
    id?: string;
    nome: string;
    sexo: string;
    raca: string;
    foto?: string;
    estado?: string;
    religiao: string;
    partido?: string;
    estadoId: string;
    ideologia: string;
    partidoId: string;
    projetos?: string[];
    dataNascimento: Date;
    profissoes?: string[];

    constructor(data: {
        nome: string,
        sexo: string,
        raca: string,
        religiao: string,
        estadoId: string,
        partidoId: string,
        ideologia: string,
        dataNascimento: Date,
        id?: string,
        foto?: string,
        estado?: string,
        partido?: string,
        projetos?: string[],
        profissoes?: string[]
    }) {
        this.id = data.id;
        this.nome = data.nome;
        this.foto = data.foto;
        this.sexo = data.sexo;
        this.raca = data.raca;
        this.estado = data.estado;
        this.partido = data.partido;
        this.projetos = data.projetos;
        this.estadoId = data.estadoId;
        this.religiao = data.religiao;
        this.ideologia = data.ideologia;
        this.partidoId = data.partidoId;
        this.profissoes = data.profissoes;
        this.dataNascimento = data.dataNascimento;
    }

}
export default Politico;