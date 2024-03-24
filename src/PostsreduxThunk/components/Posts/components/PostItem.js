import React from "react";
import Reaction from "./reaction/Reaction";
import { parseISO, formatDistanceToNow } from 'date-fns';



export default function PostItem({post}) {
    //format date
    let date = JSON.parse(post.date)
    date = parseISO(date)
    const timePeriod = formatDistanceToNow(date)
    const timeAgo = `${timePeriod} ago`
    

    return(
        <section className="post mb-4">
            this is post item
            <div>
                <h3>{post.title}</h3>

                <p className="p-2 m-2">{post.content}</p>
            </div>

            <div className="divBtn px-2">
                <div>
                    <small><i>posted by <b>{}</b> --{timeAgo}  </i></small>
                </div>
            </div>
            <hr />
            {/* <Reaction reactions={post.reactions}/> */} 
        </section>
    )
}