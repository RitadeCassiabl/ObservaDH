import { BuscarProjetoService } from "../../service/projeto/buscar-projeto-service";
import { RespostaApi } from "@/domain/models/resposta-api";

export class BuscarProjetoController {
  async executar(id: string) {
    if (!id) {
      return new RespostaApi({
        sucesso:
          false,
        mensagem:
          "Estão faltando informações para a busca do projeto de lei"
      }
      );
    }

    const service = new BuscarProjetoService();

    const resposta = await service.buscarPorId({ id: id });

    if (resposta) {
      return new RespostaApi({
        sucesso:
          true,
        mensagem:
          "Projeto de lei encontrado com sucesso",
        dados:
          resposta
      }
      );
    } else {
      return new RespostaApi({ sucesso: false, mensagem: "Nenhum projeto de lei foi encontrado"});
    }
  }
}
