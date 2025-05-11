
import { Pauta } from "@/types/pauta";
import { RespostaApi } from "@/types/resposta-api";
import { BuscarPautaService } from "../../service/pauta/buscar-pauta-service";
import { CriarPautaService } from "../../service/pauta/criar-pauta-service";

export class CriarPautaController {
    async executar(nome: string) {

        if (!nome) {
            return new RespostaApi({
                sucesso:
                    false,
                mensagem:
                    "Falta informações para a criação da pauta"
            }
            )
        }

        const serviceAuxiliar = new BuscarPautaService()

        const existe = await serviceAuxiliar.buscarPorNome(nome);

        if (existe) {
            return new RespostaApi({
                sucesso:
                    false,
                mensagem:
                    "A pauta já existe"
            }
            )
        }

        const service = new CriarPautaService();

        const pauta = new Pauta({ nome: nome })

        const resposta = await service.executar(pauta)

        if (resposta) {
            return new RespostaApi({
                sucesso:
                    true,
                mensagem:
                    "Pauta criado com sucesso",
                dados:
                    resposta
            }
            )
        } else {
            return new RespostaApi({
                sucesso:
                    false,
                mensagem:
                    "Houve algum problema na criação da pauta"
            }
            )
        }
    }
}