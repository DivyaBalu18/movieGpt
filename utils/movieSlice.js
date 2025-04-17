import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:'movies',
    initialState:{
        nowPlaying:null,
        trailer:null,
        popular:null,
        topRated:null,
        upcoming:null
    },
    reducers:{
      addMoviesList:(state,action)=>{
        state.nowPlaying=action.payload
      },
      addTrailer:(state,action)=>{
        state.trailer=action.payload
      },
      addPopularList:(state,action)=>{
        state.popular=action.payload
      },
      addTopRatedList:(state,action)=>{
        state.topRated=action.payload
      },
      addUpcomingList:(state,action)=>{
        state.upcoming=action.payload
      },
    }
})

export default movieSlice.reducer;
export const {addMoviesList,addTrailer,addPopularList,addTopRatedList,addUpcomingList}=movieSlice.actions;