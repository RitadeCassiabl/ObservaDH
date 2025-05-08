import { prismaClient } from "@/services/prisma/prisma";
import Politico from "@/types/politico";

export class CriarPolitcoService {

    async executar(politico: Politico) {
        const prisma = prismaClient;

        const nascimento = new Date(politico.dataNascimento);

        const resposta = await prisma.politico.create({
            data: {
                nome: politico.nome,
                foto: politico.foto ?? undefined,
                sexo: politico.sexo,
                raca: politico.raca,
                religiao: politico.religiao,
                ideologia: politico.ideologia,
                dataNascimento: nascimento,
                estadoId: politico.estadoId,
                partidoId: politico.partidoId,
                profissoes: {
                    connect: politico.profissoes?.map((profissao) => ({ id: profissao })) ?? []
                },
                projetos: {
                    connect: politico.projetos?.map((projeto) => ({ id: projeto })) ?? []
                }
            }
        });

        return resposta;
    }
}