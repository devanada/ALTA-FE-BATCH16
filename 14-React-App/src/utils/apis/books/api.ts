import { Response, PayloadPagination } from "@/utils/types/api";
import { Book } from ".";
import axiosWithConfig from "../axiosWithConfig";

export const getBooks = async () => {
  try {
    const response = await axiosWithConfig.get(
      "https://hells-kitchen.onrender.com/api/v1/books"
    );

    return response.data as Response<PayloadPagination<Book[]>>;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const getDetailBook = async (id_book: string) => {
  try {
    const response = await axiosWithConfig.get(
      `https://hells-kitchen.onrender.com/api/v1/books/${id_book}`
    );

    return response.data as Response<Book>;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};
