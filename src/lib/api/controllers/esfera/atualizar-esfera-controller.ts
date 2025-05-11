import { RespostaApi } from "@/domain/models/resposta-api";
import { AtualizarEsferaService } from "../../service/esfera/atualizar-esfera-service";
import { BuscarEsferaService } from "../../service/esfera/buscar-esfera-service";

export class AtualizarEsferaController {
  async executar(id: string, nome: string) {
    if (!id || !nome) {
      return new RespostaApi({
        sucesso:
          false,
        mensagem:
          "Estão faltando informações para a alteração da esfera"
      }
      );
    }

    const serviceAuxiliar = new BuscarEsferaService();

    const existe = await serviceAuxiliar.buscarPorId(id);

    if (!existe) {
      return new RespostaApi({ sucesso: false, mensagem: "A esfera não existe" });
    }

    const novoEsfera = await serviceAuxiliar.buscarPorNome(nome);

    if (novoEsfera) {
      return new RespostaApi({ sucesso: false, mensagem: "A nova esfera já existe" });
    }

    const service = new AtualizarEsferaService();

    const resposta = await service.executar(id, nome);

    if (resposta) {
      return new RespostaApi({
        sucesso:
          true,
        mensagem:
          "A esfera foi atualizada com sucesso",
        dados: resposta
      }
      );
    } else {
      return new RespostaApi({
        sucesso:
          false,
        mensagem:
          "A esfera não foi atualizada, por algum motivo"
      }
      );
    }
  }
}
