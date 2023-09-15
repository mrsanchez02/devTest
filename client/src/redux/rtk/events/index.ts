import config from "@/config";
import paramsSerializerUtils from "@/utils/paramsSerializer.utils";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { IRecentEventRequest, IRecentEventResponse } from "./event.interfaces";

export const userRTKProvider = createApi({
    reducerPath: "events",
    baseQuery: fetchBaseQuery({
        baseUrl: `${config.api.url}/api/events`,
        credentials: "include",
        paramsSerializer(params) {
            return paramsSerializerUtils(params);
        },
    }),
    tagTypes: ["events"],
    endpoints: (builder) => {
        return ({
            getAllTask: builder.query<IRecentEventRequest, IRecentEventResponse>({
                query: () => ({
                    url: "/",
                    method: "GET",
                }),
                async onCacheEntryAdded(arg, { updateCachedData, cacheDataLoaded, cacheEntryRemoved }) {
                }
            }),
        });
    },
});

export const { useGetAllTaskQuery } = userRTKProvider;
