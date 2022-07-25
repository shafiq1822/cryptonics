import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'X-RapidAPI-Key': '1646ecc13fmsh0249a4d2228ac27p1def55jsn04d5d3362ac5',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl  = 'https://coinranking1.p.rapidapi.com';

const createRequests = (url) => ({ url, headers: cryptoApiHeaders});

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequests(`/coins?limit=${count}`),
        })
    })
});

export const {
    useGetCryptosQuery,
} = cryptoApi;