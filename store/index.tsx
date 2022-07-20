import { configureStore } from "@reduxjs/toolkit";
import stepsSlice from "./steps-slice";

const store = configureStore({
  reducer: { steps: stepsSlice.reducer },
});

export default store;
