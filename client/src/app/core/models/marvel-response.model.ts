export interface MarvelResponse<T> {
  status: string;
  code: number;
  data: {
    count: number;
    limit: number;
    offset: number;
    total: number;
    results: Array<T>;
  }
}
