import { ProjetoLei } from "@/domain/interfaces/projeto-lei";

function obterAnosUnicos({
	projetos,
}: {
	projetos: ProjetoLei[];
}): { titulo: string; value: string }[] {
	const anos = projetos.map((projeto) => projeto.ano);
	const anosUnicos = Array.from(new Set(anos));
	return anosUnicos.map((ano) => ({
		titulo: ano,
		value: ano.toLowerCase(),
	}));
}

export default obterAnosUnicos;
