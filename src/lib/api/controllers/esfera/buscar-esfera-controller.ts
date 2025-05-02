import { BuscarEsferaService } from "../../service/esfera/buscar-esfera-service";
import { RespostaApi } from "@/types/resposta-api";

export class BuscarEsferaController {
    async executar(id: string) {

        if (!id) {
            return new RespostaApi(
                false,
                "Estão faltando informações para a busca do âmbito"
            )
        }

        const service = new BuscarEsferaService();

        const resposta = await service.buscarPorId(id);

        if (resposta) {
            return new RespostaApi(
                true,
                "Esfera encontrado com sucesso",
                resposta
            );
        } else {
            return new RespostaApi(
                false,
                "Nenhum esfera foi encontrado"
            );
        }
    }
}