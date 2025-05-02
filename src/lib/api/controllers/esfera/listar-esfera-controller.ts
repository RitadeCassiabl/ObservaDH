import { RespostaApi } from "@/types/resposta-api";
import { ListarEsferaService } from "../../service/esfera/listar-esfera-service";

export class ListarEsferaController {
  async executar() {
    const service = new ListarEsferaService();

    const resposta = await service.executar();

    if (resposta) {
      return new RespostaApi(
        true,
        `${resposta.length} esfera(s) foram encontradas`,
        resposta
      );
    } else {
      return new RespostaApi(false, "Nenhuma esfera foi encontrada");
    }
  }
}
