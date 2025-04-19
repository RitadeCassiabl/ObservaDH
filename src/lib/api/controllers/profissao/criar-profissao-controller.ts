import { Profissao } from "@/types/profissao";
import { CriarProfissaoService } from "../../service/profissao/criar-profissao-service";
import { RespostaApi } from "@/types/resposta-api";

export class CriarProfissaoController {
  async executar(nome: string) {
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
