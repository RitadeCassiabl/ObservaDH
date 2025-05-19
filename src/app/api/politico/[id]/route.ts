import { NextRequest, NextResponse } from "next/server";

import { RespostaApi } from "@/domain/models/resposta-api";
import { AtualizarPoliticoController } from "@/lib/api/controllers/politico/atualizar-politico-controller";
import { BuscarPoliticoController } from "@/lib/api/controllers/politico/buscar-politico-controller";
import { DeletarPoliticoController } from "@/lib/api/controllers/politico/deletar-politico-controller";

export async function PATCH(
	request: NextRequest,
	{ params }: { params: { id?: string } }
) {
	try {
		const { id } = params;

		const {
			nome,
			raca,
			foto,
			genero,
			projetos,
			religiao,
			ideologia,
			estado_id,
			partido_id,
			profissao_id,
		} = await request.json();

		if (!id) {
			const resposta = new RespostaApi({
				sucesso: false,
				mensagem: "Id não informado",
			});
			return NextResponse.json(resposta, { status: 400 });
		}

		const controller = new AtualizarPoliticoController();

		const resposta = await controller.executar({
			id: id,
			nome: nome,
			raca: raca,
			foto: foto,
			genero: genero,
			religiao: religiao,
			projetos: projetos,
			estadoId: estado_id,
			ideologia: ideologia,
			partidoId: partido_id,
			profissaoId: profissao_id,
		});

		return NextResponse.json(
			{ resposta },
			{ status: resposta.sucesso ? 200 : 400 }
		);
	} catch (error) {
		const respostaApi = new RespostaApi({
			sucesso: false,
			mensagem: "erro interno",
			dados: error,
		});

		return NextResponse.json(
			{
				respostaApi,
			},
			{
				status: 500,
			}
		);
	}
}

export async function GET(
	request: NextRequest,
	{ params }: { params: { id: string } }
) {
	try {
		const { id } = params;

		if (!id) {
			const respostaApi = new RespostaApi({
				sucesso: false,
				mensagem: "id não informado",
			});
			return NextResponse.json(
				{
					respostaApi,
				},
				{
					status: 400,
				}
			);
		}

		const controller = new BuscarPoliticoController();

		const resposta = await controller.executar(id);

		return NextResponse.json(
			{
				resposta,
			},
			{
				status: resposta.sucesso ? 200 : 400,
			}
		);
	} catch (error) {
		const respostaApi = new RespostaApi({
			sucesso: false,
			mensagem: "erro interno",
			dados: error,
		});

		return NextResponse.json(
			{
				respostaApi,
			},
			{
				status: 500,
			}
		);
	}
}

export async function DELETE(
	request: NextRequest,
	{ params }: { params: { id?: string } }
) {
	try {
		const { id } = params;

		if (!id) {
			const respostaApi = new RespostaApi({
				sucesso: false,
				mensagem: "id não informado",
			});
			return NextResponse.json(
				{
					respostaApi,
				},
				{
					status: 400,
				}
			);
		}

		const controller = new DeletarPoliticoController();

		const resposta = await controller.executar(id);

		return NextResponse.json(
			{
				resposta,
			},
			{
				status: resposta.sucesso ? 200 : 400,
			}
		);
	} catch (error) {
		const respostaApi = new RespostaApi({
			sucesso: false,
			mensagem: "erro interno",
			dados: error,
		});

		return NextResponse.json(
			{
				respostaApi,
			},
			{
				status: 500,
			}
		);
	}
}
