import { BuscarIdeologiaService } from "../../service/ideologia/buscar-ideologia-service";
import { RespostaApi } from "@/types/resposta-api";

export class BuscarIdeologiaController {
  async executar(id: string) {
    if (!id) {
      return new RespostaApi({
        sucesso:
          false,
        mensagem:
          "Estão fatando informações para a busca da ideologia"
      }
      );
    }

    const service = new BuscarIdeologiaService();

    const resposta = await service.buscarPorId(id);

    if (resposta) {
      return new RespostaApi({
        sucesso:
          true,
        mensagem:
          "A ideologia foi encontrada com sucesso",
        dados:
          resposta
      }
      );
    } else {
      return new RespostaApi({ sucesso: false, mensagem: "Nenhuma ideologia foi encontrada" }

      );
    }
  }
}
