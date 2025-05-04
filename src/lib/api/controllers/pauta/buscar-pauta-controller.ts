import { RespostaApi } from "@/types/resposta-api";
import { BuscarTemaService } from "../../service/pauta/buscar-pauta-service";


export class BuscarTemaController {
    async executar(id: string) {
        if (!id) {
            return new RespostaApi(
                false,
                "Falta informações para a busca da pauta"
            )
        }

        const service = new BuscarTemaService();

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