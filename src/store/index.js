import { configureStore } from '@reduxjs/toolkit'
import authSlice from './authSlice'
import activateSlice from './activateSlice'

export default configureStore({
  reducer: {
    authSlice,
    activateSlice
  }
})