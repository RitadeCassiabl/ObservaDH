import { RespostaApi } from "@/types/resposta-api";
import { AtualizarEstadoService } from "../../service/estado/atualizar-estado-service";
import { BuscarEstadoService } from "../../service/estado/buscar-estado-service";

export class AtualizarEstadoController {
  async executar(id: string, nome: string) {
    if (!id || !nome) {
      return new RespostaApi(
        false,
        "Estão faltando informações para a alteração do estado"
      );
    }

    const serviceAuxiliar = new BuscarEstadoService();

    const existe = await serviceAuxiliar.buscarPorId(id);

    if (!existe) {
      return new RespostaApi(false, "O estado não existe");
    }

    const novoEstado = await serviceAuxiliar.buscarPorNome(nome);

    if (novoEstado) {
      return new RespostaApi(false, "O novo estado já existe");
    }

    const service = new AtualizarEstadoService();

    const resposta = await service.executar(id, nome);

    if (resposta) {
      return new RespostaApi(
        true,
        "O estado foi atualizado com sucesso",
        resposta
      );
    } else {
      return new RespostaApi(
        false,
        "O estado não foi atualizado, por algum motivo"
      );
    }
  }
}
