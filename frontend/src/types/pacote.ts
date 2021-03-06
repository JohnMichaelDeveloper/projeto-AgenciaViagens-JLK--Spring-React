export type Pacote = {
  id: number;
  title: string;
  score: number;
  count: number;
  image: string;
}

export type PacotePage = {
  content: Pacote[];
  last: boolean;
  totalPages: number;
  totalElements: number;
  size: number;
  number: number;
  first: boolean;
  numberOfElements: number;
  empty: boolean;
}