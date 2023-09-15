import config from "@/config";
import { Announcement } from "@/interfaces/announcement.interface";
import paramsSerializerUtils from "@/utils/paramsSerializer.utils";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const announcementsRTKProvider = createApi({
  reducerPath: "announcement",

  baseQuery: fetchBaseQuery({
      baseUrl: `${config.api.url}/api/announcement/`,
      credentials: "same-origin",

      paramsSerializer(params) {
          return paramsSerializerUtils(params);
      }
  }),
  tagTypes: ["Announcement"],
  endpoints: (builder) => ({
      getAnnouncement: builder.query<Announcement[], void>({
          query: () => ({
              url: ``,
              method: "GET",
          }),
      }),
  }),
})

export const { useGetAnnouncementQuery } = announcementsRTKProvider;
