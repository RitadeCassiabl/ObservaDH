import { AtualizarTemaController } from "@/lib/api/controllers/pauta/atualizar-pauta-controller";
import { DeletarTemaController } from "@/lib/api/controllers/pauta/deletar-pauta-controller"
import { BuscarTemaController } from "@/lib/api/controllers/pauta/buscar-pauta-controller";
import { RespostaApi } from "@/types/resposta-api"
import { NextResponse } from "next/server"


export async function DELETE(request: Request,
    { params }: { params: { id: string } }
) {
    try {
        const { id } = params
        console.log(id)
        if (!id) {
            const respostaApi = new RespostaApi(false, "id não informado")

            return NextResponse.json({ respostaApi }, { status: 400 })
        }

        const controller = new DeletarTemaController();

        const resposta = await controller.executar(id);

        return NextResponse.json({ resposta } , { status: resposta.sucesso ? 200 : 400 })


    } catch (error) {
        const respostaApi = new RespostaApi(
            false,
            "erro interno",
            error
        )
        return NextResponse.json({ respostaApi, status: 500 })
    }
}

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
    try {
        const { id } = params

        if (!id) {
            const respostaApi = new RespostaApi(false, "id não informado")

            return NextResponse.json({ respostaApi }, { status: 400 })
        }

        const { nome } = await request.json()

        const controller = new AtualizarTemaController();

        const resposta = await controller.executar(id, nome);

        return NextResponse.json(
            { resposta },
            { status: resposta.sucesso ? 200 : 400 }
        )

    } catch (error) {
        const respostaApi = new RespostaApi(
            false,
            "erro interno",
            error
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
            const respostaApi = new RespostaApi(false, "id não informado")

            return NextResponse.json({ respostaApi }, { status: 400 })
        }

        const controller = new BuscarTemaController()

        const resposta = await controller.executar(id);

        return NextResponse.json({ resposta }, { status: resposta.sucesso ? 200 : 400 })

    } catch (error) {
        const respostaApi = new RespostaApi(
            false,
            "erro interno",
            error
        )
        return NextResponse.json(
            { respostaApi },
            { status: 500 }
        )
    }
}