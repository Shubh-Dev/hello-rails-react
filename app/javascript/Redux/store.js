// Path: app\javascript\redux\store.js
import { configureStore } from "@reduxjs/toolkit";
import greetingSlice from "./greetingSlice";

export default configureStore({
  reducer: {
    greeting: greetingSlice,
  },
});