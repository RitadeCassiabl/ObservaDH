import { AtualizarDireitoVioladoController } from "@/lib/api/controllers/direito-violado/atualizar-direito_violado-controller";
import { BuscarDireitoVioladoController } from "@/lib/api/controllers/direito-violado/buscar-direito_violado-controller";
import { DeletarDireitoVioladoController } from '@/lib/api/controllers/direito-violado/deletar-direito_violado-controller';
import { RespostaApi } from "@/types/resposta-api";
import { NextResponse } from "next/server";

export async function PATCH(
    request: Request
    , { params }: { params: { id?: string } }) {
    try {
        const { id } = params;

        if (!id) {
            const resposta = new RespostaApi(
                false,
                "Está faltando informação para a busca da profissão"
            );
            return NextResponse.json({ resposta }, { status: 400 });
        }

        const { nome } = await request.json();

        const controller = new AtualizarDireitoVioladoController();

        const resposta = await controller.executar(id, nome)

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


export async function DELETE(
    request: Request,
    { params }: { params: { id?: string } }) {

    try {
        const { id } = params;

        if (!id) {
            const resposta = new RespostaApi(
                false,
                "Está faltando informação para a busca da profissão"
            );
            return NextResponse.json({ resposta }, { status: 400 });
        }

        const controller = new DeletarDireitoVioladoController();

        const resposta = await controller.executar(id)

        return NextResponse.json({ resposta })

    } catch (error) {
        const respostaApi = new RespostaApi(
            false,
            'erro interno',
            error
        )
        return NextResponse.json({ respostaApi })
    }
}




export async function GET(request: Request,
    { params }: { params: { id?: string } }) {
    try {
        const { id } = params;
        if (!id) {
            const resposta = new RespostaApi(
                false,
                "Está faltando informação para a busca da profissão"
            );
            return NextResponse.json(
                { resposta },
                { status: 400 }
            );
        }

        const controller = new BuscarDireitoVioladoController();

        const resposta = await controller.executar(id)

        return NextResponse.json({ resposta }, { status: resposta.sucesso ? 200 : 404 });

    } catch (error) {
        const respostaApi = new RespostaApi(false, "erro interno", error);
        return NextResponse.json({ respostaApi, status: 500 });
    }
}