/**
 * @openapi
 * /api/partido/{id}:
 *   get:
 *     summary: Buscar um partido por ID
 *     tags:
 *       - Partido
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do partido
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Partido encontrado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RespostaApi'
 *             example:
 *               sucesso: true
 *               mensagem: Partido encontrado
 *               dados:
 *                 id: "d7f72cce-b2f5-4a7e-a913-65fa3f88cd84"
 *                 nome: "Partido da Esperança Nacional"
 *                 sigla: "PEN"
 *       400:
 *         description: ID ausente ou partido não encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RespostaApi'
 *             example:
 *               sucesso: false
 *               mensagem: falta informação para buscar o partido
 *       500:
 *         description: Erro interno
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RespostaApi'

 *   delete:
 *     summary: Deleta um partido por ID
 *     tags:
 *       - Partido
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do partido
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Partido deletado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RespostaApi'
 *             example:
 *               sucesso: true
 *               mensagem: Partido deletado
 *       400:
 *         description: ID ausente ou partido não encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RespostaApi'
 *             example:
 *               sucesso: false
 *               mensagem: falta informação para deletar o partido
 *       500:
 *         description: Erro interno
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RespostaApi'

 *   patch:
 *     summary: Atualiza um partido por ID
 *     tags:
 *       - Partido
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do partido a ser atualizado
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       description: Novos dados do partido
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nome
 *               - sigla
 *               - politicos
 *               - projetos
 *             properties:
 *               nome:
 *                 type: string
 *               sigla:
 *                 type: string
 *               politicos:
 *                 type: array
 *                 items:
 *                   type: string
 *               projetos:
 *                 type: array
 *                 items:
 *                   type: string
 *           example:
 *             nome: "Partido Renovado"
 *             sigla: "PRN"
 *             politicos: ["uuid1", "uuid2"]
 *             projetos: ["uuid3", "uuid4"]
 *     responses:
 *       200:
 *         description: Partido atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RespostaApi'
 *             example:
 *               sucesso: true
 *               mensagem: Partido atualizado
 *               dados:
 *                 id: "d7f72cce-b2f5-4a7e-a913-65fa3f88cd84"
 *                 nome: "Partido Renovado"
 *                 sigla: "PRN"
 *       400:
 *         description: Faltam informações ou dados inválidos
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RespostaApi'
 *             example:
 *               sucesso: false
 *               mensagem: falta informação para atualizar o partido
 *       500:
 *         description: Erro interno
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RespostaApi'
 */

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
            const respostaApi = new RespostaApi({ sucesso: false, mensagem: "falta informação para buscar o partido" });

            return NextResponse.json(
                { respostaApi },
                { status: 400 }
            )
        }

        const controller = new BuscarPartidoController();

        const resposta = await controller.executar(id);

        return NextResponse.json({ resposta }, { status: resposta.sucesso ? 200 : 400 })

    } catch (error) {

        const respostaApi = new RespostaApi({ sucesso: false, mensagem: "Ocorreu um erro inesperado", dados: error });

        return NextResponse.json({ respostaApi }, { status: 500 })

    }

}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    try {
        const { id } = params;

        if (!id) {
            const respostaApi = new RespostaApi({ sucesso: false, mensagem: "falta informação para deletar o partido" });

            return NextResponse.json(
                { respostaApi },
                { status: 400 }
            )
        }

        const controller = new DeletarPartidoController();

        const resposta = await controller.executar(id);

        return NextResponse.json({ resposta }, { status: resposta.sucesso ? 200 : 400 })

    } catch (error) {
        const respostaApi = new RespostaApi({ sucesso: false, mensagem: "Ocorreu um erro inesperado", dados: error });
        return NextResponse.json({ respostaApi }, { status: 500 })
    }
}

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
    try {

        const { id } = params;
        const { nome, sigla, politicos, projetos } = await request.json();

        if (!id || !nome || !sigla || !politicos || !projetos) {
            const respostaApi = new RespostaApi({ sucesso: false, mensagem: "falta informação para atualizar o partido" });

            return NextResponse.json(
                { respostaApi },
                { status: 400 }
            )
        }

        const controller = new AtualizarPartidoController();

        const resposta = await controller.executar(id, nome, sigla, politicos, projetos);

        return NextResponse.json({ resposta }, { status: resposta.sucesso ? 200 : 400 })

    } catch (error) {
        const respostaApi = new RespostaApi({ sucesso: false, mensagem: "Ocorreu um erro inesperado", dados: error });
        return NextResponse.json({ respostaApi }, { status: 500 })
    }
}