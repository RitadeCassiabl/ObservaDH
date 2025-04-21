import { NextResponse } from 'next/server';
import { RespostaApi } from "@/types/resposta-api";
import { DeletarDireitoVioladoController } from '@/lib/api/controllers/direito-violado/deletar-direito_violado-controller';

export async function DELETE(request: Request) {
    try {
        const { nome } = await request.json()

        if (!nome) {
            const respostaApi = new RespostaApi(false,
                "faltam informação para deletar o direito violado"
            )
            return NextResponse.json({ respostaApi })
        } else {
            const controller = new DeletarDireitoVioladoController();

            const resposta = await controller.executar(nome);

            return NextResponse.json({ resposta })
        }
    } catch (error) {
        const respostaApi = new RespostaApi(
            false,
            'erro interno',
            error
        )
        return NextResponse.json({ respostaApi })
    }
}