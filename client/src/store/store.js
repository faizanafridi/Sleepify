import {configureStore} from '@reduxjs/toolkit'
import authReducer from '../store/auth/authSlice'
import sleepReducer from '../store/sleep/sleepslice'

export const store = configureStore({
    reducer:{
        auth : authReducer,
        sleep: sleepReducer
    }
})