import { createSlice } from "@reduxjs/toolkit";

const initialInbox = {  isInbox: true , setBox: false}

const InboxSlice = createSlice({
    name: 'InboxVisible',
    initialState: initialInbox,
    reducers:{
        setInbox(state, action){
            state.isInbox =action.payload;
        },
        setSentBox(state, action){
            state.setBox = action.payload;
        }
        
    }
})

export const InboxActions = InboxSlice.actions;

export default InboxSlice.reducer;