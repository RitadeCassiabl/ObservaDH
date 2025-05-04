import { RespostaApi } from "@/types/resposta-api";
import { BuscarTemaService } from "../../service/pauta/buscar-pauta-service";
import { DeletarTemaService } from "../../service/pauta/deletar-pauta-service";

export class DeletarTemaController {
    async executar(id: string) {

        if (!id) {
            return new RespostaApi(
                false,
                "Falta informações para deletar a pauta"
            )
        }

        const serviceAuxiliar = new BuscarTemaService()

        const existe = await serviceAuxiliar.buscarPorID(id);

        if (!existe) {
            return new RespostaApi(
                false,
                "A pauta já não existe"
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
                "Houve algum problema ao deletar a pauta"
            )
        }
    }
}