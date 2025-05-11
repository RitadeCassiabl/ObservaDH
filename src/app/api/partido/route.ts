/**
 * @openapi
 * 
 * /api/partido:
 *   post:
 *     summary: Cria um novo partido
 *     tags:
 *       - Partido
 *     requestBody:
 *       required: true
 *       description: Nome e código do partido
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nome
 *               - sigla
 *             properties:
 *               nome:
 *                 type: string
 *                 example: Partido da Esperança Nacional
 *               sigla:
 *                 type: string
 *                 example: PEN
 *     responses:
 *       200:
 *         description: Partido criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RespostaApi'
 *             example:
 *               sucesso: true
 *               mensagem: Partido criado com sucesso
 *               dados:
 *                 id: "d7f72cce-b2f5-4a7e-a913-65fa3f88cd84"
 *                 nome: "Partido da Esperança Nacional"
 *                 sigla: "PEN"
 *       400:
 *         description: Erro de validação (dados inválidos ou duplicados)
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RespostaApi'
 *             examples:
 *               nome_ausente:
 *                 summary: Nome ou código ausente
 *                 value:
 *                   sucesso: false
 *                   mensagem: Nome e código são obrigatórios
 *               nome_existente:
 *                 summary: Nome já cadastrado
 *                 value:
 *                   sucesso: false
 *                   mensagem: Já existe um partido com este nome
 *               codigo_existente:
 *                 summary: Código já cadastrado
 *                 value:
 *                   sucesso: false
 *                   mensagem: Já existe um partido com este código
 *       500:
 *         description: Erro interno do servidor
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RespostaApi'
 *             example:
 *               sucesso: false
 *               mensagem: Houve algum problema na criação do partido
 
 *   get:
 *     summary: Lista todos os partidos cadastrados
 *     tags:
 *       - Partido
 *     responses:
 *       200:
 *         description: Lista de partidos retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RespostaApi'
 *             example:
 *               sucesso: true
 *               mensagem: Lista de partidos retornada com sucesso
 *               dados:
 *                 - id: "1f3c1f25-1122-43a6-bf61-0fbf6e84e278"
 *                   nome: "Partido Socialista dos Trabalhadores"
 *                   sigla: "PST"
 *                 - id: "71a8bcce-84d4-4c84-92ea-481872e8b5d4"
 *                   nome: "Partido Verde Ambiental"
 *                   sigla: "PVA"
 *       500:
 *         description: Erro interno ao listar partidos
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RespostaApi'
 *             example:
 *               sucesso: false
 *               mensagem: Erro interno
 */

import { CriarPartidoController } from '@/lib/api/controllers/partido/criar-partido-controller';
import { ListarPartidoController } from '@/lib/api/controllers/partido/listar-partido-controller';
import { RespostaApi } from '@/domain/models/resposta-api';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const { nome, sigla } = await request.json();

        const controller = new CriarPartidoController();

        const resposta = await controller.executar(nome, sigla)

        return NextResponse.json({ resposta }, { status: resposta.sucesso ? 200 : 400 })

    } catch (error) {
        const respostaApi = new RespostaApi({ sucesso: false, mensagem: "Ocorreu um erro inesperado", dados: error });
        return NextResponse.json(
            { respostaApi },
            { status: 500 }
        )
    }
}

export async function GET() {
    try {

        const controller = new ListarPartidoController();

        const resposta = await controller.executar()

        return NextResponse.json({ resposta }, { status: resposta.sucesso ? 200 : 400 })

    } catch (error) {
        const respostaApi = new RespostaApi({ sucesso: false, mensagem: "Ocorreu um erro inesperado", dados: error });
        return NextResponse.json(
            { respostaApi },
            { status: 500 }
        )
    }
}