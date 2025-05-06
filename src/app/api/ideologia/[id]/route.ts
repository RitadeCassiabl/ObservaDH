import { AtualizarIdeologiaController } from "@/lib/api/controllers/ideologia/atualizar-ideologia-controller";
import { BuscarIdeologiaController } from "@/lib/api/controllers/ideologia/buscar-ideologia-controller";
import { DeletarIdeologiaController } from "@/lib/api/controllers/ideologia/deletar-ideologia-controller";
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
        "Estão faltando informações para a busca da ideologia"
      );
      return NextResponse.json({ resposta }, { status: 400 });
    }

    const { nome } = await request.json();

    const controller = new AtualizarIdeologiaController();

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

export async function DELETE(
  request: Request,
  { params }: { params: { id?: string } }
) {
  try {
    const { id } = params;

    if (!id) {
      const resposta = new RespostaApi(
        false,
        "Estão faltando informações para a busca da ideologia"
      );
      return NextResponse.json({ resposta }, { status: 400 });
    }

    const controller = new DeletarIdeologiaController();

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

export async function GET(
  request: Request,
  { params }: { params: { id?: string } }
) {
  try {
    const { id } = params;
    if (!id) {
      const resposta = new RespostaApi(
        false,
        "Estão faltando informações para a busca da ideologia"
      );
      return NextResponse.json({ resposta }, { status: 400 });
    }

    const controller = new BuscarIdeologiaController();

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
