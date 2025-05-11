import { RespostaApi } from "@/domain/models/resposta-api";
import { ListarIdeologiaService } from "../../service/ideologia/listar-ideologia-service";

export class ListarIdeologiaController {
	async executar() {
		const service = new ListarIdeologiaService();

		const resposta = await service.executar();

		if (resposta) {
			return new RespostaApi({
				sucesso: true,
				mensagem: `${resposta.length} ideologia(s) foram encontradas`,
				dados: resposta,
			});
		} else {
			return new RespostaApi({
				sucesso: false,
				mensagem: "Nenhuma ideologia foi encontrada",
			});
		}
	}
}
