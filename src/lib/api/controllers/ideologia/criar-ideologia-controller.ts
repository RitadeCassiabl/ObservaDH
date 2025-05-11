import { CriarIdeologiaService } from "../../service/ideologia/criar-ideologia-service";
import { RespostaApi } from "@/types/resposta-api";
import { BuscarIdeologiaService } from "../../service/ideologia/buscar-ideologia-service";
import { Ideologia } from "@/types/ideologia";

export class CriarIdeologiaController {
  async executar(nome: string) {
    if (!nome) {
      return ({
        sucesso:
          false,
        mensagem:
          "Estão faltando informações para criar a ideologia"
      }
      );
    }

    const serviceAuxiliar = new BuscarIdeologiaService();

    const existe = await serviceAuxiliar.buscarPorNome(nome);

    if (existe) {
      return ({ sucesso: false, mensagem: "A ideologia já existe" });
    }

    const service = new CriarIdeologiaService();

    const ideologia = new Ideologia({ nome: nome });

    const resposta = await service.executar(ideologia);

    if (resposta) {
      return new RespostaApi({ sucesso: true, mensagem: "A ideologia foi criada com sucesso", dados: resposta });
    } else {
      return new RespostaApi({
        sucesso:
          false,
        mensagem:
          "Houve algum problema na criação da ideologia"
      }
      );
    }
  }
}
