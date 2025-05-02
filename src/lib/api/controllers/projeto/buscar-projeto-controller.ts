import { BuscarProjetoService } from "../../service/projeto/buscar-projeto-service";
import { RespostaApi } from "@/types/resposta-api";

export class BuscarProjetoController {
  async executar(id: string) {
    if (!id) {
      return new RespostaApi(
        false,
        "Estão faltando informações para a busca do projeto de lei"
      );
    }

    const service = new BuscarProjetoService();

    const resposta = await service.buscarPorId(id);

    if (resposta) {
      return new RespostaApi(
        true,
        "Projeto de lei encontrado com sucesso",
        resposta
      );
    } else {
      return new RespostaApi(false, "Nenhum projeto de lei foi encontrado");
    }
  }
}
