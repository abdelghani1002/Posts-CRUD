import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../../features/postsSlice";
import PostItem from "./PostItem";
import { useState } from "react";


export default function PostsList() {


    const posts = useSelector((state)=>state.posts);
    const [postsState, setPostsState] = useState(posts);
    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(getPosts());
    },[postsState])


    return(
        <div className="m-auto posts p-2">
           <h2> Posts : </h2> 
            {
                posts.value.map((post)=>{
                    return <PostItem key={post.id} post={post} />
                })
            }
            
        </div>
    )
}