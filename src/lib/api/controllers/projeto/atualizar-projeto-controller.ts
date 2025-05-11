import { RespostaApi } from "@/types/resposta-api";
import { AtualizarProjetoService } from "../../service/projeto/atualizar-projeto-service";
import { BuscarProjetoService } from "../../service/projeto/buscar-projeto-service";

export class AtualizarProjetoController {
  async executar(
    {
      id,
      ano,
      ementa,
      pautaId,
      esferaId,
      numeroPl,
      justificativa,
    }:
      {
        id: string,
        ano: string,
        ementa: string,
        pautaId: string,
        esferaId: string
        numeroPl: string,
        justificativa: string,
      }
  ) {
    if (
      !id ||
      !ano ||
      !numeroPl ||
      !pautaId ||
      !justificativa ||
      !ementa ||
      !esferaId
    )
      return new RespostaApi(
        {
          sucesso: false,
          mensagem: "Estão faltando informações para a alteração do projeto de lei"
        }
      );

    const serviceAuxiliar = new BuscarProjetoService();

    const existe = await serviceAuxiliar.buscarPorId({ id: id });

    if (!existe) {
      return new RespostaApi(
        {
          sucesso: false,
          mensagem: "O projeto de lei não existe"
        }
      );
    }

    const novoProjeto = await serviceAuxiliar.buscarPorNumeroPL({ numeroPl: numeroPl });

    if (novoProjeto) {
      return new RespostaApi(

        {
          sucesso: false,
          mensagem: "O novo projeto de lei já existe"
        }
      );
    }

    const service = new AtualizarProjetoService();

    const resposta = await service.executar(
      {
        id: id,
        ano: ano,
        ementa: ementa,
        pautaId: pautaId,
        esferaId: esferaId,
        numeroPl: numeroPl,
        justificativa: justificativa,
      }
    );

    if (resposta) {
      return new RespostaApi(
        {
          sucesso: true,
          mensagem: "O projeto de lei foi atualizado com sucesso",
          dados: resposta
        }
      );
    } else {
      return new RespostaApi(
        {
          sucesso: false,
          mensagem: "O projeto de lei não foi atualizado, por algum motivo"
        }
      );
    }
  }
}
