import { RespostaApi } from "@/domain/models/resposta-api";
import { ListarDireitoVioladoService } from "../../service/direito-violado/listar-direito_violado_service";

export class ListarDireitoVioladoController {
	async executar() {
		const service = new ListarDireitoVioladoService();

		const resposta = await service.executar();

		if (resposta) {
			return new RespostaApi({
				sucesso: true,
				mensagem: `${resposta.length} direito(s) violado(s) foram encontrados`,
				dados: resposta,
			});
		} else {
			return new RespostaApi({
				sucesso: false,
				mensagem: "Nenhum direito violado foi encontrado",
			});
		}
	}
}
