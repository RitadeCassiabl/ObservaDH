import { RespostaApi } from "@/types/resposta-api";
import { DeletarProfissaoService } from "../../service/profissao/deletar-profissao-service";
import { BuscarProfissaoService } from "../../service/profissao/buscar-profissao-service";

export class DeletarProfissaoController {
    async executar(id: string) {

        if (!id) {
            return new RespostaApi(false, "Faltam informações para deletar a profissão")
        }

        const serviceAuxiliar = new BuscarProfissaoService()

        const existe = await serviceAuxiliar.buscarPorId(id)

        if (!existe) {
            return new RespostaApi(false, "A profissão já não existe")
        }

        const service = new DeletarProfissaoService()

        const resposta = await service.executar(id)

        if (resposta) {
            return new RespostaApi(true, "A profissão foi deletada com sucesso", resposta)
        } else {
            return new RespostaApi(false, "Houve algum erro para deletar o profissão")
        }
    }
}