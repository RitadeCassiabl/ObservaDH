export type Status = {
  titulo: string;
  valor: number;
}

export type DadosNacionais = {
  dados: Status[];
}

export type Pautas = {
  pautas: Status[];
}

export type StatusType = {
  dados: DadosNacionais;
  pautas: Pautas;
}
