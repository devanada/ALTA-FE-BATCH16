import { Response } from "@/utils/types/api";
import axiosWithConfig from "../axiosWithConfig";
import { LoginSchema, RegisterSchema } from ".";

export const loginAccount = async (body: LoginSchema) => {
  try {
    const response = await axiosWithConfig.post("/login", body);

    return response.data as Response<{ token: string }>;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const registerAccount = async (body: RegisterSchema) => {
  try {
    const response = await axiosWithConfig.post("/register", body);

    return response.data as Response;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};
