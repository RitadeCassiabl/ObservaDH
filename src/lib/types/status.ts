export interface Status {
  titulo: string;
  valor: number;
}

export interface DadosNacionais {
  dados: Status[];
}

export interface Pautas {
  pautas: Status[];
}

export interface StatusType {
  dados: DadosNacionais;
  pautas: Pautas;
}
