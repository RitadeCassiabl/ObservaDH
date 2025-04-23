import { DeletarTemaController } from "@/lib/api/controllers/tema/deletar-tema-controller"
import { RespostaApi } from "@/types/resposta-api"
import { NextResponse } from "next/server"

export async function DELETE(request: Request) {
    try {

        const { nome } = await request.json()

        const controller = new DeletarTemaController();

        const resposta = await controller.executar(nome);

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