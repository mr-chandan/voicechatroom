import { createSlice } from '@reduxjs/toolkit'

export const activateSlice = createSlice({
    name: 'activateslice',
    initialState: {
        name : '',
        avatar: '',
    },
    reducers: {
        setname:(state,action)=> {
            state.name = action.payload;
        },
        setavatar:(state,action)=> {
           state.avatar = action.payload;
        },
    }
})

export const {setname,setavatar} = activateSlice.actions

export default activateSlice.reducer;