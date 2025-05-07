import { AtualizarPartidoController } from "@/lib/api/controllers/partido/atualizar-partido-controller";
import { BuscarPartidoController } from "@/lib/api/controllers/partido/buscar-partido-controller";
import { DeletarPartidoController } from "@/lib/api/controllers/partido/deletar-partido-controller";
import { RespostaApi } from "@/types/resposta-api";
import { NextResponse } from "next/server";

export async function GET(
    request: Request, { params }: { params: { id: string } }
) {
    try {
        const { id } = params;

        if (!id) {
            const respostaApi = new RespostaApi(false, "falta informação para buscar o partido");

            return NextResponse.json(
                { respostaApi },
                { status: 400 }
            )
        }

        const controller = new BuscarPartidoController();

        const resposta = await controller.executar(id);

        return NextResponse.json({ resposta }, { status: resposta.sucesso ? 200 : 400 })

    } catch (error) {

        const respostaApi = new RespostaApi(false, "erro interno", error);

        return NextResponse.json({ respostaApi }, { status: 500 })
        
    }

}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    try {
        const { id } = params;

        if (!id) {
            const respostaApi = new RespostaApi(false, "falta informação para deletar o partido");

            return NextResponse.json(
                { respostaApi },
                { status: 400 }
            )
        }

        const controller = new DeletarPartidoController();

        const resposta = await controller.executar(id);

        return NextResponse.json({ resposta }, { status: resposta.sucesso ? 200 : 400 })

    } catch (error) {
        const respostaApi = new RespostaApi(false, "erro interno", error);
        return NextResponse.json({ respostaApi }, { status: 500 })
    }
}

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
    try {

        const { id } = params;
        const { nome, codigo, politicos, projetos } = await request.json();

        if (!id || !nome || !codigo || !politicos || !projetos) {
            const respostaApi = new RespostaApi(false, "falta informação para atualizar o partido");

            return NextResponse.json(
                { respostaApi },
                { status: 400 }
            )
        }

        const controller = new AtualizarPartidoController();

        const resposta = await controller.executar(id, nome, codigo, politicos, projetos);

        return NextResponse.json({ resposta }, { status: resposta.sucesso ? 200 : 400 })

    } catch (error) {
        const respostaApi = new RespostaApi(false, "erro interno", error);
        return NextResponse.json({ respostaApi }, { status: 500 })
    }
}