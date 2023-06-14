import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const commentsApi = createApi({
  reducerPath: 'commentsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.reddit.com' }),
  endpoints: (builder) => ({
    getComments: builder.query({
      query: (permalink: string) => `${permalink}.json`,
    }),
  }),
});

export const { useGetCommentsQuery } = commentsApi;
