import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { FullAstronomicalObjectInfo } from '../interfaces/interfaces';

export const astronomicalObjApi = createApi({
  reducerPath: 'astronomicalObjApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://stapi.co/api/v2/rest/astronomicalObject',
  }),
  endpoints: (builder) => ({
    getAstronomicalObj: builder.query<FullAstronomicalObjectInfo, string>({
      query: (cardId) => `?uid=${cardId}`,
    }),
  }),

  keepUnusedDataFor: Number(import.meta.env.KEEP_UNUSED_DATA_FOR),
});

export const { useGetAstronomicalObjQuery } = astronomicalObjApi;
