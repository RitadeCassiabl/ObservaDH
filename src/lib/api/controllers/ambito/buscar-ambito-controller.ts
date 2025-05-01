import { BuscarAmbitoService } from "../../service/ambito/buscar-ambito-service";
import { RespostaApi } from "@/types/resposta-api";

export class BuscarAmbitoController {
    async executar(id: string) {

        if (!id) {
            return new RespostaApi(
                false,
                "Estão faltando informações para a busca do âmbito"
            )
        }

        const service = new BuscarAmbitoService();

        const resposta = await service.buscarPorId(id);

        if (resposta) {
            return new RespostaApi(
                true,
                "Âmbito encontrado com sucesso",
                resposta
            );
        } else {
            return new RespostaApi(
                false,
                "Nenhum âmbito foi encontrado"
            );
        }
    }
}