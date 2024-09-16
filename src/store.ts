import { configureStore } from "@reduxjs/toolkit";
import usersDataSlice from "./features/usersData/usersDataSlice";

export const store = configureStore({
  reducer: {
    usersData: usersDataSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

