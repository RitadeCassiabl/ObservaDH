import { BuscarEsferaService } from "../../service/esfera/buscar-esfera-service";
import { RespostaApi } from "@/types/resposta-api";

export class BuscarEsferaController {
  async executar(id: string) {
    if (!id) {
      return new RespostaApi({
        sucesso:
          false,
        mensagem:
          "Estão faltando informações para a busca da esfera"
      }
      );
    }

    const service = new BuscarEsferaService();

    const resposta = await service.buscarPorId(id);

    if (resposta) {
      return new RespostaApi({
        sucesso:
          true,
        mensagem:
          "A esfera foi encontrada com sucesso",
        dados:
          resposta
      }
      );
    } else {
      return new RespostaApi({ sucesso: false, mensagem: "Nenhuma esfera foi encontrada" });
    }
  }
}
