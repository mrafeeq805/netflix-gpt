import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name : "gpt",
    initialState : {
        gptPageToggle : false,
        gptResults : null,
        gptFive : null

    },
    reducers : {
        changeGPTPageToggle : (state,action) =>{
            state.gptPageToggle = !action.payload
        },
        addDetails : (state,action) =>{
            state.gptResults = action.payload
        },
        addFive : (state,action) =>{
            state.gptFive = action.payload
        }
    }
})

export const {changeGPTPageToggle,addDetails,addFive} = gptSlice.actions
export default gptSlice.reducer