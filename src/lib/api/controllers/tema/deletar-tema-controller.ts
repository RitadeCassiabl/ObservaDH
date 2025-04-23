import { RespostaApi } from "@/types/resposta-api";
import { BuscarTemaService } from "../../service/tema/buscar-tema-service";
import { DeletarTemaService } from "../../service/tema/deletar-tema-service";

export class DeletarTemaController {
    async executar(nome: string) {

        if (!nome) {
            return new RespostaApi(
                false,
                "Falta informações para deletar o tema"
            )
        }

        const serviceAuxiliar = new BuscarTemaService()

        const existe = await serviceAuxiliar.executar(nome);

        if (!existe) {
            return new RespostaApi(
                false,
                "O tema não exites"
            )
        }

        const service = new DeletarTemaService();

        const resposta = await service.executar(nome)

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