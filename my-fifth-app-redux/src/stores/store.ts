/*
Applying Redux to your project : 
    1- Create a store
    2. Applying store to your App
    3- Create Redux state slice
    4. use slice in store
    5. make in your feature folder in each folder inside it (components, actions, reducers , slices)
    6. now make your logic in the component
*/
import calcReducer from "@/features/calculations/calculateSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    calculate: calcReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
