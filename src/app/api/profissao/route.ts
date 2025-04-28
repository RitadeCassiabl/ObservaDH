import { CriarProfissaoController } from "@/lib/api/controllers/profissao/criar-profissao-controller";
import { ListarProfissoesController } from "@/lib/api/controllers/profissao/listar-profissao-controller";
import { RespostaApi } from "@/types/resposta-api";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { nome } = await request.json();

    if (!nome) {
      const respostaApi = new RespostaApi(
        false,
        "Está faltando infomação para a criação da profissão"
      );

      return NextResponse.json(
        { respostaApi },
        { status: 400 }
      ); 

    } else {
      const controller = new CriarProfissaoController();

      const resposta = await controller.executar(nome);

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
    const controller = new ListarProfissoesController()
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