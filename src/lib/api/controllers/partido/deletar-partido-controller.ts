import { RespostaApi } from "@/types/resposta-api";
import { DeletarPartidoService } from "../../service/partido/deletar-partido-service";
import { BuscarPartidoService } from "../../service/partido/buscar-partido-service";

export class DeletarPartidoController {
    async executar(id: string) {

        const serviceAuxiliar = new BuscarPartidoService()

        const existe = await serviceAuxiliar.BuscarPorID(id);

        if (!existe) {
            return new RespostaApi({
                sucesso:
                    false,
                mensagem:
                    "O partido já não existe!"
            }
            )
        }

        const service = new DeletarPartidoService();

        const resposta = await service.executar(id);

        if (resposta) {
            return new RespostaApi({
                sucesso:
                    true,
                mensagem:
                    "Partido deletado com sucesso"
            }
            )
        } else {
            return new RespostaApi({
                sucesso:
                    false,
                mensagem:
                    "Houve algum problema ao deletar o partido"
            }
            )
        }
    }

}