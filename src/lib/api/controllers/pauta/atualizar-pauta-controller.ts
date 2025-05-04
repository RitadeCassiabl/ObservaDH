import { RespostaApi } from "@/types/resposta-api";
import { BuscarPautaService } from "../../service/pauta/buscar-pauta-service";
import { AtualizarPautaService } from "../../service/pauta/atualizar-pauta-service";


export class AtualizarPautaController {

    async executar(id: string, nome: string) {

        if (!id || !nome) {
            return new RespostaApi(
                false,
                "Faltam informações para atualizar a pauta."
            );
        }

        const buscarPautaService = new BuscarPautaService();

        const temaExistente = await buscarPautaService.buscarPorID(id);
        
        if (!temaExistente) {
            return new RespostaApi(
                false,
                `A pauta não existe.`
            );
        }

        const novoTemaExistente = await buscarPautaService.buscarPorNome(nome);
        if (novoTemaExistente) {
            return new RespostaApi(
                false,
                `O novo pauta já existe.`
            );
        }

        const service = new AtualizarPautaService()

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