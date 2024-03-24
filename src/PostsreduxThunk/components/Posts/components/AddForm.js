import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../../../features/postsSlice";


export default function AddPostForm() {
    
    const user = useSelector((state)=>state.user);
    const nextId = useSelector((state)=>state.posts.nextId)
    const [disabled, setDisabled] = useState(true)
    const dispatch = useDispatch();

    

    

    const [post, setPost] = useState({
        
        title: "",
        content: "",
        idUser: user.value.id ,
        id: nextId,
        reactions: {
            like: 25,
            dislike: 7,
            love: 30,
            wow: 19,
            haha: 20,
            angry: 40,
            sad: 20
        }
    })

    const handleChange = (e) => {

        setPost((prevPost)=>{
            return {...prevPost, [e.target.name]:e.target.value}
        })
        
        post.title === "" || post.content === "" ? setDisabled(true) : setDisabled(false)
    }

    


    const handleSubmit = (e) =>{
        e.preventDefault();

        /* Add new post */
        const date = JSON.stringify(new Date())
        
        dispatch(addPost({...post, date:date}))
        
        setPost({
            title: "",
            content: "",
            idUser: user.value.id ,
            id: nextId,
            reactions: {
                like: 25,
                dislike: 7,
                love: 30,
                wow: 19,
                haha: 20,
                angry: 40,
                sad: 20
            }
        })

    }


    return(
        <div className="col col-10 m-auto p-2" id="addPostForm">
            <form className="form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title :
                        <input  value={post.title} className="form-item form-control" type="text" 
                                name="title" id="title" onChange={handleChange} />
                    </label>
                </div>

                <div className="form-group">
                    <label htmlFor="content">Content :
                        <textarea value={post.content} className="form-item form-control" type="text" 
                                name="content" id="content"  
                                onChange={handleChange} />
                    </label>
                </div>

                <div>
                    <button type="submit" className="btn btn-success mb-2" disabled={disabled}
                        >Add Post
                    </button>
                    <button type="reset" className="btn btn-info mb-2">Reset</button>
                </div>
            </form>
        </div>
    )
}