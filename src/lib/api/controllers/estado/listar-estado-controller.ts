import { RespostaApi } from "@/types/resposta-api";
import { ListarEstadoService } from "../../service/estado/listar-estado-service";

export class ListarEstadoController {
  async executar() {
    const service = new ListarEstadoService();

    const resposta = await service.executar();

    if (resposta) {
      return new RespostaApi(
        true,
        `${resposta.length} estado(s) foram encontrados`,
        resposta
      );
    } else {
      return new RespostaApi(false, "Nenhum estado foi encontrado");
    }
  }
}
