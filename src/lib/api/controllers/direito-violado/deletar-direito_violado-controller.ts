import { RespostaApi } from "@/domain/models/resposta-api";
import { DeletarDireitoVioladoService } from "../../service/direito-violado/deletar-direito_violado-service";
import { BuscarDireitoVioladoService } from "../../service/direito-violado/buscar-direito_violado-service";

export class DeletarDireitoVioladoController {
	async executar(id: string) {
		if (!id) {
			return new RespostaApi({
				sucesso: false,
				mensagem: "Faltam informações para deletar o direito violado",
			});
		}

		const serviceAuxiliar = new BuscarDireitoVioladoService();

		const existe = await serviceAuxiliar.buscarPorId(id);

		if (!existe) {
			return new RespostaApi({
				sucesso: false,
				mensagem: "O direito violado já não existe",
			});
		}

		const service = new DeletarDireitoVioladoService();

		const resposta = await service.executar(id);

		if (resposta) {
			return new RespostaApi({
				sucesso: true,
				mensagem: "O direito violado foi deletado com sucesso",
			});
		} else {
			return new RespostaApi({
				sucesso: false,
				mensagem: "O direito violado não foi deletado por algum motivo",
			});
		}
	}
}
