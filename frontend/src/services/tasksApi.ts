import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Task } from "../types/task";

export const tasksApi = createApi({
  reducerPath: "tasksApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/" }),
  tagTypes: ["Task"],
  endpoints: (builder) => ({
    getTasks: builder.query<Task[], void>({
      query: () => "tasks",
    }),

    // TODO: Implement addTask

    // TODO: Implement deleteTask
  }),
});

export const {
  useGetTasksQuery,
  // TODO: Export addTask and deleteTask hooks once implemented
} = tasksApi;
