import { ListarProfissoesController } from "@/lib/api/controllers/profissao/ListarProfissoesController";
import { RespostaApi } from "@/lib/database/models/RespostaApi";
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