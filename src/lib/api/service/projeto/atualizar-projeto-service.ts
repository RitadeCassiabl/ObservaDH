import { prismaClient } from "@/services/prisma/prisma";

export class AtualizarProjetoService {
  async executar(
    id: string,
    ano: string,
    numero_pl: string,
    pauta: string,
    justificativa: string,
    ementa: string,
    ambitoId: string,
    ambito: string,
  ) {
    const prisma = prismaClient;

    const resposta = await prisma.projeto.update({
      where: {
        id: id,
      },
      data: {
        ano: ano,
        numero_pl: numero_pl,
        pauta: pauta,
        justificativa: justificativa,
        ementa: ementa,
        ambitoId: ambitoId,
        ambito: ambito,
      },
    });
    return resposta;
  }
}
