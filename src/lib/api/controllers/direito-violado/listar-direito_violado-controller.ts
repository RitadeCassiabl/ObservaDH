import { RespostaApi } from "@/types/resposta-api";
import { ListarDireitoVioladoService } from "../../service/direito-violado/listar-direito_violado_service";

export class ListarDireitoVioladoController {
  async executar() {
    const service = new ListarDireitoVioladoService();

    const resposta = await service.executar();

    if (resposta) {
      return new RespostaApi(
        true,
        `${resposta.length} direito(s) violado(s) foram encontrados`,
        resposta
      );
    } else {
      return new RespostaApi(false, "Nenhum direito violado foi encontrado");
    }
  }
}
