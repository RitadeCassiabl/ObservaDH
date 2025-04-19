import { RespostaApi } from "@/types/resposta-api";
import { BuscarProfissaoService } from "../../service/profissao/buscar-profissao-service";

export class BuscarProfissaoController {
    async executar(nome: string) {
        const service = new BuscarProfissaoService();

        const resposta = await service.executar(nome)

        if (resposta) {
            return new RespostaApi(true, "Profissão encontrada com sucesso", resposta)
        } else {
            return new RespostaApi(false, "A profissão não foi encontrada")
        }
    }
}