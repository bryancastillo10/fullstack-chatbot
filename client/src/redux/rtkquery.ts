import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SignUpRequest, SignUpResponse, SignInRequest, SignInResponse } from "../types/auth";

const BASE_API = import.meta.env.VITE_REACT_BASE_API_URL

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ 
      baseUrl: BASE_API,
      credentials:'include'
    }), 
    endpoints: (builder) => ({
      signUp: builder.mutation<SignUpResponse, SignUpRequest>({
        query: (data) => ({
          url: '/auth/signup',
          method: 'POST',
          body: data,
        }),
      }),
      signIn: builder.mutation<SignInResponse, SignInRequest>({
        query: (data) => ({
          url: '/auth/signin',
          method: 'POST',
          body: data,
        }),
      }),
    }),
  });

export const {useSignUpMutation, useSignInMutation} = authApi;