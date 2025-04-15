import { Profissao } from "@/lib/database/models/Profissao";
import { CriarProfissaoService } from "../../service/profissao/CriarProfissaoService";
import { RespostaApi } from "@/lib/database/models/RespostaApi";

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
