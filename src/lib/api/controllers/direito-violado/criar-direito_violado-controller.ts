import { DireitoViolado } from '@/types/direito-violado';
import { CriarDireitoVioladoService } from "../../service/direito-violado/criar-direito_violado-service";
import { RespostaApi } from '@/types/resposta-api';

export class CriarDireitoVioladoController {
    async executar(nome: string) {
        const service = new CriarDireitoVioladoService();

        const direitoViolado = new DireitoViolado(nome);

        const resposta = await service.executar(direitoViolado)

        if (resposta) {
            return new RespostaApi(true, "Direito Violado criado com sucesso", resposta);
        } else {
            return new RespostaApi(
                false,
                "Houve algum problema na criação do direito violado"
            );
        }
    }
}