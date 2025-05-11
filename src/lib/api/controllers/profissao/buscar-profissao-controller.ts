import { RespostaApi } from "@/domain/models/resposta-api";
import { BuscarProfissaoService } from "../../service/profissao/buscar-profissao-service";

export class BuscarProfissaoController {
	async executar(id: string) {
		const service = new BuscarProfissaoService();

		const resposta = await service.buscarPorId(id);

		if (resposta) {
			return new RespostaApi({
				sucesso: true,
				mensagem: "Profissão encontrada com sucesso",
				dados: resposta,
			});
		} else {
			return new RespostaApi({
				sucesso: false,
				mensagem: "A profissão não foi encontrada",
			});
		}
	}
}
