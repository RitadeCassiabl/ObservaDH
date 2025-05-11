import { BuscarEstadoService } from "../../service/estado/buscar-estado-service";
import { RespostaApi } from "@/domain/models/resposta-api";

export class BuscarEstadoController {
  async executar(id: string) {
    if (!id) {
      return new RespostaApi({
        sucesso:
          false,
        mensagem:
          "Estão faltando informações para a busca do estado"
      }
      );
    }

    const service = new BuscarEstadoService();

    const resposta = await service.buscarPorId(id);

    if (resposta) {
      return new RespostaApi({
        sucesso:
          true,
        mensagem:
          "O estado foi encontrado com sucesso",
        dados:
          resposta
      }
      );
    } else {
      return new RespostaApi({ sucesso: false, mensagem: "Nenhum estado foi encontrado" });
    }
  }
}
