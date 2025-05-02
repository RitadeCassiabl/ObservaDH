import { RespostaApi } from "@/types/resposta-api";
import { DeletarEstadoService } from "../../service/estado/deletar-estado-service";
import { BuscarEstadoService } from "../../service/estado/buscar-estado-service";

export class DeletarEstadoController {
  async executar(id: string) {
    if (!id) {
      return new RespostaApi(
        false,
        "Estão faltando informações para deletar o estado"
      );
    }

    const serviceAuxiliar = new BuscarEstadoService();

    const existe = await serviceAuxiliar.buscarPorId(id);

    if (!existe) {
      return new RespostaApi(false, "O estado não existe");
    }

    const service = new DeletarEstadoService();

    const resposta = await service.executar(id);

    if (resposta) {
      return new RespostaApi(true, "O estado foi deletado com sucesso");
    } else {
      return new RespostaApi(
        false,
        "Houve um erro na hora de deletar o estado"
      );
    }
  }
}
