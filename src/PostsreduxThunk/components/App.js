import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Login from './Login/Login';
import Page from './Posts/components/Page';


export default function App(){

    return (
        <div className="App">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/posts" element={<Page />} />
                    </Routes>
                </BrowserRouter>
        </div>
        
    )
}
