import { RespostaApi } from "@/domain/models/resposta-api";
import { ListarEstadoService } from "../../service/estado/listar-estado-service";

export class ListarEstadoController {
  async executar() {
    const service = new ListarEstadoService();

    const resposta = await service.executar();

    if (resposta) {
      return new RespostaApi({
        sucesso:
          true,
        mensagem:
          `${resposta.length} estado(s) foram encontrados`,
        dados: resposta
      }
      );
    } else {
      return ({ sucesso: false, mensagem: "Nenhum estado foi encontrado" });
    }
  }
}
