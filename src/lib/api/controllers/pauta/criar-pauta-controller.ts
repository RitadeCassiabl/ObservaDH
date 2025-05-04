
import { Pauta } from "@/types/pauta";
import { RespostaApi } from "@/types/resposta-api";
import { CriarTemaService } from "../../service/pauta/criar-pauta-service";
import { BuscarTemaService } from "../../service/pauta/buscar-pauta-service";

export class CriarTemaController {
    async executar(nome: string) {

        if (!nome) {
            return new RespostaApi(
                false,
                "Falta informações para a criação da pauta"
            )
        }

        const serviceAuxiliar = new BuscarTemaService()

        const existe = await serviceAuxiliar.buscarPorNome(nome);

        if (existe) {
            return new RespostaApi(
                false,
                "A pauta já existe"
            )
        }

        const service = new CriarTemaService();

        const pauta = new Pauta(nome)

        const resposta = await service.executar(pauta)

        if (resposta) {
            return new RespostaApi(
                true,
                "Pauta criado com sucesso",
                resposta
            )
        } else {
            return new RespostaApi(
                false,
                "Houve algum problema na criação da pauta"
            )
        }
    }
}