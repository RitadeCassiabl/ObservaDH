import { RespostaApi } from "@/domain/models/resposta-api";
import { ListarPautaService } from "../../service/pauta/listar-pauta-service";

export class ListarPautaController {
	async executar() {
		const service = new ListarPautaService();

		const resposta = await service.executar();

		if (resposta) {
			return new RespostaApi({
				sucesso: true,
				mensagem: `${resposta.length} pauta(s) foram encontrados`,
				dados: resposta,
			});
		} else {
			return new RespostaApi({
				sucesso: false,
				mensagem: "Nenhum pauta foi encontrado.",
			});
		}
	}
}
