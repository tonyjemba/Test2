import { createSlice } from "@reduxjs/toolkit";
import {loadUser,saveUser} from "./LocalStorage";
export const registerUser = createSlice({
  name: "counter",
  initialState: {
    userName: "",
    message:"",
    messages: [],
  },
  reducers: {
    //registers user
    register: (state, action) => {
      state.userName = action.payload;
    },
    message: (state, action) => {
      state.message = action.payload;
    },
    clear: (state,) => {
      state.message = "";
    },
    //adds mesages to the messages array
    addMessage: (state, action) => {
      state.messages = [action.payload,...state.messages];
    }, 
   getUser:(state)=>{
    return state.userName
   },
  setMessages:(state,action)=>{
state.messages = action.payload
  }
  },
});

// Action creators are generated for each case reducer function
export const { register, message,clear ,addMessage,getUser,setMessages} = registerUser.actions;

export default registerUser.reducer;
