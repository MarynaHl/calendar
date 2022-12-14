import { createSlice } from "@reduxjs/toolkit";

export const eventsSlice = createSlice({
    name: "events",
    initialState: {
        events: [],
        store: "Local",
    },
    reducers: {
        changeEvents(state, action) {
            state.events = action.payload;
        },
        changeStore(state, action) {
            state.store = action.payload;
        },
    },
});

export const { changeEvents, changeStore } = eventsSlice.actions;
