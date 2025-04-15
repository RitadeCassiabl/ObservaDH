import { BuscarProfissaoController } from "@/lib/api/controllers/profissao/BuscarProfissaoController";
import { RespostaApi } from "@/lib/database/models/RespostaApi";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const { nome } = await request.json();

        if (!nome) {
            const respostaApi = new RespostaApi(
                false,
                "Está faltando infomação para a busca da profissão"
            );
            return NextResponse.json({ respostaApi });
        } else {

            const controller = new BuscarProfissaoController()

            const resposta = await controller.executar(nome)
            return NextResponse.json({ resposta });
        }
    } catch (error) {
        const respostaApi = new RespostaApi(false, "erro interno", error);
        return NextResponse.json({ respostaApi, status: 500 });
    }
}
