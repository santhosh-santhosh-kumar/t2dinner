import { createSlice } from "@reduxjs/toolkit";

const initialState = {
      bannerData: [],
      
    };

const heroBannerSlice=createSlice({
      name:"heroBannerData",
      initialState,
      reducers:{}
})

export default heroBannerSlice.reducer
