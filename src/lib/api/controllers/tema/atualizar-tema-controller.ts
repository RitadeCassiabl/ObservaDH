import { RespostaApi } from "@/types/resposta-api";
import { BuscarTemaService } from "../../service/tema/buscar-tema-service";
import { AtualizarTemaService } from "../../service/tema/atualizar-tema-service";

export class AtualizarTemaController {

    async executar(id: string, nome: string) {

        if (!id || !nome) {
            return new RespostaApi(
                false,
                "Faltam informações para atualizar o tema."
            );
        }

        const buscarTemaService = new BuscarTemaService();

        const temaExistente = await buscarTemaService.buscarPorID(id);
        if (!temaExistente) {
            return new RespostaApi(
                false,
                `O tema não existe.`
            );
        }

        const novoTemaExistente = await buscarTemaService.buscarPorNome(nome);
        if (novoTemaExistente) {
            return new RespostaApi(
                false,
                `O novo tema já existe.`
            );
        }

        const service = new AtualizarTemaService()

        const resposta = await service.executar(id, nome);

        if (resposta) {
            return new RespostaApi(
                true,
                `O tema foi atualizado para ${nome || ""} com sucesso`,
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