import { Response } from "@/utils/types/api";
import axiosWithConfig from "../axiosWithConfig";
import { Profile, ProfilePayload } from ".";

export const getProfile = async () => {
  try {
    const response = await axiosWithConfig.get("/users");

    return response.data as Response<Profile>;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const updateProfile = async (body: ProfilePayload) => {
  try {
    const response = await axiosWithConfig.put("/users", body);

    return response.data as Response;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const deleteProfile = async () => {
  try {
    const response = await axiosWithConfig.delete("/users");

    return response.data as Response;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};
