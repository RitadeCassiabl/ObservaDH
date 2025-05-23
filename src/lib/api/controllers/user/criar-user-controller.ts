import { CriarUserService } from "../../service/user/criar-user-service";

import { RespostaApi } from "@/domain/models/resposta-api";
import { User } from "@/domain/models/user";

export class CriarUserController {
	async executar({
		name,
		email,
		passwordHash,
		role,
	}: {
		name: string;
		email: string;
		passwordHash: string;
		role: string;
	}) {
		if (!name || !email || !passwordHash || !role) {
			return new RespostaApi({
				sucesso: false,
				mensagem: "Falta informação para a criação do usuário",
			});
		}
		const lowRole = role.toLowerCase();
		if (lowRole !== "admin" && lowRole !== "editor") {
			return new RespostaApi({
				sucesso: false,
				mensagem: "O papel do usuário não existe",
			});
		}
		const user = new User({
			name: name,
			email: email,
			passwordHash: passwordHash,
			role: role,
		});

		const service = new CriarUserService();

		const resposta = await service.executar({ user: user });

		if (resposta) {
			return new RespostaApi({
				sucesso: true,
				mensagem: "Usuário criado",
				dados: resposta,
			});
		} else {
			return new RespostaApi({
				sucesso: false,
				mensagem: "Houve algum problema na criação do usuário",
			});
		}
	}
}
