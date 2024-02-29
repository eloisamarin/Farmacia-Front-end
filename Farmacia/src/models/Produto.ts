import Categoria from "./Categoria";

export default interface Produto{
  id: number;
  nome: string;
  descricao: string;
  quantidade: number;
  preco: number;
  datavalidade: string;
  categoria: Categoria | null
  
}