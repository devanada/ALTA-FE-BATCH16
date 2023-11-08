import { Response, PayloadPagination } from "@/utils/types/api";
import { booksSampleData, Book } from ".";

export const getBooks = async () => {
  return new Promise<Response<PayloadPagination<Book[]>>>((resolve) => {
    setTimeout(() => {
      const response: Response<PayloadPagination<Book[]>> = {
        message: "",
        payload: {
          totalItems: 3,
          datas: booksSampleData,
          totalPages: 1,
          currentPage: 1,
        },
      };

      resolve(response);
    }, 1000);
  });
};
