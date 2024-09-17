import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SignUpRequest, SignUpResponse, SignInRequest, SignInResponse } from "../types/auth";

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: '/api' }), // Use your base URL
    endpoints: (builder) => ({
      signUp: builder.mutation<SignUpResponse, SignUpRequest>({
        query: (data) => ({
          url: '/signup',
          method: 'POST',
          body: data,
        }),
      }),
      signIn: builder.mutation<SignInResponse, SignInRequest>({
        query: (data) => ({
          url: '/signin',
          method: 'POST',
          body: data,
        }),
      }),
    }),
  });

export const {useSignUpMutation, useSignInMutation} = authApi;