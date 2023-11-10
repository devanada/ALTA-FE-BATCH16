import { Response } from "@/utils/types/api";
import axiosWithConfig from "../axiosWithConfig";
import { BodyLogin, BodyRegister } from ".";

export const registerAccount = async (body: BodyRegister) => {
  try {
    const response = await axiosWithConfig.post(
      "https://hells-kitchen.onrender.com/api/v1/register",
      body
    );

    return response.data as Response;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const loginAccount = async (body: BodyLogin) => {
  try {
    const response = await axiosWithConfig.post(
      "https://hells-kitchen.onrender.com/api/v1/login",
      body
    );

    return response.data as Response<{ token: string }>;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};
