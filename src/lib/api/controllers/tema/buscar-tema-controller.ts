import { RespostaApi } from "@/types/resposta-api";
import { BuscarTemaService } from "../../service/tema/buscar-tema-service";

export class BuscarTemaController {
    async executar(nome: string) {
        if (!nome) {
            return new RespostaApi(
                false,
                "Falta informações para a busca do tema"
            )
        }

        const service = new BuscarTemaService();

        const resposta = await service.executar(nome);

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