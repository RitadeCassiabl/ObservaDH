
import { Tema } from "@/types/tema";
import { RespostaApi } from "@/types/resposta-api";
import { CriarTemaService } from "../../service/tema/criar-tema-service";
import { BuscarTemaService } from "../../service/tema/buscar-tema-service";

export class CriarTemaController {
    async executar(nome: string) {

        if (!nome) {
            return new RespostaApi(
                false,
                "Falta informações para a criação do tema"
            )
        }

        const serviceAuxiliar = new BuscarTemaService()

        const existe = await serviceAuxiliar.buscarPorNome(nome);

        if (existe) {
            return new RespostaApi(
                false,
                "O tema já existe"
            )
        }

        const service = new CriarTemaService();

        const tema = new Tema(nome)

        const resposta = await service.executar(tema)

        if (resposta) {
            return new RespostaApi(
                true,
                "Tema criado com sucesso",
                resposta
            )
        } else {
            return new RespostaApi(
                false,
                "Houve algum problema na criação do tema"
            )
        }
    }
}