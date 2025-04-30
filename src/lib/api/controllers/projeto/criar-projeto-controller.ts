import { Projeto } from "@/types/projeto";
import { CriarProjetoService } from "../../service/projeto/criar-projeto-service";
import { RespostaApi } from "@/types/resposta-api";
import { BuscarProjetoService } from "../../service/projeto/buscar-projeto-service";

export class CriarProjetoController {
  async executar(
    ano: string,
    numero_pl: string,
    pauta: string,
    justificativa: string,
    ementa: string,
    ambitoId: string,
    ambito: string
  ) {
    if (
      !ano ||
      !numero_pl ||
      !pauta ||
      !justificativa ||
      !ementa ||
      !ambitoId ||
      !ambito
    ) {
      return new RespostaApi(
        false,
        "Estão faltando informações para criar o Projeto de lei"
      );
    }

    const serviceAuxiliar = new BuscarProjetoService();

    const existe = await serviceAuxiliar.buscarPorNumeroPL(numero_pl);

    if (existe) {
      return new RespostaApi(false, "O Projeto de lei já existe");
    }

    const service = new CriarProjetoService();

    const projeto = new Projeto(
      ano,
      numero_pl,
      pauta,
      justificativa,
      ementa,
      ambitoId,
      ambito
    );

    const resposta = await service.executar(projeto);

    if (resposta) {
      return new RespostaApi(
        true,
        "Projeto de lei criado com sucesso",
        resposta
      );
    } else {
      return new RespostaApi(
        false,
        "Houve algum problema na criação do Projeto de lei"
      );
    }
  }
}
