import { CriarAmbitoService } from "../../service/ambito/criar-ambito-service";
import { RespostaApi } from "@/types/resposta-api";
import { BuscarAmbitoService } from "../../service/ambito/buscar-ambito-service";
import { Ambito } from "@/types/ambito";

export class CriarAmbitoController {
  async executar(nome: string) {
    if (!nome) {
      return new RespostaApi(
        false,
        "Estão faltando informações para criar o âmbito"
      );
    }

    const serviceAuxiliar = new BuscarAmbitoService();

    const existe = await serviceAuxiliar.buscarPorNome(nome);

    if (existe) {
      return new RespostaApi(false, "O Âmbito já existe");
    }

    const service = new CriarAmbitoService();

    const ambito = new Ambito(nome);

    const resposta = await service.executar(ambito);

    if (resposta) {
      return new RespostaApi(
        true,
        "Âmbito criado com sucesso",
        resposta
      );
    } else {
      return new RespostaApi(
        false,
        "Houve algum problema na criação do âmbito"
      );
    }
  }
}
