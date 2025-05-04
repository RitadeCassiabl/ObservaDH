import { RespostaApi } from "@/types/resposta-api";
import { BuscarTemaService } from "../../service/pauta/buscar-pauta-service";
import { AtualizarTemaService } from "../../service/pauta/atualizar-pauta-service";

export class AtualizarTemaController {

    async executar(id: string, nome: string) {

        if (!id || !nome) {
            return new RespostaApi(
                false,
                "Faltam informações para atualizar a pauta."
            );
        }

        const buscarTemaService = new BuscarTemaService();

        const temaExistente = await buscarTemaService.buscarPorID(id);
        if (!temaExistente) {
            return new RespostaApi(
                false,
                `A pauta não existe.`
            );
        }

        const novoTemaExistente = await buscarTemaService.buscarPorNome(nome);
        if (novoTemaExistente) {
            return new RespostaApi(
                false,
                `O novo pauta já existe.`
            );
        }

        const service = new AtualizarTemaService()

        const resposta = await service.executar(id, nome);

        if (resposta) {
            return new RespostaApi(
                true,
                `A pauta foi atualizado para ${nome || ""} com sucesso`,
                resposta
            )
        } else {
            return new RespostaApi(
                false,
                "Houve algum problema na atualização da pauta"
            )
        }

    }
}