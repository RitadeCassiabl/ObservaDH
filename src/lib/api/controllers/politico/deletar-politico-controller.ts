import { RespostaApi } from "@/types/resposta-api";
import { BuscarPoliticoService } from "../../service/politico/buscar-politico-service";
import { DeletarPoliticoService } from "../../service/politico/deletar-politico-service";

export class DeletarPoliticoController {
    async executar(id: string) {
        const serviceAuxiliar = new BuscarPoliticoService();

        const existe = await serviceAuxiliar.executar(id);

        if (!existe) {
            return new RespostaApi(
                false,
                "O politico não existe",
            )
        }

        const service = new DeletarPoliticoService();

        const resposta = await service.executar(id);

        if (resposta) {
            return new RespostaApi(
                true,
                "Político deletado"
            )
        } else {
            return new RespostaApi(
                false,
                "Houve um problema ao deletar o politico"
            )
        }
    }
}