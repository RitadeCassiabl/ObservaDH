import { RespostaApi } from "@/types/resposta-api";
import { AtualizarDireitoVioladoService } from "../../service/direito-violado/atualizar-direito_violado-service";

export class AtualizarDireitoVioladoController {
    async executar(nome: string, novoNome: string) {
        const service = new AtualizarDireitoVioladoService();

        const resposta = await service.executar(nome, novoNome);

        if (resposta) {
            return new RespostaApi(
                true,
                "O Direito violado foi atualizado com sucesso",
                resposta)
        } else {
            return new RespostaApi(
                false,
                "O Direito violado não foi atualizado, por algum motivo"
            )
        }
    }
}