import { CriarDireitoVioladoController } from "@/lib/api/controllers/direito-violado/criar-direito_violado-controller";
import { RespostaApi } from "@/types/resposta-api";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const { nome } = await request.json();
        if (!nome) {
            const respostaApi = new RespostaApi(
                false,
                "Está faltando infomação para a criação do direito violado"
            );
            return NextResponse.json({ respostaApi })
        } else {
            const controller = new CriarDireitoVioladoController();

            const resposta = await controller.executar(nome);

            return NextResponse.json({ resposta })
        }
    } catch (error) {
        const respostaApi = new RespostaApi(false, "erro interno", error)
        return NextResponse.json({ respostaApi })

    }
}