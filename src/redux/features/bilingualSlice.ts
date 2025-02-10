import { createSlice } from "@reduxjs/toolkit";
import getCurrentLang from "@/i18n/currentLang";


// Define the initial state using that type
const initialState: {
  lang: string;
} = {
  lang: getCurrentLang(),
};

const bilingualSlice = createSlice({
  name: "language",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    Fa: (state) => {
      state.lang = "Fa";
    },
    En: (state) => {
      state.lang = "En";
    },
    Ar: (state) => {
      state.lang = "Ar";
    },
  },
});

export const { Fa, En, Ar } = bilingualSlice.actions;

export default bilingualSlice.reducer;
