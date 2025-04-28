import { RespostaApi } from "@/types/resposta-api";
import { BuscarTemaService } from "../../service/tema/buscar-tema-service";

export class BuscarTemaController {
    async executar(id: string) {
        if (!id) {
            return new RespostaApi(
                false,
                "Falta informações para a busca do tema"
            )
        }

        const service = new BuscarTemaService();

        const resposta = await service.buscarPorID(id);

        if (resposta) {
            return new RespostaApi(
                false,
                "O tema foi encontrado com sucesso",
                resposta
            )
        } else {
            return new RespostaApi(
                false,
                "O tema não foi encontrado"
            )
        }
    }
}