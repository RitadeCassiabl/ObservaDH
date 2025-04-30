import { AtualizarProjetoController } from "@/lib/api/controllers/projeto/atualizar-projeto-controller";
import { BuscarProjetoController } from "@/lib/api/controllers/projeto/buscar-projeto-controller";
import { DeletarProjetoController } from "@/lib/api/controllers/projeto/deletar-projeto-controller";
import { RespostaApi } from "@/types/resposta-api";
import { NextResponse } from "next/server";

export async function PATCH(
  request: Request,
  { params }: { params: { id?: string } }
) {
  try {
    const { id } = params;

    if (!id) {
      const resposta = new RespostaApi(
        false,
        "Está faltando informação para a busca do Projeto de lei"
      );
      return NextResponse.json({ resposta }, { status: 400 });
    }

    const { ano, numero_pl, pauta, justificativa, ementa, ambitoId, ambito } =
      await request.json();

    const controller = new AtualizarProjetoController();

    const resposta = await controller.executar(
      id,
      ano,
      numero_pl,
      pauta,
      justificativa,
      ementa,
      ambitoId,
      ambito
    );

    return NextResponse.json(
      { resposta },
      { status: resposta.sucesso ? 200 : 400 }
    );
  } catch (error) {
    const resposta = new RespostaApi(false, "erro interno", error);
    return NextResponse.json({ resposta }, { status: 500 });
  }
}

export async function DELETE({ params }: { params: { id?: string } }) {
  try {
    const { id } = params;

    if (!id) {
      const resposta = new RespostaApi(
        false,
        "Está faltando informação para a busca do Projeto de lei"
      );
      return NextResponse.json({ resposta }, { status: 400 });
    }

    const controller = new DeletarProjetoController();

    const resposta = await controller.executar(id);

    return NextResponse.json(
      { resposta },
      { status: resposta.sucesso ? 200 : 400 }
    );
  } catch (error) {
    const respostaApi = new RespostaApi(false, "erro interno", error);
    return NextResponse.json({ respostaApi }, { status: 500 });
  }
}

export async function GET({ params }: { params: { id?: string } }) {
  try {
    const { id } = params;
    if (!id) {
      const resposta = new RespostaApi(
        false,
        "Está faltando informação para a busca do Projeto de lei"
      );
      return NextResponse.json({ resposta }, { status: 400 });
    }

    const controller = new BuscarProjetoController();

    const resposta = await controller.executar(id);

    return NextResponse.json(
      { resposta },
      { status: resposta.sucesso ? 200 : 404 }
    );
  } catch (error) {
    const respostaApi = new RespostaApi(false, "erro interno", error);
    return NextResponse.json({ respostaApi }, { status: 500 });
  }
}
