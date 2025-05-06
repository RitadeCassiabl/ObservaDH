import { RespostaApi } from "@/types/resposta-api";
import { AtualizarEsferaService } from "../../service/esfera/atualizar-esfera-service";
import { BuscarEsferaService } from "../../service/esfera/buscar-esfera-service";

export class AtualizarEsferaController {
  async executar(id: string, nome: string) {
    if (!id || !nome) {
      return new RespostaApi(
        false,
        "Estão faltando informações para a alteração da esfera"
      );
    }

    const serviceAuxiliar = new BuscarEsferaService();

    const existe = await serviceAuxiliar.buscarPorId(id);

    if (!existe) {
      return new RespostaApi(false, "A esfera não existe");
    }

    const novoEsfera = await serviceAuxiliar.buscarPorNome(nome);

    if (novoEsfera) {
      return new RespostaApi(false, "A nova esfera já existe");
    }

    const service = new AtualizarEsferaService();

    const resposta = await service.executar(id, nome);

    if (resposta) {
      return new RespostaApi(
        true,
        "A esfera foi atualizada com sucesso",
        resposta
      );
    } else {
      return new RespostaApi(
        false,
        "A esfera não foi atualizada, por algum motivo"
      );
    }
  }
}
