import { AtualizarTemaController } from "@/lib/api/controllers/tema/atualizar-tema-controller";
import { RespostaApi } from "@/types/resposta-api"
import { NextResponse } from "next/server"

export async function PUT(request: Request) {
    try {
        const { nome, novoNome } = await request.json()

        const controller = new AtualizarTemaController();

        const resposta = await controller.executar(nome, novoNome);

        return NextResponse.json({ resposta })
        
    } catch (error) {
        const respostaApi = new RespostaApi(
            false,
            "erro interno",
            error
        )
        return NextResponse.json({ respostaApi, status: 500 })
    }
}