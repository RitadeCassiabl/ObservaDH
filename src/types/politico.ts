class Politico {
	id?: string;
	nome: string;
	genero: string;
	raca: string;
	foto?: string;
	estado?: string;
	religiao: string;
	partido?: string;
	estadoId: string;
	ideologia: string;
	partidoId: string;
	profissaoId?: string;
	projetos?: string[];

	constructor({
		id,
		nome,
		genero,
		raca,
		foto,
		estado,
		partido,
		religiao,
		projetos,
		estadoId,
		partidoId,
		ideologia,
		profissaoId,
	}: {
		id?: string;
		nome: string;
		genero: string;
		raca: string;
		foto?: string;
		estado?: string;
		partido?: string;
		religiao: string;
		estadoId: string;
		partidoId: string;
		ideologia: string;
		projetos?: string[];
		profissaoId?: string;
	}) {
		this.id = id;
		this.nome = nome;
		this.genero = genero;
		this.raca = raca;
		this.foto = foto;
		this.estado = estado;
		this.partido = partido;
		this.religiao = religiao;
		this.projetos = projetos;
		this.estadoId = estadoId;
		this.profissaoId = profissaoId;
		this.ideologia = ideologia;
		this.partidoId = partidoId;
	}
}
export default Politico;
