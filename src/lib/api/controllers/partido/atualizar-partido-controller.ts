import { Partido } from "@/types/partido";
import { BuscarPartidoService } from "../../service/partido/buscar-partido-service";
import { AtualizarPartidoService } from "../../service/partido/atualizar-partido-service";
import { RespostaApi } from "@/types/resposta-api";

export class AtualizarPartidoController {
    async executar(id: string, nome: string, codigo: string, politicos: string[], projetos: string[]) {

        const buscarService = new BuscarPartidoService();
        const atualizarService = new AtualizarPartidoService();


        const partidoExistente = await buscarService.BuscarPorID(id);

        if (!partidoExistente) {
            return new RespostaApi(false, "Partido não encontrado");
        }

        if (nome !== partidoExistente.nome) {

            const partidoComMesmoNome = await buscarService.BuscarPorNome(nome);
            if (partidoComMesmoNome && partidoComMesmoNome.id !== id) {
                return new RespostaApi(false, "Já existe um partido com este nome");
            }
        }

        const partidoAtualizado = new Partido(nome, codigo, politicos, id, projetos);

        const resultado = await atualizarService.executar(partidoAtualizado);

        if (resultado) {
            return new RespostaApi(true, "Partido atualizado com sucesso", resultado);
        } else {
            return new RespostaApi(false, "Erro ao atualizar o partido");
        }

    }
}