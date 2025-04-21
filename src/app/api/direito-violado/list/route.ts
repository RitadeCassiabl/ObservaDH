import { ListarDireitoVioladoController } from "@/lib/api/controllers/direito-violado/listar-direito_violado-controller";
import { RespostaApi } from "@/types/resposta-api";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const controller = new ListarDireitoVioladoController();
        const resposta = await controller.executar()
        return NextResponse.json({ resposta })
    } catch (error) {
        const respostaApi = new RespostaApi(
            false,
            "erro interno",
            error
        )
        return NextResponse.json({ respostaApi })
    }
}