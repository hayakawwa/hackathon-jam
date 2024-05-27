import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://51.250.98.93/',
});

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 1 });

export const api = createApi({
  reducerPath: 'splitApi',
  tagTypes: ['Apps'],
  baseQuery: baseQueryWithRetry,
  endpoints: () => ({})
});
