import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/productSlice";
import controlMenuReducer from "./features/controlMenuSlice";
export const makeStore = () => {
  return configureStore({
    reducer: {
      productReducer,
      controlMenuReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
