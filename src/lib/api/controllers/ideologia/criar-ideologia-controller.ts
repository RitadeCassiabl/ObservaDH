import { CriarIdeologiaService } from "../../service/ideologia/criar-ideologia-service";
import { RespostaApi } from "@/types/resposta-api";
import { BuscarIdeologiaService } from "../../service/ideologia/buscar-ideologia-service";
import { Ideologia } from "@/types/ideologia";

export class CriarIdeologiaController {
  async executar(nome: string) {
    if (!nome) {
      return new RespostaApi(
        false,
        "Estão faltando informações para criar a ideologia"
      );
    }

    const serviceAuxiliar = new BuscarIdeologiaService();

    const existe = await serviceAuxiliar.buscarPorNome(nome);

    if (existe) {
      return new RespostaApi(false, "A ideologia já existe");
    }

    const service = new CriarIdeologiaService();

    const ideologia = new Ideologia(nome);

    const resposta = await service.executar(ideologia);

    if (resposta) {
      return new RespostaApi(true, "A ideologia foi criada com sucesso", resposta);
    } else {
      return new RespostaApi(
        false,
        "Houve algum problema na criação da ideologia"
      );
    }
  }
}
