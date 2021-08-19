import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const DOGS_API_KEY =
  process.env.REACT_APP_DOGS_API_KEY || "REACT_APP_DOGS_API_KEY is missing";

const DOGS_API_BASE_URL = "https://api.thedogapi.com/v1";

export interface Breed {
  id: string;
  name: string;
  image: {
    url: string;
  };
}

export interface BreedSearch {
  id: string;
  name: string;
  reference_image_id: string;
}

export interface BreedImage {
  id: string;
  height: number;
  width: number;
  url: string;
}

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: DOGS_API_BASE_URL,
    prepareHeaders(headers) {
      headers.set("x-api-key", DOGS_API_KEY);
      return headers;
    },
  }),
  endpoints(builder) {
    return {
      fetchBreeds: builder.query<Breed[], number | void>({
        query(limit = 10) {
          return `/breeds?limit=${limit}`;
        },
      }),
      searchBreeds: builder.query<BreedSearch[], string>({
        query(query = "") {
          return `/breeds/search?q=${query}`;
        },
      }),
      getBreedImage: builder.query<BreedImage, string>({
        query(id) {
          return `/images/${id}`;
        },
      }),
    };
  },
});

export const {
  useFetchBreedsQuery,
  useSearchBreedsQuery,
  useGetBreedImageQuery,
} = apiSlice;
