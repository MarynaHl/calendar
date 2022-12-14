import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { configureStore } from "@reduxjs/toolkit";

import { eventsApi } from "./events/eventsApi"; // REST API
import { eventsSlice } from "./events/eventsSlice";

const eventsPersistConfig = {
    key: "events",
    storage,
};

const eventsReducer = persistReducer(eventsPersistConfig, eventsSlice.reducer);

export const store = configureStore({
    reducer: {
        [eventsApi.reducerPath]: eventsApi.reducer, // REST API
        events: eventsReducer,
    },
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
        eventsApi.middleware, // REST API
    ],
});

export const persistor = persistStore(store);
