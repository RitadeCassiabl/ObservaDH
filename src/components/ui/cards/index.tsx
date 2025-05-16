import CardApresentacao from "./card-apresentacao";
import CardBio from "./card-bio";
import CardComponenteParlamentar from "./card-componente-parlamentar";
import CardComponentePartido from "./card-componente-partido";
import CardEsfera from "./card-esfera";
import CardInformativo from "./card-informativo";
import CardItemRenderizacao from "./card-item-renderizacao";
import CardLegenda from "./card-legenda";
import CardMiniProjetos from "./card-mini-projeto";
import CardParlamentar from "./card-parlamentar";
import CardProjeto from "./card-projeto";
import CardRenderizarTexto from "./card-renderizar-texto";
import CardSaibaMais from "./card-saiba-mais";
import CardStatus from "./card-status";
import CardStatusItem from "./card-status-item";

const Card = {
	Bio: CardBio,
	Esfera: CardEsfera,
	Status: CardStatus,
	Legenda: CardLegenda,
	Projeto: CardProjeto,
	SaibaMais: CardSaibaMais,
	StatusItem: CardStatusItem,
	Parlamentar: CardParlamentar,
	Informativo: CardInformativo,
	MiniProjeto: CardMiniProjetos,
	Apresentacao: CardApresentacao,
	RenderizarTexto: CardRenderizarTexto,
	RenderizacaoItem: CardItemRenderizacao,
	ComponentePartido: CardComponentePartido,
	ComponenteParlamentar: CardComponenteParlamentar,
};

export default Card;
