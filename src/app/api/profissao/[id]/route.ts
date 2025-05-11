import { DeletarProfissaoController } from "@/lib/api/controllers/profissao/deletar-profissao-controller";
import { BuscarProfissaoController } from "@/lib/api/controllers/profissao/buscar-profissao-controller";
import { AtualizarProfissaoController } from "@/lib/api/controllers/profissao/atualizar-profissao-controller";
import { RespostaApi } from "@/domain/models/resposta-api";
import { NextResponse } from "next/server";

export async function DELETE(
	_request: Request,
	{ params }: { params: { id?: string } }
) {
	const { id } = params;

	if (!id) {
		const respostaApi = new RespostaApi({
			sucesso: false,
			mensagem: "Estão faltando informações para deletar a profissão",
		});
		return NextResponse.json({
			respostaApi,
			status: 400,
		});
	}

	try {
		const controller = new DeletarProfissaoController();
		const resposta = await controller.executar(id);

		if (!resposta.sucesso) {
			return NextResponse.json({ resposta }, { status: 400 });
		}

		return NextResponse.json(
			{ resposta },
			{
				status: resposta.sucesso ? 200 : 400,
			}
		);
	} catch (error) {
		const respostaApi = new RespostaApi({
			sucesso: false,
			mensagem: "Ocorreu um erro inesperado",
			dados: error,
		});

		return NextResponse.json({ respostaApi }, { status: 500 });
	}
}

export async function GET(
	request: Request,
	{ params }: { params: { id?: string } }
) {
	const { id } = params;

	if (!id) {
		const resposta = new RespostaApi({
			sucesso: false,
			mensagem: "O id da profissão não foi informado",
		});

		return NextResponse.json({ resposta }, { status: 400 });
	}

	try {
		const controller = new BuscarProfissaoController();
		const resposta = await controller.executar(id);

		return NextResponse.json(
			{ resposta },
			{
				status: resposta.sucesso ? 200 : 400,
			}
		);
	} catch (error) {
		const resposta = new RespostaApi({
			sucesso: false,
			mensagem: "Erro interno",
			dados: error,
		});

		return NextResponse.json({ resposta }, { status: 500 });
	}
}

export async function PATCH(
	request: Request,
	{ params }: { params: { id?: string } }
) {
	const { id } = params;
	const body = await request.json();
	const nome = body?.nome;

	if (!id) {
		const respostaApi = new RespostaApi({
			sucesso: false,
			mensagem: "O id da profissão não foi informado",
		});
		return NextResponse.json({
			respostaApi,
			status: 400,
		});
	}

	try {
		const controller = new AtualizarProfissaoController();
		const resposta = await controller.executar(id, nome);

		return NextResponse.json(
			{ resposta },
			{
				status: resposta.sucesso ? 200 : 400,
			}
		);
	} catch (error) {
		const respostaApi = new RespostaApi({
			sucesso: false,
			mensagem: "Erro interno",
			dados: error,
		});

		return NextResponse.json({ respostaApi }, { status: 500 });
	}
}
