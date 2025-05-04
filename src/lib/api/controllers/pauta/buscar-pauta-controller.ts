import { RespostaApi } from "@/types/resposta-api";
import { BuscarPautaService } from "../../service/pauta/buscar-pauta-service";

export class BuscarPautaController {
    async executar(id: string) {
        if (!id) {
            return new RespostaApi(
                false,
                "Falta informações para a busca da pauta"
            )
        }

        const service = new BuscarPautaService();

        const resposta = await service.buscarPorID(id);

        if (resposta) {
            return new RespostaApi(
                false,
                "A pauta foi encontrada com sucesso",
                resposta
            )
        } else {
            return new RespostaApi(
                false,
                "A pauta não foi encontrada"
            )
        }
    }
}