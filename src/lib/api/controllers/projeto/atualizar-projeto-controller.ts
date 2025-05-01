import { RespostaApi } from "@/types/resposta-api";
import { AtualizarProjetoService } from "../../service/projeto/atualizar-projeto-service";
import { BuscarProjetoService } from "../../service/projeto/buscar-projeto-service";

export class AtualizarProjetoController {
    async executar(id: string, ano: string,
        numero_pl: string,
        pauta: string,
        justificativa: string,
        ementa: string,
        ambitoId: string,
        ambito: string) {

        if (!id || !ano ||
            !numero_pl ||
            !pauta ||
            !justificativa ||
            !ementa ||
            !ambitoId ||
            !ambito) {
            return new RespostaApi(
                false,
                "Estão faltando informações para a alteração do Projeto de lei"
            );

        }

        const serviceAuxiliar = new BuscarProjetoService()

        const existe = await serviceAuxiliar.buscarPorId(id);

        if (!existe) {
            return new RespostaApi(
                false,
                "O Projeto de lei não existe"
            );
        }

        const novoProjeto = await serviceAuxiliar.buscarPorNumeroPL(numero_pl);
        
        if (novoProjeto) {
            return new RespostaApi(
                false,
                "O novo Projeto de lei já existe"
            );
        }


        const service = new AtualizarProjetoService();

        const resposta = await service.executar(id, ano,
            numero_pl,
            pauta,
            justificativa,
            ementa,
            ambitoId);

        if (resposta) {
            return new RespostaApi(
                true,
                "O Projeto de lei foi atualizado com sucesso",
                resposta
            );
        } else {
            return new RespostaApi(
                false,
                "O Projeto de lei não foi atualizado, por algum motivo"
            );
        }
    }
}