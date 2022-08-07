import { createSlice } from "@reduxjs/toolkit";
export const registerUser = createSlice({
  name: "counter",
  initialState: {
    userName: "",
    messages: [],
  },
  reducers: {
    //registers user
    register: (state, action) => {
      state.userName = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { register, LoadUser } = registerUser.actions;

export default registerUser.reducer;
