import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:'movies',
    initialState:{
        nowPlaying:null,
        trailer:null
    },
    reducers:{
      addMoviesList:(state,action)=>{
        state.nowPlaying=action.payload
      },
      addTrailer:(state,action)=>{
        state.trailer=action.payload
      }
    }
})

export default movieSlice.reducer;
export const {addMoviesList,addTrailer}=movieSlice.actions;