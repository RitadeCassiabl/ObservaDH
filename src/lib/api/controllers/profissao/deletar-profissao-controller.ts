import { BuscarProfissaoService } from "../../service/profissao/buscar-profissao-service";
import { DeletarProfissaoService } from "../../service/profissao/deletar-profissao-service";

import { RespostaApi } from "@/domain/models/resposta-api";

export class DeletarProfissaoController {
	async executar({ id }: { id: string }) {
		if (!id) {
			return new RespostaApi({
				sucesso: false,
				mensagem: "Faltam informações para deletar a profissão",
			});
		}

		const serviceAuxiliar = new BuscarProfissaoService();

		const existe = await serviceAuxiliar.buscarPorId(id);

		if (!existe) {
			return new RespostaApi({
				sucesso: false,
				mensagem: "A profissão já não existe",
			});
		}

		const service = new DeletarProfissaoService();

		const resposta = await service.executar({ id: id });

		if (resposta) {
			return new RespostaApi({
				sucesso: true,
				mensagem: "A profissão foi deletada com sucesso",
				dados: resposta,
			});
		} else {
			return new RespostaApi({
				sucesso: false,
				mensagem: "Houve algum erro para deletar o profissão",
			});
		}
	}
}
