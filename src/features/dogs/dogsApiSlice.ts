import { createApi , fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const DOGS_API_KEYS  = "cbfb51a2-84b6-4025-a3e2-ed8616edf311"

interface Breed{
    id : string,
    name : string,
    image : {
        url : string
    }
}

const apiSlice = createApi({
    reducerPath : 'api',
    baseQuery : fetchBaseQuery( {
        baseUrl : 'https://api.thedogapi.com/v1' , 
        prepareHeaders(headers){
            headers.set('api-key' , DOGS_API_KEYS)
            return headers
        }
    }),
    endpoints(builder){
        return {
            fetchBreeds : builder.query<Breed[] , number | void>({
                query(limit = 10) {
                    return `/breeds?limit=${limit}`
                }
            })
        }
    } 
})
