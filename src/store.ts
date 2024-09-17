import { configureStore } from "@reduxjs/toolkit";
import usersDataSlice from "./features/usersData/usersDataSlice";
import filtersSlice from "./features/filters/filtersSlice";

export const store = configureStore({
  reducer: {
    usersData: usersDataSlice,
    filters: filtersSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

