import { prismaClient } from "@/services/prisma/prisma";

export class AtualizarProjetoService {
  async executar(
    id: string,
    ano: string,
    numero_pl: string,
    pautaId: string,
    justificativa: string,
    ementa: string,
    esferaId: string,
  ) {
    const prisma = prismaClient;

    const resposta = await prisma.projeto.update({
      where: {
        id: id,
      },
      data: {
        ano: ano,
        numero_pl: numero_pl,
        pautaId: pautaId,
        justificativa: justificativa,
        ementa: ementa,
        esferaId: esferaId,
      },
    });
    return resposta;
  }
}
