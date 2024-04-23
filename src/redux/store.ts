import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import basketSlice from "./basketSlice";

const store = configureStore({
  reducer: {
    basketSlice,
  },
});

export default store;
