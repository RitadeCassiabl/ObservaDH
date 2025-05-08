import { RespostaApi } from "@/types/resposta-api";
import { BuscarPoliticoService } from "../../service/politico/buscar-politico-service";

export class BuscarPoliticoController {
    async executar(id: string) {
        const controller = new BuscarPoliticoService();

        const resposta = await controller.executar(id);

        if (resposta) {
            return new RespostaApi(
                true,
                "Político encontrado com sucesso",
                resposta
            )
        } else {
            return new RespostaApi(
                false,
                "Político não encontrado",
            )
        }

    }
}