import { ListarTemaController } from "@/lib/api/controllers/tema/listar-tema-controller"
import { CriarTemaController } from "@/lib/api/controllers/tema/criar-tema-controller";
import { RespostaApi } from "@/types/resposta-api";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {

        const { nome } = await request.json();

        const controller = new CriarTemaController();

        const resposta = await controller.executar(nome);

        return NextResponse.json(
            { resposta },
            { status: resposta.sucesso ? 201 : 400 }
        )

    } catch (error) {
        const respostaApi = new RespostaApi(
            false,
            "erro interno",
            error
        )
        return NextResponse.json(
            { respostaApi },
            { status: 500 }
        )
    }
}


export async function GET() {
    try {

        const controller = new ListarTemaController();

        const resposta = await controller.executar();

        return NextResponse.json({ resposta })
    } catch (error) {
        const respostaApi = new RespostaApi(
            false,
            "erro interno",
            error
        )
        return NextResponse.json(
            { respostaApi },
            { status: 500 }
        )
    }
}