
import { CriarPautaController } from "@/lib/api/controllers/pauta/criar-pauta-controller";
import { ListarPautaController } from "@/lib/api/controllers/pauta/listar-pauta-controller";
import { RespostaApi } from "@/types/resposta-api";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {

        const { nome } = await request.json();

        const controller = new CriarPautaController();

        const resposta = await controller.executar(nome);

        return NextResponse.json(
            { resposta },
            { status: resposta.sucesso ? 201 : 400 }
        )

    } catch (error) {
        const respostaApi = new RespostaApi({
            sucesso: false,
            mensagem: "Ocorreu um erro inesperado",
            dados: error
        }
        )
        return NextResponse.json(
            { respostaApi },
            { status: 500 }
        )
    }
}


export async function GET() {
    try {

        const controller = new ListarPautaController();

        const resposta = await controller.executar();

        return NextResponse.json({ resposta }, { status: resposta.sucesso ? 200 : 400 })
    } catch (error) {
        const respostaApi = new RespostaApi({
            sucesso: false,
            mensagem: "Ocorreu um erro inesperado", 
            dados: error}
        )
        return NextResponse.json(
            { respostaApi },
            { status: 500 }
        )
    }
}