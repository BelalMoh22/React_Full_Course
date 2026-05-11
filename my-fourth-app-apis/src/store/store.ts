import { configureStore } from "@reduxjs/toolkit";
import weatherApiReducer from "../features/weather/weatherApiSlice";

const store = configureStore({
  reducer: {
    weatherApi: weatherApiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
