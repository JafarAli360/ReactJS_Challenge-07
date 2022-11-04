import { configureStore } from "@reduxjs/toolkit";
import carsReducer from "./carRedux";

export const store = configureStore({
  reducer: {
    cars: carsReducer,
  },
});
