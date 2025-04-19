import { ListarProfissoesController } from "@/lib/api/controllers/profissao/listar-profissao-controller";
import { RespostaApi } from "@/types/resposta-api";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const controller = new ListarProfissoesController()
        const resposta = await controller.executar()
        return NextResponse.json({ resposta })
    } catch (error) {
        const respostaApi = new RespostaApi(false, "erro interno", error);
        return NextResponse.json({ respostaApi, status: 500 });
    }
}