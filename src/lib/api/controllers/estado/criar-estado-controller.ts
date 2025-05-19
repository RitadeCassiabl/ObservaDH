import { BuscarEstadoService } from "../../service/estado/buscar-estado-service";
import { CriarEstadoService } from "../../service/estado/criar-estado-service";

import { Estado } from "@/domain/models/estado";
import { RespostaApi } from "@/domain/models/resposta-api";

export class CriarEstadoController {
	async executar({ sigla, nome }: { sigla: string; nome: string }) {
		if (!nome || !sigla) {
			return new RespostaApi({
				sucesso: false,
				mensagem: "Estão faltando informações para criar o estado",
			});
		}

		const serviceAuxiliar = new BuscarEstadoService();

		const existe = await serviceAuxiliar.buscarPorNome(nome);

		if (existe) {
			return new RespostaApi({
				sucesso: false,
				mensagem: "O estado já existe",
			});
		}

		const service = new CriarEstadoService();

		const estado = new Estado({ nome: nome, sigla: sigla });

		const resposta = await service.executar({ estado: estado });

		if (resposta) {
			return new RespostaApi({
				sucesso: true,
				mensagem: "O estado foi criado com sucesso",
				dados: resposta,
			});
		} else {
			return new RespostaApi({
				sucesso: false,
				mensagem: "Houve algum problema na criação do estado",
			});
		}
	}
}
