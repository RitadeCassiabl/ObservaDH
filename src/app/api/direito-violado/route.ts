import { CriarDireitoVioladoController } from "@/lib/api/controllers/direito-violado/criar-direito_violado-controller";
import { ListarDireitoVioladoController } from "@/lib/api/controllers/direito-violado/listar-direito_violado-controller";
import { RespostaApi } from "@/types/resposta-api";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const { nome } = await request.json();

        const controller = new CriarDireitoVioladoController();

        const resposta = await controller.executar(nome);

        return NextResponse.json({ resposta })

    } catch (error) {
        const respostaApi = new RespostaApi(false, "erro interno", error)
        return NextResponse.json({ respostaApi }, { status: 500 })

    }
}



export async function GET() {
    try {

        const controller = new ListarDireitoVioladoController();

        const resposta = await controller.executar()

        return NextResponse.json({ resposta }, { status: resposta.sucesso ? 200 : 400 })

    } catch (error) {
        const respostaApi = new RespostaApi(
            false,
            "erro interno",
            error
        )
        return NextResponse.json({ respostaApi } , { status: 500 })
    }
}