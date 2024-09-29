import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { GetServiceResponse } from '../types/appointment';

const BASE_API = import.meta.env.VITE_REACT_BASE_API_URL;

export const appointmentApi = createApi({
    reducerPath:"appointmentApi",
    tagTypes:["ServicesOffered"],
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_API
    }),
    endpoints: (builder) => ({
        getServices: builder.query<GetServiceResponse[],void>({
            query: () => '/services/name',
            providesTags:["ServicesOffered"]
        })
    })
});

export const { useGetServicesQuery } = appointmentApi;