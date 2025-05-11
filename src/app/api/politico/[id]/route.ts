import { AtualizarPoliticoController } from "@/lib/api/controllers/politico/atualizar-politico-controller";
import { BuscarPoliticoController } from "@/lib/api/controllers/politico/buscar-politico-controller";
import { DeletarPoliticoController } from "@/lib/api/controllers/politico/deletar-politico-controller";
import { RespostaApi } from "@/types/resposta-api";
import { NextResponse } from "next/server";

export async function PATCH(
	request: Request,
	{ params }: { params: { id?: string } }
) {
	try {
		const { id } = params;

		const {
			nome,
			sexo,
			raca,
			religiao,
			estado_id,
			partido_id,
			ideologia,
			data_nascimento,
			foto,
			profissoes,
			projetos,
		} = await request.json();

		if (!id) {
			const resposta = new RespostaApi(false, "Id não informado");
			return NextResponse.json(resposta, { status: 400 });
		}

		const controller = new AtualizarPoliticoController();

		const resposta = await controller.executar(
			id,
			nome,
			sexo,
			raca,
			religiao,
			estado_id,
			partido_id,
			ideologia,
			data_nascimento,
			foto,
			profissoes,
			projetos
		);

		return NextResponse.json(
			{ resposta },
			{ status: resposta.sucesso ? 200 : 400 }
		);
	} catch (error) {
		const respostaApi = new RespostaApi(false, "erro interno", error);

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

export async function GET({ params }: { params: { id?: string } }) {
	try {
		const { id } = params;

		if (!id) {
			const respostaApi = new RespostaApi(false, "id não informado");
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
		const respostaApi = new RespostaApi(false, "erro interno", error);

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

export async function DELETE({ params }: { params: { id?: string } }) {
	try {
		const { id } = params;

		if (!id) {
			const respostaApi = new RespostaApi(false, "id não informado");
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
		const respostaApi = new RespostaApi(false, "erro interno", error);

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
