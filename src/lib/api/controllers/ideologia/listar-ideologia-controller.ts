import { RespostaApi } from "@/types/resposta-api";
import { ListarIdeologiaService } from "../../service/ideologia/listar-ideologia-service";

export class ListarIdeologiaController {
  async executar() {
    const service = new ListarIdeologiaService();

    const resposta = await service.executar();

    if (resposta) {
      return new RespostaApi(
        true,
        `${resposta.length} ideologia(s) foram encontradas`,
        resposta
      );
    } else {
      return new RespostaApi(false, "Nenhuma ideologia foi encontrada");
    }
  }
}
