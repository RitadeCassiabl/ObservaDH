import { RespostaApi } from "@/types/resposta-api";
import { BuscarTemaService } from "../../service/tema/buscar-tema-service";
import { DeletarTemaService } from "../../service/tema/deletar-tema-service";

export class DeletarTemaController {
    async executar(id: string) {

        if (!id) {
            return new RespostaApi(
                false,
                "Falta informações para deletar o tema"
            )
        }

        const serviceAuxiliar = new BuscarTemaService()

        const existe = await serviceAuxiliar.buscarPorID(id);

        if (!existe) {
            return new RespostaApi(
                false,
                "O tema já não existe"
            )
        }

        const service = new DeletarTemaService();

        const resposta = await service.executar(id)

        if (resposta) {
            return new RespostaApi(
                true,
                `${resposta.nome} foi deletado`
            );
        } else {
            return new RespostaApi(
                false,
                "Houve algum problema ao deletar o tema"
            )
        }
    }
}