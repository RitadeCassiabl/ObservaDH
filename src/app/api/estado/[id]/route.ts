import { AtualizarEstadoController } from "@/lib/api/controllers/estado/atualizar-estado-controller";
import { BuscarEstadoController } from "@/lib/api/controllers/estado/buscar-estado-controller";
import { DeletarEstadoController } from "@/lib/api/controllers/estado/deletar-estado-controller";
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
        "Estão faltando informações para a busca do estado"
      );
      return NextResponse.json({ resposta }, { status: 400 });
    }

    const { nome } = await request.json();

    const controller = new AtualizarEstadoController();

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
        "Estão faltando informações para a busca do estado"
      );
      return NextResponse.json({ resposta }, { status: 400 });
    }

    const controller = new DeletarEstadoController();

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
        "Estão faltando informações para a busca do estado"
      );
      return NextResponse.json({ resposta }, { status: 400 });
    }

    const controller = new BuscarEstadoController();

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
