import { Projeto } from "@/domain/models/projeto";
import { prismaClient } from "@/services/prisma/prisma";

export class CriarProjetoService {
  async executar(projeto: Projeto) {
    const prisma = prismaClient;

    const resposta = await prisma.projeto.create({

      data: {
        ano: projeto.ano,
        ementa: projeto.ementa,
        pautaId: projeto.pautaId,
        esferaId: projeto.esferaId,
        numeroPl: projeto.numeroPl,
        justificativa: projeto.justificativa,

        autores: {
          create: [],
        },

        partidos: {
          create: [],
        },


        ideologias: {
          create: [],
        },

        direitosViolados: {
          create: [],
        },
      }

    })

    return resposta;
  }
}
// data: {
//   ano: projeto.ano,
//   numero_pl: projeto.numero_pl,
//   pautaId: projeto.pautaId,
//   pauta: projeto.pauta,
//   justificativa: projeto.justificativa,
//   ementa: projeto.ementa,
//   ...(projeto.esferaId
//     ? { esferaId: projeto.esferaId }
//     : projeto.esfera
//     ? { esfera: { create: projeto.esfera } }
//     : {}),
//   autores: {
//     create: [],
//   },
//   partidos: {
//     create: [],
//   },
//   direitosViolados: {
//     create: [],
//   },
//   ideologias: {
//     create: [],
//   },
// },

// });
//   }
// }