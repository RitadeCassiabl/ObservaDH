import { prismaClient } from "@/services/prisma/prisma";
import { Esfera } from "@/types/esfera";

export class AtualizarProjetoService {
  async executar(
    id: string,
    ano: string,
    numero_pl: string,
    pauta: string,
    justificativa: string,
    ementa: string,
    esferaId: string,
    esfera: Esfera
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
        esferaId: esferaId,
        esfera: {
          update: {
            nome: esfera.nome,
          },
        },
      },
    });
    return resposta;
  }
}
