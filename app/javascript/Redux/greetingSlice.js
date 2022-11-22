import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASEURL = "api/v1/greetings";

export const fetchGreeting = createAsyncThunk(
  "greeting/fetchGreeting",
  async () => {
    const response = await axios.get(BASEURL);
    return response.data;
  }
);

const greetingSlice = createSlice({
  name: "greeting",
  initialState: [],
  reducers: {
    addGreeting(state, action) {
      state.push(action.payload);
    },
  },
  extraReducers: {
    [fetchGreeting.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.push(action.payload);
      console.log(state);
    },
  },
});

export const { addGreeting } = greetingSlice.actions;

export default greetingSlice.reducer;