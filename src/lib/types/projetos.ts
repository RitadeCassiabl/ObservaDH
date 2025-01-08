export type parlamentar = {
  url_imagem: string;
  nome: string;
  genero: string;
  religiao: string;
  raca: string;
  esfera: string;
  estado: string;
  profissao: string;
  partido: string;
  ideologia: string;
};

export type ProjetoLei = {
  id: string;
  ano: string;
  numero_pl: string;
  pauta: string;
  parlamentares: parlamentar[];
  ementa: string;
};


export type miniProjeto = {
  id: string;
  numero: string;
  ano: string;
  pauta: string;
}