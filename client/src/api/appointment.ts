import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  GetServiceResponse,
  GetConsultantsResponse,
  AppointmentRequest,
  CreateGetAppointment,
  UpdateAppointment,
  DeleteAppointment,
} from "../types/appointment";

const BASE_API = import.meta.env.VITE_REACT_BASE_API_URL;

export const appointmentApi = createApi({
  reducerPath: "appointmentApi",
  tagTypes: ["ServicesOffered", "ConsultantByService", "AppointmentByUser"],
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_API,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    getServices: builder.query<GetServiceResponse[], void>({
      query: () => "/services/name",
      providesTags: ["ServicesOffered"],
    }),
    getConsultants: builder.query<GetConsultantsResponse[], string | void>({
      query: (services) => ({
        url: "/consultant/view",
        params: services ? { services } : {},
      }),
      providesTags: ["ConsultantByService"],
    }),
    // CRUD Operation
    createAppointment: builder.mutation<
      CreateGetAppointment,
      AppointmentRequest
    >({
      query: (appointment) => ({
        url: "/appointments/create",
        method: "POST",
        body: appointment,
      }),
    }),
    getAppointment: builder.query<CreateGetAppointment, void>({
      query: () => ({
        url: "/appointments/view",
        provideTags: ["AppointmentByUser"],
      }),
    }),
    updateAppointment: builder.mutation<
      UpdateAppointment,
      {
        appointment_id: string;
        appointmentData: AppointmentRequest;
      }
    >({
      query: ({ appointment_id, appointmentData }) => ({
        url: `appointments/update/${appointment_id}`,
        method: "PUT",
        body: appointmentData,
      }),
    }),
    deleteAppointment: builder.mutation<
      DeleteAppointment,
      {
        appointment_id: string;
        appointmentData: AppointmentRequest;
      }
    >({
      query: ({ appointment_id }) => ({
        url: `appointments/delete/${appointment_id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetServicesQuery,
  useGetConsultantsQuery,
  useCreateAppointmentMutation,
  useGetAppointmentQuery,
  useUpdateAppointmentMutation,
  useDeleteAppointmentMutation,
} = appointmentApi;
