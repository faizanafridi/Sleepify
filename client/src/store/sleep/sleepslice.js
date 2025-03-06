import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://sleepify-vmgb.onrender.com";

const initialState = {
  sleeps: [],
  fetching: false, //set wether we are currently fetching or not
  error: null
};

export const fetchSleep = createAsyncThunk("sleep/fetch", async (id) => {
  try {
    const url = BASE_URL + "/api/sleep/getall";
    const token = JSON.parse(localStorage.getItem('user'))
    const config = {
      headers: {
        authorization: `Bearer ${token}`
      },
    };
    const {data} = await axios.get(url,config,{id});
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return error
  }
});

export const addSleep = createAsyncThunk("sleep/add",async ({startTime,endtime})=>{
  try {
    const url = BASE_URL + "/api/sleep/add";
    const token = JSON.parse(localStorage.getItem('user'))
    const config = {
      headers: {
        authorization: `Bearer ${token}`
      },
    };
    const {data} = await axios.post(url,{startTime,endtime},config);
    console.log('add');
    console.log(data);
    return data
  } catch (error) {
    console.log(error)
    // return error;
  }
})

export const sleepSlice = createSlice({
  name: "sleep",
  initialState:initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSleep.pending,(state,action)=>{
        state.fetching = true;
    }).addCase(fetchSleep.fulfilled,(state,action)=>{
        state.sleeps = action.payload;
        state.fetching = false;
        state.error = null;
    }).addCase(fetchSleep.rejected,(state,action)=>{
        state.sleeps = [],
        state.fetching = false;
        state.error = action.payload.error;
    }).addCase(addSleep.pending,(state,action)=>{
      state.fetching = true;
    }).addCase(addSleep.fulfilled,(state,action)=>{
      state.fetching = false;
      state.sleeps.push(action.payload);
      state.error = null
    }).addCase(addSleep.rejected,(state,action)=>{
      state.fetching = false;
      state.error = action.payload.error
    })
  },
});

export const {} = sleepSlice.actions;
export default sleepSlice.reducer;
