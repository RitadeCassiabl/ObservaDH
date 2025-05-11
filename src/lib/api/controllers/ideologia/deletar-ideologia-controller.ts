import { RespostaApi } from "@/types/resposta-api";
import { DeletarIdeologiaService } from "../../service/ideologia/deletar-ideologia-service";
import { BuscarIdeologiaService } from "../../service/ideologia/buscar-ideologia-service";

export class DeletarIdeologiaController {
  async executar(id: string) {
    if (!id) {
      return new RespostaApi({
        sucesso:
          false,
        mensagem:
          "Estão faltando informações para deletar a ideologia"
      }
      );
    }

    const serviceAuxiliar = new BuscarIdeologiaService();

    const existe = await serviceAuxiliar.buscarPorId(id);

    if (!existe) {
      return new RespostaApi({ sucesso: false, mensagem: "A ideologia não existe" });
    }

    const service = new DeletarIdeologiaService();

    const resposta = await service.executar(id);

    if (resposta) {
      return new RespostaApi({ sucesso: true, mensagem: "A ideologia foi deletada com sucesso" });
    } else {
      return new RespostaApi({
        sucesso:
          false,
        mensagem:
          "Houve um erro na hora de deletar a ideologia"
      }
      );
    }
  }
}
