import { NextResponse } from "next/server";

import { RespostaApi } from "@/domain/models/resposta-api";
import { CriarProjetoController } from "@/lib/api/controllers/projeto/criar-projeto-controller";
import { ListarProjetoController } from "@/lib/api/controllers/projeto/listar-projeto-controller";

export async function POST(request: Request) {
	try {
		const { ano, numero_pl, pauta_id, justificativa, ementa, esfera_id } =
			await request.json();

		if (
			!ano ||
			!numero_pl ||
			!pauta_id ||
			!justificativa ||
			!ementa ||
			!esfera_id
		) {
			const respostaApi = new RespostaApi({
				sucesso: false,
				mensagem: "Estão faltando infomações para a criação do projeto de lei",
			});

			return NextResponse.json({ respostaApi }, { status: 400 });
		} else {
			const controller = new CriarProjetoController();

			const resposta = await controller.executar({
				ano: ano,
				numeroPl: numero_pl,
				pautaId: pauta_id,
				justificativa: justificativa,
				ementa: ementa,
				esferaId: esfera_id,
			});

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
		const controller = new ListarProjetoController();
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
