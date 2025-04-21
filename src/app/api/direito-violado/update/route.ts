import { AtualizarDireitoVioladoController } from "@/lib/api/controllers/direito-violado/atualizar-direito_violado-controller";
import { RespostaApi } from "@/types/resposta-api";
import { NextResponse } from "next/server";

export async function PUT(request: Request) {
    try {

        const { nome, novoNome } = await request.json();

        if (!nome || !novoNome) {
            const respostaApi = new RespostaApi(
                false,
                "falta alguma informação para a alteração do direito violado"
            );
            return NextResponse.json({ respostaApi })
        }

        const controller = new AtualizarDireitoVioladoController();

        const resposta = await controller.executar(nome, novoNome)

        return NextResponse.json({ resposta })

    } catch (error) {
        const resposta = new RespostaApi(
            false,
            'erro interno',
            error
        )
        return NextResponse.json({ resposta }, { status: 500 })
    }
}