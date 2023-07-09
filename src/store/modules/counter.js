import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name:"counter",
    initialState:{
        data:{
            udata:"",
            rgdata:"",
            pwdata:"",
        }
    },
    reducers:{
        userdata:(state,action)=>{
            state.data.udata = action
            console.log(action)
        },
        registerdata:(state,action)=>{
            state.data.rgdata = action
            console.log(action)
        },
        passworddata:(state,action)=>{
            state.data.pwdata = action
            console.log(action)
        }
    }
})

export const {userdata,registerdata,passworddata} = counterSlice.actions
export default counterSlice.reducer;