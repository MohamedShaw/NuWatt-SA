export interface Page<T> {
  products: T[];
  skip: number;
  limit: number;
  total: number;
}
