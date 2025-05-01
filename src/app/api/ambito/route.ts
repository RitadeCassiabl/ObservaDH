import { CriarAmbitoController } from "@/lib/api/controllers/ambito/criar-ambito-controller";
import { ListarAmbitoController } from "@/lib/api/controllers/ambito/listar-ambito-controller";
import { RespostaApi } from "@/types/resposta-api";
import { NextResponse } from "next/server";


export async function POST(request: Request) {
  try {
    const { nome } = await request.json();

    if (!nome) {
      const respostaApi = new RespostaApi(
        false,
        "Estão faltando infomações para a criação do âmbito"
      );

      return NextResponse.json(
        { respostaApi },
        { status: 400 }
      ); 

    } else {
      const controller = new CriarAmbitoController();

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
    const controller = new ListarAmbitoController()
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