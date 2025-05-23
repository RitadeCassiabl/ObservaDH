import { AtualizarUserService } from "../../service/user/atualizar-user-service";

import { RespostaApi } from "@/domain/models/resposta-api";
import { User } from "@/domain/models/user";

export class AtualizarUserController {
	async executar({
		id,
		name,
		email,
		passwordHash,
		role,
	}: {
		id: string;
		name: string;
		email: string;
		passwordHash: string;
		role: string;
	}) {
		if (!id || !name || !email || !passwordHash || !role) {
			const respostaApi = new RespostaApi({
				sucesso: false,
				mensagem: "Estão faltando informações para a atualização do usuário",
			});

			return respostaApi;
		}

		const lowRole = role.toLowerCase();
		if (lowRole !== "admin" && lowRole !== "editor") {
			return new RespostaApi({
				sucesso: false,
				mensagem: "O papel do usuário não existe",
			});
		}

		const service = new AtualizarUserService();

		const user = new User({
			id: id,
			name: name,
			email: email,
			passwordHash: passwordHash,
			role: role,
		});

		const resposta = await service.executar({ user: user });

		if (resposta) {
			return new RespostaApi({
				sucesso: true,
				mensagem: "Usuário atualizado com sucesso",
				dados: resposta,
			});
		} else {
			return new RespostaApi({
				sucesso: false,
				mensagem: "Houve algum problema na atualização do usuário",
			});
		}
	}
}
