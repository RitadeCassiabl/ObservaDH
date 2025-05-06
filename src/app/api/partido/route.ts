import { CriarPartidoController } from '@/lib/api/controllers/partido/criar-partido-controller';
import { RespostaApi } from '@/types/resposta-api';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const { nome, codigo } = await request.json();

        const controller = new CriarPartidoController();

        const resposta = await controller.executar(nome, codigo)

        return NextResponse.json({ resposta }, { status: 200 })

    } catch (error) {
        const respostaApi = new RespostaApi(false, "erro interno", error);
        return NextResponse.json(
            { respostaApi },
            { status: 500 }
        )
    }
}

export async function GET(request: Request) {
    try {
        const controller = new CriarPartidoController();

        // const resposta = await controller

        // return NextResponse.json({ resposta }, { status: 200 })

    } catch (error) {
        const respostaApi = new RespostaApi(false, "erro interno", error);
        return NextResponse.json(
            { respostaApi },
            { status: 500 }
        )
    }
}