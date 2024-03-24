import React from "react";



export default function Reaction({reactions}) {


    return(
        <div className="reactions d-flex justify-content-between">
            <div className="">
                <img src={require("./icons/like.png")} className="p-1 w-10"></img>
                <small>{reactions.like}</small>
            </div>

            <div className="">
                <img src={require("./icons/dislike.png")} className="p-1 w-10"></img>
                <small>{reactions.dislike}</small>  
            </div>
            
            <div className="">
                <img src={require("./icons/love.png")} className="p-1 w-10"></img>
                <small>{reactions.love}</small>
            </div>

            <div className="">
                <img src={require("./icons/wow.png")} className="p-1 w-10"></img>
                <small>{reactions.wow}</small>
            </div>

            <div className="">
                <img src={require("./icons/haha.png")} className="p-1 w-10"></img>
                <small>{reactions.haha}</small>
            </div>

            <div className="">
                <img src={require("./icons/angry.png")} className="p-1"></img>
                <small>{reactions.angry}</small>
            </div>

            <div className="">
                <img src={require("./icons/sad.png")} className="p-1"></img>
                <small>{reactions.sad}</small>
            </div>
        </div>
    )
}