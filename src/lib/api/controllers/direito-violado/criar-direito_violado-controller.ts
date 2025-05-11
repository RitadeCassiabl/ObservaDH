import { DireitoViolado } from "@/domain/models/direito-violado";
import { CriarDireitoVioladoService } from "../../service/direito-violado/criar-direito_violado-service";
import { RespostaApi } from "@/domain/models/resposta-api";
import { BuscarDireitoVioladoService } from "../../service/direito-violado/buscar-direito_violado-service";

export class CriarDireitoVioladoController {
	async executar(nome: string) {
		if (!nome) {
			return new RespostaApi({
				sucesso: false,
				mensagem: "Estão faltando infomações para a criação do direito violado",
			});
		}

		const serviceAuxiliar = new BuscarDireitoVioladoService();

		const existe = await serviceAuxiliar.buscarPorNome(nome);

		if (existe) {
			return new RespostaApi({
				sucesso: false,
				mensagem: "O direito violado já existe",
			});
		}

		const direitoViolado = new DireitoViolado({ nome: nome });

		const service = new CriarDireitoVioladoService();

		const resposta = await service.executar(direitoViolado);

		if (resposta) {
			return new RespostaApi({
				sucesso: true,
				mensagem: "Direito Violado criado com sucesso",
				dados: resposta,
			});
		} else {
			return new RespostaApi({
				sucesso: false,
				mensagem: "Houve algum problema na criação do direito violado",
			});
		}
	}
}
