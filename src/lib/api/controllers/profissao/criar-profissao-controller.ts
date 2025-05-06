import { Profissao } from "@/types/profissao";
import { CriarProfissaoService } from "../../service/profissao/criar-profissao-service";
import { RespostaApi } from "@/types/resposta-api";
import { BuscarProfissaoService } from "../../service/profissao/buscar-profissao-service";

export class CriarProfissaoController {
  async executar(nome: string) {

    if (!nome) {
      return new RespostaApi(false, "Faltam informações para criar a profissão");
    }

    const serviceAuxiliar = new BuscarProfissaoService();

    const existe = await serviceAuxiliar.buscarPorNome(nome)

    if (existe) {
      return new RespostaApi(
        false,
        "A profissão já existe"
      );
    }
    
    const service = new CriarProfissaoService();

    const profissao = new Profissao(nome);

    const resposta = await service.executar(profissao);

    if (resposta) {
      return new RespostaApi(true, "Profissão criada com sucesso", resposta);
    } else {
      return new RespostaApi(
        false,
        "Houve algum problema na criação da profissão"
      );
    }
  }
}
