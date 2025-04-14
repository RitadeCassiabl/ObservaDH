//TODO: modificar ao implementar político
class Profissao {
  id?: number;
  nome: string;

  politicos?: string[];

  constructor(nome: string, politicos?: string[]) {
    this.nome = nome;
    this.politicos = politicos;
  }
}
export { Profissao };
