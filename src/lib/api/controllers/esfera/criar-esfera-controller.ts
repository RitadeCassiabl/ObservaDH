import { CriarEsferaService } from "../../service/esfera/criar-esfera-service";
import { RespostaApi } from "@/domain/models/resposta-api";
import { BuscarEsferaService } from "../../service/esfera/buscar-esfera-service";
import { Esfera } from "@/domain/models/esfera";

export class CriarEsferaController {
  async executar(nome: string) {
    if (!nome) {
      return new RespostaApi({
        sucesso:
          false,
        mensagem:
          "Estão faltando informações para criar a esfera"
      }
      );
    }

    const serviceAuxiliar = new BuscarEsferaService();

    const existe = await serviceAuxiliar.buscarPorNome(nome);

    if (existe) {
      return new RespostaApi({ sucesso: false, mensagem: "A esfera já existe" });
    }

    const service = new CriarEsferaService();

    const esfera = new Esfera({ nome: nome });

    const resposta = await service.executar(esfera);

    if (resposta) {
      return new RespostaApi({ sucesso: true, mensagem: "A esfera foi criada com sucesso", dados: resposta });
    } else {
      return new RespostaApi({
        sucesso:
          false,
        mensagem:
          "Houve algum problema na criação da esfera"
      });
    }
  }
}
