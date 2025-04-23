 import { createSlice } from "@reduxjs/toolkit"
 
 const GptSlice =createSlice({
    name:'GptSlice',
    initialState:{ movies: null,gptSearch:'' },
    reducers:{
        addMovies:(state,action)=>
        {
           state.movies=action.payload;
        },
        addGptSearch:(state,action)=>{
            state.gptSearch=action.payload;
        }
    }
        
    

 })

 export default GptSlice.reducer;
export const {addGptSearch,addMovies}=GptSlice.actions;