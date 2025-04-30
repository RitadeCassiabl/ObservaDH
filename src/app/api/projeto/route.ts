import { CriarProjetoController } from "@/lib/api/controllers/projeto/criar-projeto-controller";
import { ListarProjetoController } from "@/lib/api/controllers/projeto/listar-projeto-controller";
import { RespostaApi } from "@/types/resposta-api";
import { NextResponse } from "next/server";


export async function POST(request: Request) {
  try {
    const { ano,
      numero_pl,
      pauta,
      justificativa,
      ementa,
      ambitoId,
      ambito } = await request.json();

    if (!ano ||
      !numero_pl ||
      !pauta ||
      !justificativa ||
      !ementa ||
      !ambitoId ||
      !ambito) {
      const respostaApi = new RespostaApi(
        false,
        "Estão faltando infomações para a criação do Projeto de lei"
      );

      return NextResponse.json(
        { respostaApi },
        { status: 400 }
      ); 

    } else {
      const controller = new CriarProjetoController();

      const resposta = await controller.executar(ano,
        numero_pl,
        pauta,
        justificativa,
        ementa,
        ambitoId,
        ambito);

      return NextResponse.json(
        { resposta },
        { status: resposta.sucesso ? 200 : 400 }
      );

    }
  } catch (error) {

    const respostaApi = new RespostaApi(false, "erro interno", error);

    return NextResponse.json(
      { respostaApi },
      { status: 500 }
    );
  }
}


export async function GET() {
  try {
    const controller = new ListarProjetoController()
    const resposta = await controller.executar()

    if (!resposta.sucesso) {
      return NextResponse.json({
        resposta,
        status: 400
      })
    }
    return NextResponse.json(
      { resposta },
      { status: 200 }
    )
  } catch (error) {
    const respostaApi = new RespostaApi(false, "erro interno", error);
    return NextResponse.json(
      { respostaApi },
      { status: 500 }
    );
  }
}
