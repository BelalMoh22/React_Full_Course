import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
/*
slice : is a js object that contains the state and reducers
*/
const initialState = {
  result: 0,
};
export const calculateSlice = createSlice({
  name: "calculate",
  initialState, // initial state that we will use in reducers
  reducers: {
    add: (currentState, action: PayloadAction<number>) => {
      currentState.result = action.payload;
    },
    subtract: (currentState, action: PayloadAction<{ firstNum: number; secondNum: number }>) => {
      currentState.result = action.payload.firstNum - action.payload.secondNum;
    },
    multiply: (currentState, action: PayloadAction<number>) => {
      currentState.result = action.payload;
    },
    divide: (currentState, action: PayloadAction<number>) => {
      currentState.result = action.payload;
    },
  },
});

export const { add, subtract, multiply, divide } = calculateSlice.actions;
export default calculateSlice.reducer; // calcReducer
