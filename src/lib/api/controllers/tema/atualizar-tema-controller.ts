import { RespostaApi } from "@/types/resposta-api";
import { BuscarTemaService } from "../../service/tema/buscar-tema-service";
import { AtualizarTemaService } from "../../service/tema/atualizar-tema-service";

export class AtualizarTemaController {

    async executar(nome: string, novoNome: string) {

        if (!nome || !novoNome) {
            return new RespostaApi(
                false,
                "Faltam informações para atualizar o tema."
            );
        }

        const buscarTemaService = new BuscarTemaService();

        const temaExistente = await buscarTemaService.executar(nome);
        if (!temaExistente) {
            return new RespostaApi(
                false,
                `O tema "${nome}" não existe.`
            );
        }

        const novoTemaExistente = await buscarTemaService.executar(novoNome);
        if (novoTemaExistente) {
            return new RespostaApi(
                false,
                `O tema "${novoNome}" já existe.`
            );
        }

        const service = new AtualizarTemaService()

        const resposta = await service.executar(nome, novoNome);

        if (resposta) {
            return new RespostaApi(
                true,
                `O tema ${nome || ""} foi atualizado para ${novoNome || ""} com sucesso`,
                resposta
            )
        } else {
            return new RespostaApi(
                false,
                "Houve algum problema na atualização do tema"
            )
        }

    }
}