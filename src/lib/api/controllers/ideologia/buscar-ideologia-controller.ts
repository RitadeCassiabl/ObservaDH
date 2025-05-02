import { BuscarIdeologiaService } from "../../service/ideologia/buscar-ideologia-service";
import { RespostaApi } from "@/types/resposta-api";

export class BuscarIdeologiaController {
  async executar(id: string) {
    if (!id) {
      return new RespostaApi(
        false,
        "Estão faltando informações para a busca da ideologia"
      );
    }

    const service = new BuscarIdeologiaService();

    const resposta = await service.buscarPorId(id);

    if (resposta) {
      return new RespostaApi(
        true,
        "A ideologia foi encontrada com sucesso",
        resposta
      );
    } else {
      return new RespostaApi(false, "Nenhuma ideologia foi encontrada");
    }
  }
}
