import { CriarProfissaoController } from "@/lib/api/controllers/profissao/criar-profissao-controller";
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
      return NextResponse.json({ respostaApi });
    } else {
      const controller = new CriarProfissaoController();

      const resposta = await controller.executar(nome);

      return NextResponse.json({ resposta });
    }
  } catch (error) {
    const respostaApi = new RespostaApi(false, "erro interno", error);
    return NextResponse.json({ respostaApi, status: 500 });
  }
}
