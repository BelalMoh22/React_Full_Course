/*
Adding Async Logic to Redux Code :
  Step 1: Import createAsyncThunk to handle async API calls.
  Step 2: Create TypeScript types for the weather data and slice state.
  Step 3: Create the initial state for Redux.
  Step 4: Create an async thunk to fetch weather data from the API.
  Step 5: Create the slice with normal reducers and async reducers.
  Step 6: Export the actions and reducer to use them in the app.
*/
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCurrentWeather } from "../../api/axios";

// Step 2: Shape of the weather data saved in Redux.
type Weather = {
  temperature: number;
  min: number;
  max: number;
};

// Step 2: Shape of the whole weatherApi slice state.
type WeatherApiState = {
  result: string;
  weather: Weather;
  isLoading: boolean;
  error: string | null;
  currentRequestId: string | null;
};

// Step 3: Default values before the API request finishes.
const initialState: WeatherApiState = {
  result: "empty",
  weather: {
    temperature: 0,
    min: 0,
    max: 0,
  },
  isLoading: false,
  error: null,
  currentRequestId: null,
};

const wait = (milliseconds: number) =>
  new Promise((resolve) => setTimeout(resolve, milliseconds));

// Step 4: Async action that requests weather data from the API.
export const fetchWeather = createAsyncThunk<
  Weather,
  void,
  { rejectValue: string }
>("weatherApi/fetchWeather", async (_, { signal, rejectWithValue }) => { //Anything you return it from this function will be the payload
  // signal : it is used to cancel the request if needed
  // rejectWithValue : it is used to reject the request with a custom error message
  try {
    const [data] = await Promise.all([getCurrentWeather(signal), wait(1000)]);

    // Return only the values the UI needs this don't show except when go to fullfilled
    return {
      temperature: data.current_weather.temperature,
      min: data.current_weather.weathercode,
      max: data.current_weather.winddirection,
    }; // this becomes the payload 
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }

    return rejectWithValue("Failed to fetch weather");
  }
});

// Step 5: Create the Redux slice.
const weatherApiSlice = createSlice({
  name: "weatherApi",
  initialState,
  // Normal reducers run when you dispatch regular slice actions.
  reducers: { // synchronous reducers.
    changeResult(state) {
      state.result = "changed";
    },
  },
  // Async reducers run automatically for fetchWeather pending/fulfilled/rejected.
  extraReducers: (builder) => {
    builder
      // Request started.
      .addCase(fetchWeather.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
        state.currentRequestId = action.meta.requestId;
      })
      // Request succeeded.
      .addCase(fetchWeather.fulfilled, (state, action) => {
        if (state.currentRequestId !== action.meta.requestId) {
          return;
        }

        state.isLoading = false;
        state.currentRequestId = null;
        state.weather = action.payload;
      })
      // Request failed.
      .addCase(fetchWeather.rejected, (state, action) => {
        if (state.currentRequestId !== action.meta.requestId) {
          return;
        }

        state.isLoading = false;
        state.currentRequestId = null;

        if (!action.meta.aborted) {
          state.error = action.payload ?? action.error.message ?? "Failed to fetch weather";
        }
      });
  },
});

// Step 6: Export regular actions and the reducer for the store.
export const { changeResult } = weatherApiSlice.actions;
export default weatherApiSlice.reducer;
