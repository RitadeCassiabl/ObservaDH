import { RespostaApi } from "@/types/resposta-api";
import { DeletarDireitoVioladoService } from "../../service/direito-violado/deletar-direito_violado-service";
import { BuscarDireitoVioladoService } from "../../service/direito-violado/buscar-direito_violado-service";

export class DeletarDireitoVioladoController {
    async executar(nome: string) {

        if (!nome) {
            return new RespostaApi(
                false,
                "faltam informação para deletar o direito violado"
            )
        }

        const serviceAuxiliar = new BuscarDireitoVioladoService();

        const existe = await serviceAuxiliar.executar(nome)

        if (!existe) {
            return new RespostaApi(
                false,
                "O direito violado já não existe"
            );
        }

        const service = new DeletarDireitoVioladoService();

        const resposta = await service.executar(nome);

        if (resposta) {
            return new RespostaApi(
                true,
                "O direito violado foi deletado com sucesso"
            );
        } else {
            return new RespostaApi(
                false,
                "O direito violado não foi deletado por algum motivo"
            );
        }
    }
}