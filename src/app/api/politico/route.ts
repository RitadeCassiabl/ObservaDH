/**
 * @openapi
 * /api/politico:
 *   post:
 *     summary: Cria um novo político
 *     tags:
 *       - Politico
 *     requestBody:
 *       required: true
 *       description: Dados necessários para criação de um político
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nome
 *               - sexo
 *               - raca
 *               - religiao
 *               - estado_id
 *               - partido_id
 *               - ideologia
 *               - data_nascimento
 *               - profissoes
 *               - projetos
 *             properties:
 *               nome:
 *                 type: string
 *                 example: João da Silva
 *               sexo:
 *                 type: string
 *                 enum: [Masculino, Feminino, Outro]
 *                 example: Masculino
 *               raca:
 *                 type: string
 *                 example: Branca
 *               religiao:
 *                 type: string
 *                 example: Católica
 *               estado_id:
 *                 type: string
 *                 format: uuid
 *                 example: "a3f1c2d4-5b6e-7f8a-9b0c-d1e2f3a4b5c6"
 *               partido_id:
 *                 type: string
 *                 format: uuid
 *                 example: "b4e2d3c1-6f5a-4e7b-8c9d-0a1b2c3d4e5f"
 *               ideologia:
 *                 type: string
 *                 example: Liberal
 *               data_nascimento:
 *                 type: string
 *                 format: date
 *                 example: 1970-01-01
 *               foto:
 *                 type: string
 *                 format: uri
 *                 example: https://example.com/foto.jpg
 *               profissoes:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example:
 *                   - Engenheiro
 *                   - Advogado
 *               projetos:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example:
 *                   - "proj-uuid-1234"
 *                   - "proj-uuid-5678"
 *     responses:
 *       201:
 *         description: Político criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RespostaApi'
 *             example:
 *               sucesso: true
 *               mensagem: Político criado com sucesso
 *               dados:
 *                 id: "c1d2e3f4-5678-90ab-cdef-1234567890ab"
 *                 nome: "João da Silva"
 *                 sexo: "Masculino"
 *                 raca: "Branca"
 *                 religiao: "Católica"
 *                 estado_id: "a3f1c2d4-5b6e-7f8a-9b0c-d1e2f3a4b5c6"
 *                 partido_id: "b4e2d3c1-6f5a-4e7b-8c9d-0a1b2c3d4e5f"
 *                 ideologia: "Liberal"
 *                 data_nascimento: "1970-01-01"
 *                 foto: "https://example.com/foto.jpg"
 *                 profissoes:
 *                   - "Engenheiro"
 *                   - "Advogado"
 *                 projetos:
 *                   - "proj-uuid-1234"
 *                   - "proj-uuid-5678"
 *       400:
 *         description: Erro de validação de entrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RespostaApi'
 *             examples:
 *               campo_ausente:
 *                 summary: Campo obrigatório ausente
 *                 value:
 *                   sucesso: false
 *                   mensagem: "Campo 'nome' é obrigatório"
 *               formato_invalido:
 *                 summary: Formato de data inválido
 *                 value:
 *                   sucesso: false
 *                   mensagem: "Formato de 'data_nascimento' inválido"
 *       500:
 *         description: Erro interno do servidor
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RespostaApi'
 *             example:
 *               sucesso: false
 *               mensagem: "Erro interno ao criar o político"
 */

import { CriarPoliticoController } from "@/lib/api/controllers/politico/criar-politico-controller";
import { ListarPoliticoContoller } from "@/lib/api/controllers/politico/listar-politico-controller";
import { RespostaApi } from "@/types/resposta-api";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
	try {
		const {
			nome,
			sexo,
			raca,
			religiao,
			estado_id,
			partido_id,
			ideologia,
			data_nascimento,
			foto,
			profissoes,
			projetos,
		} = await request.json();

		const controller = new CriarPoliticoController();

		const resposta = await controller.executar(
			nome,
			sexo,
			raca,
			religiao,
			estado_id,
			partido_id,
			ideologia,
			data_nascimento,
			foto,
			profissoes,
			projetos
		);

		return NextResponse.json(
			{ resposta },
			{ status: resposta.sucesso ? 201 : 400 }
		);
	} catch (error) {
		const resposta = new RespostaApi(false, "erro interno", error);
		return NextResponse.json({ resposta }, { status: 500 });
	}
}
export async function GET() {
	try {
		const controller = new ListarPoliticoContoller();

		const resposta = await controller.executar();

		return NextResponse.json(
			{ resposta },
			{ status: resposta.sucesso ? 200 : 400 }
		);
	} catch (error) {
		const resposta = new RespostaApi(false, "erro interno", error);
		return NextResponse.json({ resposta }, { status: 500 });
	}
}
