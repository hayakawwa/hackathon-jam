import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://foundation-jd.gl.at.ply.gg:35726/',
});

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 1 });

export const api = createApi({
  reducerPath: 'splitApi',
  tagTypes: ['Apps'],
  baseQuery: baseQueryWithRetry,
  endpoints: () => ({})
});
