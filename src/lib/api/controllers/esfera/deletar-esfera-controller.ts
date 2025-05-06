import { RespostaApi } from "@/types/resposta-api";
import { DeletarEsferaService } from "../../service/esfera/deletar-esfera-service";
import { BuscarEsferaService } from "../../service/esfera/buscar-esfera-service";

export class DeletarEsferaController {
  async executar(id: string) {
    if (!id) {
      return new RespostaApi(
        false,
        "Estão faltando informações para deletar a esfera"
      );
    }

    const serviceAuxiliar = new BuscarEsferaService();

    const existe = await serviceAuxiliar.buscarPorId(id);

    if (!existe) {
      return new RespostaApi(false, "A esfera não existe");
    }

    const service = new DeletarEsferaService();

    const resposta = await service.executar(id);

    if (resposta) {
      return new RespostaApi(true, "A esfera foi deletada com sucesso");
    } else {
      return new RespostaApi(
        false,
        "Houve um erro na hora de deletar a esfera"
      );
    }
  }
}
