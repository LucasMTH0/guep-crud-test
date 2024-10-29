export type State = {
  id: number;
  nome: string;
  regiao: Region;
  sigla: string;
}

type Region = {
   id: number;
   sigla: string;
   nome: string;
}
