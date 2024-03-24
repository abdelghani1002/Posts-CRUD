import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../../features/userSlice";
import Nav from "./Nav";
import Page from "./Page";
import { NavLink, BrowserRouter,Route,Routes } from "react-router-dom";

export default function Header(){

    const user = useSelector((state)=>state.user)
    const dispatch = useDispatch()


    return(
        <header className="mb-3 d-flex flex-direction-row justify-content-between p-3 shadow">
            <div>
                <h3>Welcome <i style={{color:"aqua"}} className="d-inline">{user.value.username}</i></h3>
            </div>

            <div>
                <button type="button" className="btn btn-info"
                    onClick={()=>dispatch(logOut())}
                    >Log Out
                </button>
            </div>
        </header>
    )
}