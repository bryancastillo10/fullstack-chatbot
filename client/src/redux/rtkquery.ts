import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SignUpRequest,  SignInRequest, LogoutResponse, AuthSuccessResponse } from "../types/auth";

const BASE_API = import.meta.env.VITE_REACT_BASE_API_URL

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ 
      baseUrl: BASE_API,
      credentials:'include'
    }), 
    endpoints: (builder) => ({
      signUp: builder.mutation<AuthSuccessResponse, SignUpRequest>({
        query: (data) => ({
          url: '/auth/signup',
          method: 'POST',
          body: data,
        }),
      }),
      signIn: builder.mutation<AuthSuccessResponse, SignInRequest>({
        query: (data) => ({
          url: '/auth/signin',
          method: 'POST',
          body: data,
        }),
      }),
      signOut: builder.mutation<LogoutResponse, void>({
        query:() => ({
          url:'/auth/logout',
          method:'POST'
        }),
      })
    }),
  });

export const {useSignUpMutation, useSignInMutation} = authApi;