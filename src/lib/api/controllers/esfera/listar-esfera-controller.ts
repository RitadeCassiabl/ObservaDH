import { RespostaApi } from "@/domain/models/resposta-api";
import { ListarEsferaService } from "../../service/esfera/listar-esfera-service";

export class ListarEsferaController {
	async executar() {
		const service = new ListarEsferaService();

		const resposta = await service.executar();

		if (resposta) {
			return new RespostaApi({
				sucesso: true,
				mensagem: `${resposta.length} esfera(s) foram encontradas`,
				dados: resposta,
			});
		} else {
			return new RespostaApi({
				sucesso: false,
				mensagem: "Nenhuma esfera foi encontrada",
			});
		}
	}
}
