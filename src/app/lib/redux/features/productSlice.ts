import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  show: false,
  name: "",
  type: "",
  price: 0,
  image: "",
} as ProductState;

export const product = createSlice({
  name: "product",
  initialState,
  reducers: {
    close: () => initialState,
    show: (state, action: PayloadAction<ProductState>) => {
      console.log("action:", action);
      return { ...state, ...action.payload };
    },
  },
});

export const { close, show } = product.actions;
export default product.reducer;
