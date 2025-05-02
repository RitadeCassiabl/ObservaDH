import { RespostaApi } from "@/types/resposta-api";
import { DeletarIdeologiaService } from "../../service/ideologia/deletar-ideologia-service";
import { BuscarIdeologiaService } from "../../service/ideologia/buscar-ideologia-service";

export class DeletarIdeologiaController {
  async executar(id: string) {
    if (!id) {
      return new RespostaApi(
        false,
        "Estão faltando informações para deletar a ideologia"
      );
    }

    const serviceAuxiliar = new BuscarIdeologiaService();

    const existe = await serviceAuxiliar.buscarPorId(id);

    if (!existe) {
      return new RespostaApi(false, "A ideologia não existe");
    }

    const service = new DeletarIdeologiaService();

    const resposta = await service.executar(id);

    if (resposta) {
      return new RespostaApi(true, "A ideologia foi deletada com sucesso");
    } else {
      return new RespostaApi(
        false,
        "Houve um erro na hora de deletar a ideologia"
      );
    }
  }
}
