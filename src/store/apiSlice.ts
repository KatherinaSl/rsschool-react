import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type {
  ApiResponse,
  FullAstronomicalObjectInfo,
  FullAstronomicalObjectResponse,
} from '../interfaces/interfaces';

const PAGE_SIZE = 6;

export const astronomicalObjApi = createApi({
  reducerPath: 'astronomicalObjApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://stapi.co/api/v2/rest/astronomicalObject',
  }),
  tagTypes: ['AstronomicalObject'],
  endpoints: (build) => ({
    getAstronomicalObj: build.query<FullAstronomicalObjectInfo, string>({
      query: (cardId) => `?uid=${cardId}`,
      transformResponse: (response: FullAstronomicalObjectResponse) =>
        response.astronomicalObject,
      providesTags: (_res, _error, cardId) => [
        { type: 'AstronomicalObject', id: cardId },
      ],
    }),
    searchAstronomicalObj: build.mutation<
      ApiResponse,
      { title: string; pageNumber: number }
    >({
      query: ({ pageNumber, title }) => ({
        url: `/search?pageNumber=${pageNumber}&pageSize=${PAGE_SIZE}`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({ name: title }),
      }),
      transformResponse: (response: ApiResponse) => response,
      invalidatesTags: ['AstronomicalObject'],
    }),
  }),

  keepUnusedDataFor: 30
});

export const { useGetAstronomicalObjQuery, useSearchAstronomicalObjMutation } =
  astronomicalObjApi;
