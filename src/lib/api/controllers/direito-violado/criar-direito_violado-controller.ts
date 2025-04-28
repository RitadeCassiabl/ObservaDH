import { DireitoViolado } from '@/types/direito-violado';
import { CriarDireitoVioladoService } from "../../service/direito-violado/criar-direito_violado-service";
import { RespostaApi } from '@/types/resposta-api';
import { BuscarDireitoVioladoService } from '../../service/direito-violado/buscar-direito_violado-service';

export class CriarDireitoVioladoController {

    async executar(nome: string) {

        if (!nome) {
            return new RespostaApi(
                false,
                "Está faltando infomação para a criação do direito violado"
            );
        }

        const serviceAuxiliar = new BuscarDireitoVioladoService();

        const existe = await serviceAuxiliar.buscarPorNome(nome);
        console.log(nome, existe)
        if (existe) {
            return new RespostaApi(
                false,
                "O direito violado já existe"
            );
        }

        const direitoViolado = new DireitoViolado(nome);

        const service = new CriarDireitoVioladoService();

        const resposta = await service.executar(direitoViolado)

        if (resposta) {
            return new RespostaApi(
                true,
                "Direito Violado criado com sucesso",
                resposta
            );
        } else {
            return new RespostaApi(
                false,
                "Houve algum problema na criação do direito violado"
            );
        }
    }
}