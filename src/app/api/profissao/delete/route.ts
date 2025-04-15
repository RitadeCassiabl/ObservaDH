import { DeletarProfissaoController } from "@/lib/api/controllers/profissao/DeletarProfissaoController";
import { RespostaApi } from "@/lib/database/models/RespostaApi";
import { NextResponse } from "next/server";

export async function DELETE(request: Request) {
    try {
        const { nome } = await request.json();


        if (!nome) {
            const respostaApi = new RespostaApi(
                false,
                "Está faltando infomação para deletar a profissão"
            );
            return NextResponse.json({ respostaApi });
        } else {

            const controller = new DeletarProfissaoController()

            const resposta = await controller.executar(nome)

            return NextResponse.json({ resposta })

        }

    } catch (error) {
        const respostaApi = new RespostaApi(false, "erro interno", error);
        return NextResponse.json({ respostaApi, status: 500 });
    }
}