
import { AtualizarPautaController } from "@/lib/api/controllers/pauta/atualizar-pauta-controller"
import { BuscarPautaController } from "@/lib/api/controllers/pauta/buscar-pauta-controller"
import { DeletarPautaController } from "@/lib/api/controllers/pauta/deletar-pauta-controller"
import { RespostaApi } from "@/domain/models/resposta-api"
import { NextResponse } from "next/server"


export async function DELETE(request: Request,
    { params }: { params: { id: string } }
) {
    try {
        const { id } = params
        console.log(id)
        if (!id) {
            const respostaApi = new RespostaApi({ sucesso: false, mensagem: "id não informado" })

            return NextResponse.json({ respostaApi }, { status: 400 })
        }

        const controller = new DeletarPautaController();

        const resposta = await controller.executar(id);

        return NextResponse.json({ resposta }, { status: resposta.sucesso ? 200 : 400 })


    } catch (error) {
        const respostaApi = new RespostaApi({
            sucesso:
                false,
            mensagem: "Ocorreu um erro inesperado",
            dados:
                error
        }
        )
        return NextResponse.json({ respostaApi, status: 500 })
    }
}

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
    try {
        const { id } = params

        if (!id) {
            const respostaApi = new RespostaApi({ sucesso: false, mensagem: "id não informado" })

            return NextResponse.json({ respostaApi }, { status: 400 })
        }

        const { nome } = await request.json()

        const controller = new AtualizarPautaController();

        const resposta = await controller.executar(id, nome);

        return NextResponse.json(
            { resposta },
            { status: resposta.sucesso ? 200 : 400 }
        )

    } catch (error) {
        const respostaApi = new RespostaApi({
            sucesso:
                false,
            mensagem: "Ocorreu um erro inesperado", dados:
                error
        }
        )
        return NextResponse.json(
            { respostaApi },
            { status: 500 }
        )
    }
}


export async function GET(request: Request, { params }: { params: { id: string } }) {
    try {
        const { id } = params

        if (!id) {
            const respostaApi = new RespostaApi({ sucesso: false, mensagem: "id não informado" })

            return NextResponse.json({ respostaApi }, { status: 400 })
        }

        const controller = new BuscarPautaController()

        const resposta = await controller.executar(id);

        return NextResponse.json({ resposta }, { status: resposta.sucesso ? 200 : 400 })

    } catch (error) {
        const respostaApi = new RespostaApi({
            sucesso: false,
            mensagem: "Ocorreu um erro inesperado",
            dados: error
        }
        )
        return NextResponse.json(
            { respostaApi },
            { status: 500 }
        )
    }
}