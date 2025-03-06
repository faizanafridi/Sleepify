import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const BASE_URL = "https://sleepify-vmgb.onrender.com";


const decode = (token)=>{
    if(!token)
    {
        return;
    }
    const data = jwtDecode(token);
    return data.user;
}

const initialState = {
  user: null || decode(localStorage.getItem('user')),
  status: 'idle', //idle failed success loading

};


export const loginAsync = createAsyncThunk(
  "auth/login",
  async (credentials) => {
    try {
        const url = BASE_URL + "/api/user/login";
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        }
        const {data} = await axios.post(url,credentials,config);
        return data;
    } catch (error) {
        console.log(error)
        return error;
    }
  
  }
);

export const registerAsync = createAsyncThunk("auth/register",async (credentials)=>{
    try {
        const url = BASE_URL + "/api/user/register";
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        }
        const {data} = await axios.post(url,credentials,config);
        return data;
    } catch (error) {
        console.log(error);
        return error
    }
   
})

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setUser : (state,action)=>{
        state.user = action.payload;
        // state.token = 
    },
    logOut : (state,action)=>{
        state.user = null;
        state.status = 'idle';
        localStorage.removeItem('user');
    }
  },
  extraReducers: (builder) => {
    builder.addCase(loginAsync.pending,(state,action)=>{
        state.status = 'loading'
    }).addCase(loginAsync.fulfilled,(state,action)=>{
        state.status = 'success'
            localStorage.setItem("user",JSON.stringify(action.payload.token));
            state.user = action.payload.user;
    }).addCase(loginAsync.rejected,(state,action)=>{
        state.status = 'failed'
    }).addCase(registerAsync.pending,(state,action)=>{
        state.status = 'loading'
    }).addCase(registerAsync.fulfilled,(state,action)=>{
        state.status = 'success'
            localStorage.setItem("user",JSON.stringify(action.payload.token));
            state.user = action.payload.user;
        
       
    }).addCase(registerAsync.rejected,(state,action)=>{
        state.status = 'failed';
    })
  },
});

export const {setUser,logOut} = authSlice.actions;
export default authSlice.reducer;
