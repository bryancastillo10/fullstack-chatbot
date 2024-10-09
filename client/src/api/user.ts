import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  UpdateProfileInfoRequest,
  UpdateProfileInfoResponse,
  UpdateProfilePictureRequest,
  DeleteProfileResponse,
} from "../types/user";

const BASE_API = import.meta.env.VITE_REACT_BASE_API_URL;

export const userApi = createApi({
  reducerPath: "userApi",
  tagTypes: ["UpdateProfileInfo"],
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_API,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    updateProfileInfo: builder.mutation<
      UpdateProfileInfoResponse,
      { id: string; data: UpdateProfileInfoRequest }
    >({
      query: ({ id, data }) => ({
        url: `/update/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["UpdateProfileInfo"],
    }),
    uploadProfilePicture: builder.mutation<
      UpdateProfileInfoResponse,
      UpdateProfilePictureRequest
    >({
      query: ({ id, file }) => {
        const formData = new FormData();
        formData.append("file", file);
        return {
          url: `/profile-picture/update/${id}`,
          method: "POST",
          body: formData,
        };
      },
    }),
    getProfilePicture: builder.query<UpdateProfileInfoResponse, string>({
      query: (id) => ({
        url: `/getpicture/${id}`,
      }),
    }),
    deleteProfile: builder.mutation<DeleteProfileResponse, string>({
      query: (id) => ({
        url: `/delete/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useUpdateProfileInfoMutation,
  useUploadProfilePictureMutation,
  useGetProfilePictureQuery,
  useDeleteProfileMutation,
} = userApi;
