import { RespostaApi } from "@/types/resposta-api";
import { BuscarDireitoVioladoService } from "../../service/direito-violado/buscar-direito_violado-service";

export class BuscarDireitoVioladoController {
    async executar(nome: string) {

        if (!nome) {
            return new RespostaApi(
                false,
                "Está faltando informação para a busca da profissão"
            )
        }

        const service = new BuscarDireitoVioladoService();

        const resposta = await service.executar(nome);

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