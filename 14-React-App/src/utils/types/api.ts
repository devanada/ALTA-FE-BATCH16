export type Response<T = any> = {
  message: string;
  payload: T;
};

export type PayloadPagination<T = any> = {
  totalItems: number;
  datas: T;
  totalPages: number;
  currentPage: number;
};
