import { BuscarEstadoService } from "../../service/estado/buscar-estado-service";
import { RespostaApi } from "@/types/resposta-api";

export class BuscarEstadoController {
  async executar(id: string) {
    if (!id) {
      return new RespostaApi(
        false,
        "Estão faltando informações para a busca do estado"
      );
    }

    const service = new BuscarEstadoService();

    const resposta = await service.buscarPorId(id);

    if (resposta) {
      return new RespostaApi(
        true,
        "O estado foi encontrado com sucesso",
        resposta
      );
    } else {
      return new RespostaApi(false, "Nenhum estado foi encontrado");
    }
  }
}
