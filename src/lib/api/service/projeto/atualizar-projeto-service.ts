import { prismaClient } from "@/services/prisma/prisma";

export class AtualizarProjetoService {
  async executar(
    {
      id,
      ano,
      ementa,
      pautaId,
      esferaId,
      numeroPl,
      justificativa
    }:
      {
        id: string,
        ano: string,
        ementa: string,
        pautaId: string,
        esferaId: string
        numeroPl: string,
        justificativa: string,
      }
  ) {
    const prisma = prismaClient;

    const resposta = await prisma.projeto.update({
      where: {
        id: id,
      },
      data: {
        ano: ano,
        ementa: ementa,
        pautaId: pautaId,
        esferaId: esferaId,
        numeroPl: numeroPl,
        justificativa: justificativa,
      },
    });
    return resposta;
  }
}
