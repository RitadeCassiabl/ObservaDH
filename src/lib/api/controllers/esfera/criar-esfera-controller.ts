import { CriarEsferaService } from "../../service/esfera/criar-esfera-service";
import { RespostaApi } from "@/types/resposta-api";
import { BuscarEsferaService } from "../../service/esfera/buscar-esfera-service";
import { Esfera } from "@/types/esfera";

export class CriarEsferaController {
  async executar(nome: string) {
    if (!nome) {
      return new RespostaApi(
        false,
        "Estão faltando informações para criar a esfera"
      );
    }

    const serviceAuxiliar = new BuscarEsferaService();

    const existe = await serviceAuxiliar.buscarPorNome(nome);

    if (existe) {
      return new RespostaApi(false, "A esfera já existe");
    }

    const service = new CriarEsferaService();

    const esfera = new Esfera(nome);

    const resposta = await service.executar(esfera);

    if (resposta) {
      return new RespostaApi(true, "A esfera foi criada com sucesso", resposta);
    } else {
      return new RespostaApi(
        false,
        "Houve algum problema na criação da esfera"
      );
    }
  }
}
