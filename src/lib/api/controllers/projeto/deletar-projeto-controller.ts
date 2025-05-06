import { RespostaApi } from "@/types/resposta-api";
import { DeletarProjetoService } from "../../service/projeto/deletar-projeto-service";
import { BuscarProjetoService } from "../../service/projeto/buscar-projeto-service";

export class DeletarProjetoController {
  async executar(id: string) {
    if (!id) {
      return new RespostaApi(
        false,
        "Estão faltando informações para deletar o projeto de lei"
      );
    }

    const serviceAuxiliar = new BuscarProjetoService();

    const existe = await serviceAuxiliar.buscarPorId(id);

    if (!existe) {
      return new RespostaApi(false, "O projeto de lei não existe");
    }

    const service = new DeletarProjetoService();

    const resposta = await service.executar(id);

    if (resposta) {
      return new RespostaApi(true, "O projeto de lei foi deletado com sucesso");
    } else {
      return new RespostaApi(
        false,
        "Houve um erro na hora de deletar o projeto de lei"
      );
    }
  }
}
