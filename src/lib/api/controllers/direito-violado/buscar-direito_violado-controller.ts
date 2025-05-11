import { BuscarDireitoVioladoService } from "../../service/direito-violado/buscar-direito_violado-service";

import { RespostaApi } from "@/domain/models/resposta-api";

export class BuscarDireitoVioladoController {
	async executar(id: string) {
		if (!id) {
			return new RespostaApi({
				sucesso: false,
				mensagem: "Estão faltando informações para a busca do direito violado",
			});
		}

		const service = new BuscarDireitoVioladoService();

		const resposta = await service.buscarPorId(id);

		if (resposta) {
			return new RespostaApi({
				sucesso: true,
				mensagem: "O direito violado foi encontrado com sucesso",
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
