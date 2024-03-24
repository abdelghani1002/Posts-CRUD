import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"




const initialState = {value:[], isLoading:null, error:null, nextId:1}

export const getPosts = createAsyncThunk('posts/getPosts',
    async(_,thunkAPI)=>{

        const {rejectWithValue} = thunkAPI

        try{
            const posts = await axios.get('http://localhost:3006/posts')
                          .then((resp)=>resp.data)
            return posts
        }catch(error){
            return rejectWithValue(error.message)
        }
    }
)

export const addPost = createAsyncThunk('posts/addPost',
    async(post,thunkAPI)=>{

        const {rejectWithValue,getState} = thunkAPI

        try{
            const resp = await axios.post("http://localhost:3006/posts",{...post, id:getState().posts.nextId})
            console.log("Add post runned successfly" + post);
            return resp.data
        }catch(error){
            return rejectWithValue(error.message)
        }
    }
)

export const deletePost = createAsyncThunk('posts/deletePost',
    async(post,thunkAPI)=>{

        const {rejectWithValue} = thunkAPI
    
        try{
            await axios.delete(`http://localhost:3006/posts/${post.id}`)
            return post
        }catch(error){
            return rejectWithValue(error.message)
        }
    }
)
export const getPostUserName = createAsyncThunk(
    'posts/getPostUserName',
    async(idUser,thunkAPI)=>{

        const {rejectWithValue} = thunkAPI
    
        try{
            const username = await axios.get(`http://localhost:3006/users`)
            .then((res)=>{
                return res.data.find((user)=>user.id === idUser).name
            })
            return username
        }catch(error){
            return rejectWithValue(error.message)
        }
    }
)

const postsSlice = createSlice({
    name:"posts",
    initialState,
    extraReducers:(Builder)=>{

        //  Get posts

        Builder.addCase(getPosts.pending, (state,action)=>{
            state.isLoading=true
        })

        Builder.addCase(getPosts.fulfilled, (state,action)=>{
            state.value = action.payload
            state.isLoading = false
            state.nextId = state.value[state.value.length - 1 ].id + 1
            console.log("next id is : "+state.nextId);
        })

        Builder.addCase(getPosts.rejected, (state,action)=>{
            state.error = action.payload
            state.isLoading = false
        })

        //   Add post 

        Builder.addCase(addPost.pending, (state,action)=>{
            state.isLoading=true
        })

        Builder.addCase(addPost.fulfilled, (state,action)=>{
            state.isLoading=false
            state.value.push(action.payload)
            state.nextId = state.value[state.value.length - 1 ].id + 1
        })

        Builder.addCase(addPost.rejected, (state,action)=>{
            state.isLoading = false
            state.err = action.payload
        })

        //  Delete post

        Builder.addCase(deletePost.pending, (state,action)=>{
            state.isLoading=true
        })

        Builder.addCase(deletePost.fulfilled, (state,action)=>{
            state.isLoading=false
            state.value = state.value.filter(item => item.id !== action.payload.id)
        })

        Builder.addCase(deletePost.rejected, (state,action)=>{
            state.isLoading=false
        })
    }
})

export default postsSlice.reducer