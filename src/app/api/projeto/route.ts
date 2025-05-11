import { CriarProjetoController } from "@/lib/api/controllers/projeto/criar-projeto-controller";
import { ListarProjetoController } from "@/lib/api/controllers/projeto/listar-projeto-controller";
import { RespostaApi } from "@/domain/models/resposta-api";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { ano, numeroPl, pautaId, pauta, justificativa, ementa, esferaId, esfera } =
      await request.json();

    if (
      !ano ||
      !numeroPl ||
      !pautaId ||
      !pauta ||
      !justificativa ||
      !ementa ||
      !esferaId ||
      !esfera
    ) {
      const respostaApi = new RespostaApi({
        sucesso:
          false,
        mensagem:
          "Estão faltando infomações para a criação do projeto de lei"
      }
      );

      return NextResponse.json({ respostaApi }, { status: 400 });
    } else {
      const controller = new CriarProjetoController();

      const resposta = await controller.executar(
        ano,
        numeroPl,
        pautaId,
        pauta,
        justificativa,
        ementa,
        esferaId,
        esfera
      );

      return NextResponse.json(
        { resposta },
        { status: resposta.sucesso ? 200 : 400 }
      );
    }
  } catch (error) {
    const respostaApi = new RespostaApi({ sucesso: false, mensagem: "Ocorreu um erro inesperado", dados: error });

    return NextResponse.json({ respostaApi }, { status: 500 });
  }
}

export async function GET() {
  try {
    const controller = new ListarProjetoController();
    const resposta = await controller.executar();

    if (!resposta.sucesso) {
      return NextResponse.json({
        resposta,
        status: 400,
      });
    }
    return NextResponse.json({ resposta }, { status: 200 });
  } catch (error) {
    const respostaApi = new RespostaApi({ sucesso: false, mensagem: "Ocorreu um erro inesperado", dados: error });
    return NextResponse.json({ respostaApi }, { status: 500 });
  }
}
