import { Partido } from "@/types/partido";
    import { CriarPartidoService } from "../../service/partido/criar-partido-service";
    import { RespostaApi } from "@/types/resposta-api";
    import { BuscarPartidoService } from "../../service/partido/buscar-partido-service";

    class CriarPartidoController {
        async executar(nome: string, codigo: string) {

            if (!nome || !codigo) {
                return new RespostaApi(false,
                    "Nome e código são obrigatórios"
                )
            }
            const serviceAuxiliar = new BuscarPartidoService()

            const nomeExiste = await serviceAuxiliar.BuscarPorNome(nome);
            if (nomeExiste) {
                return new RespostaApi(false,
                    "Já existe um partido com este nome"
                )
            }

            const codigoexiste = await serviceAuxiliar.BuscarPorCodigo(codigo);

            if (codigoexiste) {
                return new RespostaApi(false,
                    "Já existe um partido com este código"
                )
            }

            const service = new CriarPartidoService();

            const partido = new Partido(nome, codigo);

            const resposta = await service.executar(partido)

            if (resposta) {
                return new RespostaApi(true,
                    "Partido criado com sucesso",
                    resposta)
            } else {
                return new RespostaApi(false,
                    "Houve algum problema na criação do partido"
                )
            }
        }
    }

    export { CriarPartidoController }