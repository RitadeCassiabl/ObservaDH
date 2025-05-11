import { NextResponse } from "next/server";

import { RespostaApi } from "@/domain/models/resposta-api";
import { CriarEstadoController } from "@/lib/api/controllers/estado/criar-estado-controller";
import { ListarEstadoController } from "@/lib/api/controllers/estado/listar-estado-controller";

export async function POST(request: Request) {
	try {
		const { nome } = await request.json();

		if (!nome) {
			const respostaApi = new RespostaApi({
				sucesso: false,
				mensagem: "Estão faltando infomações para a criação do estado",
			});

			return NextResponse.json({ respostaApi }, { status: 400 });
		} else {
			const controller = new CriarEstadoController();

			const resposta = await controller.executar(nome);

			return NextResponse.json(
				{ resposta },
				{ status: resposta.sucesso ? 200 : 400 }
			);
		}
	} catch (error) {
		const respostaApi = new RespostaApi({
			sucesso: false,
			mensagem: "Ocorreu um erro inesperado",
			dados: error,
		});

		return NextResponse.json({ respostaApi }, { status: 500 });
	}
}

export async function GET() {
	try {
		const controller = new ListarEstadoController();
		const resposta = await controller.executar();

		if (!resposta.sucesso) {
			return NextResponse.json({
				resposta,
				status: 400,
			});
		}
		return NextResponse.json({ resposta }, { status: 200 });
	} catch (error) {
		const respostaApi = new RespostaApi({
			sucesso: false,
			mensagem: "Ocorreu um erro inesperado",
			dados: error,
		});
		return NextResponse.json({ respostaApi }, { status: 500 });
	}
}
