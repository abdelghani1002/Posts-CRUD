import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import AddForm from "./AddForm";
import PostsList from "./PostsList";

export default function Page(){

    const user = useSelector((state)=>state.user)
    const Navigate = useNavigate()

    useEffect(()=>{

        if(user.value === null){
            Navigate("/")
        }
        
        
    },[user])



    if(user.value !== null){
        return(
            <div className="mx-5">
                <Header />
                <AddForm />
                <PostsList />
            </div>
        )
    }
    
    
}