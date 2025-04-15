//TODO: modificar ao implementar político
class Profissao {
  id?: string;
  nome: string;
  politicos?: string[];

  constructor(nome: string, politicos?: string[], id?: string) {
    this.nome = nome;
    this.politicos = politicos;
    this.id = id;
  }
}
export { Profissao };
