import { createSlice } from "@reduxjs/toolkit";


// Define the initial state using that type
const initialState: {
  stage: string;
} = {
  stage :"login",
};

const authStepSlice = createSlice({
  name: "authStep",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    Login: (state) => {
      state.stage = "login";
    },
    Verify: (state) => {
      state.stage = "verify";
    }
  },
});

export const { Login,Verify } = authStepSlice.actions;

export default authStepSlice.reducer;
