

import { createSlice } from "@reduxjs/toolkit";

export const registerUser = createSlice({
  name: "counter",
  initialState: {
    userName: "",
  },
  reducers: {
    //registers user
    register: (state, action) => {
      state.userName = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { register } = registerUser.actions;

export default registerUser.reducer;
