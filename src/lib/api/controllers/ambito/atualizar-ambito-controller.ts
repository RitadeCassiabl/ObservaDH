import { RespostaApi } from "@/types/resposta-api";
import { AtualizarAmbitoService } from "../../service/ambito/atualizar-ambito-service";
import { BuscarAmbitoService } from "../../service/ambito/buscar-ambito-service";

export class AtualizarAmbitoController {
  async executar(id: string, nome: string) {
    if (!id || !nome) {
      return new RespostaApi(
        false,
        "Estão faltando informações para a alteração do âmbito"
      );
    }

    const serviceAuxiliar = new BuscarAmbitoService();

    const existe = await serviceAuxiliar.buscarPorId(id);

    if (!existe) {
      return new RespostaApi(false, "O âmbito não existe");
    }

    const novoAmbito = await serviceAuxiliar.buscarPorNome(nome);

    if (novoAmbito) {
      return new RespostaApi(false, "O novo âmbito já existe");
    }

    const service = new AtualizarAmbitoService();

    const resposta = await service.executar(id, nome);

    if (resposta) {
      return new RespostaApi(
        true,
        "O âmbito foi atualizado com sucesso",
        resposta
      );
    } else {
      return new RespostaApi(
        false,
        "O âmbito não foi atualizado, por algum motivo"
      );
    }
  }
}
