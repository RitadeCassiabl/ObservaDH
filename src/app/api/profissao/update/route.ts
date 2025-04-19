import { AtualizarProfissaoController } from "@/lib/api/controllers/profissao/atualizar-profissao-controller";
import { RespostaApi } from "@/types/resposta-api";
import { NextResponse } from "next/server";

export async function PUT(request: Request) {
    try {
        const { id, nome } = await request.json();

        if (!nome || !id) {
            const respostaApi = new RespostaApi(
                false,
                "Está faltando infomação para atualização da profissão"
            );
            return NextResponse.json({ respostaApi });
        } else {
            const controller = new AtualizarProfissaoController();
            const resposta = await controller.executar(id, nome);
            return NextResponse.json({ resposta })
        }
    } catch (error) {
        const respostaApi = new RespostaApi(false, "erro interno", error);
        return NextResponse.json({ respostaApi, status: 500 });
    }
}