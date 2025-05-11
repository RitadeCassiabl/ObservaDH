import { CriarIdeologiaController } from "@/lib/api/controllers/ideologia/criar-ideologia-controller";
import { ListarIdeologiaController } from "@/lib/api/controllers/ideologia/listar-ideologia-controller";
import { RespostaApi } from "@/domain/models/resposta-api";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { nome } = await request.json();

    if (!nome) {
      const respostaApi = new RespostaApi(
        {
          sucesso: false,
          mensagem: "Estão faltando infomações para a criação da ideologia"
        }
      );

      return NextResponse.json({ respostaApi }, { status: 400 });
    } else {
      const controller = new CriarIdeologiaController();

      const resposta = await controller.executar(nome);

      return NextResponse.json(
        { resposta },
        { status: resposta.sucesso ? 200 : 400 }
      );
    }
  } catch (error) {
    const respostaApi = new RespostaApi({ sucesso: false, mensagem: "Ocorreu um erro inesperado", dados: error });

    return NextResponse.json({ respostaApi }, { status: 500 });
  }
}

export async function GET() {
  try {
    const controller = new ListarIdeologiaController();
    const resposta = await controller.executar();

    if (!resposta.sucesso) {
      return NextResponse.json({
        resposta,
        status: 400,
      });
    }
    return NextResponse.json({ resposta }, { status: 200 });
  } catch (error) {
    const respostaApi = new RespostaApi({ sucesso: false, mensagem: "Ocorreu um erro inesperado", dados: error });
    return NextResponse.json({ respostaApi }, { status: 500 });
  }
}
