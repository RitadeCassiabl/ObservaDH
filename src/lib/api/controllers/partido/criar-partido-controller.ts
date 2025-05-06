import { Partido } from "@/types/partido";
import { CriarPartidoService } from "../../service/partido/criar-partido-service";
import { RespostaApi } from "@/types/resposta-api";

class CriarPartidoController {
    async executar(nome: string, codigo: string) {
        const service = new CriarPartidoService();


        const partido = new Partido(nome, codigo);

        const resposta = await service.executar(partido)

        if (resposta) {
            return new RespostaApi(true,
                "Partido criado com sucesso",
                resposta)
        } else {
            return new RespostaApi(false,
                "Houve algum problema na criação do partido"
            )
        }
    }
}

export { CriarPartidoController }