import { createSlice } from "@reduxjs/toolkit"

export const userSlice=createSlice({
    name:'userAuth',
    initialState:{
        isValid:false
    },
    reducers:{
        checkEmail:(state,action)=>{
            if(action.payload.email==='karim_kamali@hotmail.com'||action.payload.email==='rabih@itxi.net'||action.payload.email==='h.ghandour@itxi.net')
            state.isValid=true;
        
        }
    }
})

export const {checkEmail}=userSlice.actions
export default userSlice.reducer