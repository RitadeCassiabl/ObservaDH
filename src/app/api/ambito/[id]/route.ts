import { AtualizarAmbitoController } from "@/lib/api/controllers/ambito/atualizar-ambito-controller";
import { BuscarAmbitoController } from "@/lib/api/controllers/ambito/buscar-ambito-controller";
import { DeletarAmbitoController } from "@/lib/api/controllers/ambito/deletar-ambito-controller";
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
        "Estão faltando informação para a busca do âmbito"
      );
      return NextResponse.json({ resposta }, { status: 400 });
    }

    const { nome } = await request.json();

    const controller = new AtualizarAmbitoController();

    const resposta = await controller.executar(id, nome);

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
        "Está faltando informação para a busca do âmbito"
      );
      return NextResponse.json({ resposta }, { status: 400 });
    }

    const controller = new DeletarAmbitoController();

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
        "Estão faltando informação para a busca do âmbito"
      );
      return NextResponse.json({ resposta }, { status: 400 });
    }

    const controller = new BuscarAmbitoController();

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
