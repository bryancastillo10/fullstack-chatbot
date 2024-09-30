import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetServiceResponse, GetConsultantsResponse } from '../types/appointment';


const BASE_API = import.meta.env.VITE_REACT_BASE_API_URL;

export const appointmentApi = createApi({
    reducerPath:"appointmentApi",
    tagTypes:["ServicesOffered","ConsultantByService"],
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_API
    }),
    endpoints: (builder) => ({
        getServices: builder.query<GetServiceResponse[],void>({
            query: () => '/services/name',
            providesTags:["ServicesOffered"]
        }),
        getConsultants: builder.query<GetConsultantsResponse[], string | void>({
            query: (services) => (
                {
                    url:"/consultant/view",
                    params: services ? {services} : {}
                }),
            providesTags:["ConsultantByService"]
        }),
    }),
});

export const { useGetServicesQuery, useGetConsultantsQuery } = appointmentApi;