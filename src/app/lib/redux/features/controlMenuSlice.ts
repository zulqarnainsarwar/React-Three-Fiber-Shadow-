import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  show: false,
} as MenuState;

export const controlMenu = createSlice({
  name: "controlMenu",
  initialState,
  reducers: {
    close: () => initialState,
    show: (state, action: PayloadAction<MenuState>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { close, show } = controlMenu.actions;
export default controlMenu.reducer;
