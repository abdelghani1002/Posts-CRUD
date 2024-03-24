import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";


export default function Nav() {

    const user = useSelector((state)=>state.user)


    return(
        <div>
            <NavLink exact to="/home">Home</NavLink>
            <NavLink to={`/${user.value.username}`} >Compte</NavLink>
        </div>
    )
}