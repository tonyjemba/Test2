import { configureStore } from '@reduxjs/toolkit'
import registerUser from "./RegisteUser"
export default configureStore({
  reducer: {
    registeredUser:registerUser
  },
})