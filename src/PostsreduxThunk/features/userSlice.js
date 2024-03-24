import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const loggedInUser = localStorage.getItem("user");
var foundUser = null;
if (loggedInUser) {
    foundUser = JSON.parse(loggedInUser);
}

const initialStateValue = foundUser ? foundUser.value : null
const initialState={value:initialStateValue, isLoading:null, error:null}

export const login = createAsyncThunk(
    "user/login",
    async(arg,thunkAPI)=>{

        const {rejectWithValue} = thunkAPI

        try{
            const res = await axios.get("http://localhost:3006/users")
            const data = res.data
            const User = await data.find((user)=> user.username===arg.username && user.password===arg.password)
            if (User) {return User} else { throw new Error( "incorrect username or password" )}
        }
        catch(er)
        {
            return rejectWithValue(er.message) 
        }
    }
)



const userSlice=createSlice({
        name:"user",
        initialState,
        reducers:{
            logOut:(state)=>{
                state.value = null
                localStorage.clear()
            },
            setUser:(state,action)=>{
                state.value = action.payload
            },
            getUserPosts:(state)=>{
                //get my posts
            }
        },

        extraReducers:(Builder)=>{

            Builder.addCase(login.pending, (state)=>{
                state.isLoading = true;
            })

            Builder.addCase(login.fulfilled, (state,action)=>{
                state.isLoading = false
                state.error = null
                state.value = action.payload
                localStorage.setItem('user', JSON.stringify(state));
            })

            Builder.addCase(login.rejected, (state,action)=>{
                state.isLoading = false
                state.error = action.payload
            })
        }
    })


export default userSlice.reducer;
export const {logOut , setUser} = userSlice.actions