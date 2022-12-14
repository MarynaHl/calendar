// REST API
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const eventsApi = createApi({
    reducerPath: "eventsApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://calendarrestapi.onrender.com/api/events",
    }),

    tagTypes: ["Events"],
    endpoints: (builder) => ({
        getEvents: builder.query({
            query: () => `/`,
            providesTags: ["Events"],
        }),

        deleteEvent: builder.mutation({
            query: (eventId) => ({
                url: `/${eventId}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Events"],
        }),

        addEvent: builder.mutation({
            query: (newEvent) => ({
                url: "/",
                method: "POST",
                body: {
                    title: newEvent.title,
                    description: newEvent.description,
                    date: newEvent.date,
                    time: newEvent.time,
                    currentDate: newEvent.currentDate,
                },
            }),
            invalidatesTags: ["Events"],
        }),

        updateEvent: builder.mutation({
            query: (newEvent) => ({
                url: `/${newEvent._id}`,
                method: "PUT",
                body: {
                    title: newEvent.title,
                    description: newEvent.description,
                    date: newEvent.date,
                    time: newEvent.time,
                    currentDate: newEvent.currentDate,
                    updated: newEvent.updated,
                },
            }),
            invalidatesTags: ["Events"],
        }),
    }),
});

export const {
    useGetEventsQuery,
    useDeleteEventMutation,
    useAddEventMutation,
    useUpdateEventMutation,
} = eventsApi;
