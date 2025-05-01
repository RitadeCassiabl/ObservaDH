import { RespostaApi } from "@/types/resposta-api";
import { DeletarAmbitoService } from "../../service/ambito/deletar-ambito-service";
import { BuscarAmbitoService } from "../../service/ambito/buscar-ambito-service";

export class DeletarAmbitoController {
    async executar(id: string) {

        if (!id) {
            return new RespostaApi(
                false,
                "Estão faltando informações para deletar o âmbito"
            )
        }

        const serviceAuxiliar = new BuscarAmbitoService();

        const existe = await serviceAuxiliar.buscarPorId(id)

        if (!existe) {
            return new RespostaApi(
                false,
                "O âmbito não existe"
            );
        }

        const service = new DeletarAmbitoService();

        const resposta = await service.executar(id);

        if (resposta) {
            return new RespostaApi(
                true,
                "O âmbito foi deletado com sucesso"
            );
        } else {
            return new RespostaApi(
                false,
                "Houve um erro na hora de deletar o âmbito"
            );
        }
    }
}