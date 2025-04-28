import { RespostaApi } from "@/types/resposta-api";
import { AtualizarDireitoVioladoService } from "../../service/direito-violado/atualizar-direito_violado-service";
import { BuscarDireitoVioladoService } from "../../service/direito-violado/buscar-direito_violado-service";

export class AtualizarDireitoVioladoController {
    async executar(id: string, nome: string) {

        if (!id || !nome) {
            return new RespostaApi(
                false,
                "falta alguma informação para a alteração do direito violado"
            );

        }

        const serviceAuxiliar = new BuscarDireitoVioladoService()

        const existe = await serviceAuxiliar.buscarPorId(id);

        if (!existe) {
            return new RespostaApi(
                false,
                "O direito violado não existe"
            );
        }

        const service = new AtualizarDireitoVioladoService();

        const resposta = await service.executar(id, nome);

        if (resposta) {
            return new RespostaApi(
                true,
                "O Direito violado foi atualizado com sucesso",
                resposta
            );
        } else {
            return new RespostaApi(
                false,
                "O Direito violado não foi atualizado, por algum motivo"
            );
        }
    }
}