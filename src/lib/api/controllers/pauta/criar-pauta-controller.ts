
import { Pauta } from "@/types/pauta";
import { RespostaApi } from "@/types/resposta-api";
import { BuscarPautaService } from "../../service/pauta/buscar-pauta-service";
import { CriarPautaService } from "../../service/pauta/criar-pauta-service";

export class CriarPautaController {
    async executar(nome: string) {

        if (!nome) {
            return new RespostaApi(
                false,
                "Falta informações para a criação da pauta"
            )
        }

        const serviceAuxiliar = new BuscarPautaService()

        const existe = await serviceAuxiliar.buscarPorNome(nome);

        if (existe) {
            return new RespostaApi(
                false,
                "A pauta já existe"
            )
        }

        const service = new CriarPautaService();

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