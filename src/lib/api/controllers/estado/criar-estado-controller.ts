import { CriarEstadoService } from "../../service/estado/criar-estado-service";
import { RespostaApi } from "@/types/resposta-api";
import { BuscarEstadoService } from "../../service/estado/buscar-estado-service";
import { Estado } from "@/types/estado";

export class CriarEstadoController {
  async executar(nome: string) {
    if (!nome) {
      return new RespostaApi(
        false,
        "Estão faltando informações para criar o estado"
      );
    }

    const serviceAuxiliar = new BuscarEstadoService();

    const existe = await serviceAuxiliar.buscarPorNome(nome);

    if (existe) {
      return new RespostaApi(false, "O estado já existe");
    }

    const service = new CriarEstadoService();

    const estado = new Estado(nome);

    const resposta = await service.executar(estado);

    if (resposta) {
      return new RespostaApi(true, "O estado foi criado com sucesso", resposta);
    } else {
      return new RespostaApi(
        false,
        "Houve algum problema na criação do estado"
      );
    }
  }
}
