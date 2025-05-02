import { RespostaApi } from "@/types/resposta-api";
import { BuscarDireitoVioladoService } from "../../service/direito-violado/buscar-direito_violado-service";

export class BuscarDireitoVioladoController {
    async executar(id: string) {

        if (!id) {
            return new RespostaApi(
                false,
                "Está faltando informação para a busca da profissão"
            )
        }

        const service = new BuscarDireitoVioladoService();

        const resposta = await service.buscarPorId(id);

        if (resposta) {
            return new RespostaApi(
                true,
                "O direito violado foi encontrado com sucesso",
                resposta
            );
        } else {
            return new RespostaApi(
                false,
                "Nenhum direito violado foi encontrado"
            );
        }
    }
}