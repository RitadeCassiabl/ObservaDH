import { Projeto } from "@/types/projeto";
import { prismaClient } from "@/services/prisma/prisma";
export class CriarProjetoService {
  async executar(projeto: Projeto) {
    const prisma = prismaClient;

    const resposta = await prisma.projeto.create({
      data: {
        ano: projeto.ano,
        numero_pl: projeto.numero_pl,
        pauta: projeto.pauta,
        justificativa: projeto.justificativa,
        ementa: projeto.ementa,
        ...(projeto.ambitoId !== undefined
          ? { ambitoId: projeto.ambitoId }
          : { ambito: { create: projeto.ambito } }),
        autores: {
          create: [],
        },
        partidos: {
          create: [],
        },
        direitosViolados: {
          create: [],
        },
        ideologias: {
          create: [],
        },
      },
    });
    return resposta;
  }
}