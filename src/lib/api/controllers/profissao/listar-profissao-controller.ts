import { RespostaApi } from "@/domain/models/resposta-api";
import { ListarProfissoesService } from "../../service/profissao/listar-profissao-service";

export class ListarProfissoesController {
	async executar() {
		const service = new ListarProfissoesService();

		const resposta = await service.executar();

		if (resposta) {
			return new RespostaApi({
				sucesso: true,
				mensagem: `${resposta.length} profissão(ões) foram encontrada(s)`,
				dados: resposta,
			});
		} else {
			return new RespostaApi({
				sucesso: false,
				mensagem: "Nenhuma profissões encontradas",
			});
		}
	}
}
