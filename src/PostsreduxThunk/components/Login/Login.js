import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../features/userSlice";
import "./login.css"


export default function Login() {

    const Navigate = useNavigate();
    const dispatch = useDispatch();

    const [loginingUser, setLoginingUser] = useState({
        username: "",
        password: ""
    });

    const user = useSelector((state) => state.user);

    const handleChange = (e) => {
        setLoginingUser((prev) => {
            return { ...prev, [e.target.name]: e.target.value }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(loginingUser));
    }


    useEffect(() => {
        if (user.value !== null) { Navigate("/posts") };
    }, [user])



    return (
        <>
            <div className={`row bg-dark text-color-danger justify-content-center 
                        ${
                        (user.error !== null && user.error !== "incorrect username or password")
                        ? " d-block" 
                        : " d-none"}`
                        }>
                <div className="col col-12">
                    <h4 className="center text-danger p-4"
                    >{user.error}</h4>
                </div>
            </div>

            <div className="login row mx-5">

                <div className="col d-none d-sm-block col-3 p-2">
                    <div className="center">
                        <h1 className="title center">PostShare</h1>
                    </div>
                    <img src={require("../../imgLogin.jpg")} alt="not found" />
                </div>

                <div className="col d-none col-sm-1"></div>

                <div className="center d-block d-sm-none  ">
                    <h1 className="title center fw-bold">PostShare</h1>
                </div>

                <div className="col col-10 col-md-4 shadow-lg p-3 bg-light rounded">


                    <form className="form" onSubmit={(e) => handleSubmit(e)}>
                        {/* <h1 className="center mb-3 "> Sign in</h1> */}

                        <div className="form-floating my-3">

                            <input
                                id="username"
                                name="username"
                                value={loginingUser.username}
                                onChange={(e) => handleChange(e)}
                                type="text"
                                className="form-control"
                                placeholder="username"
                            />
                            <label htmlFor="username">User name</label>
                        </div>

                        <div className="form-floating my-3">

                            <input
                                id="password"
                                name="password"
                                value={loginingUser.password}
                                onChange={(e) => handleChange(e)}
                                type="password"
                                className="form-control "
                                placeholder="password"
                            />
                            <label htmlFor="password">Password</label>
                        </div>

                        {user.error === "incorrect username or password"
                        ? <div><p className="text-danger" >{user.error}</p></div>
                        : null}

                        <button
                            className="w-100 fw-bolder btn btn-lg btn-primary my-3 rounded"
                            type="submit"
                        >
                            {
                                user.isLoading ? "Submitting ..." : "Login"
                            }
                        </button>
                        <div className="center">
                            <a href="/" className="text-decoration-none">
                                Forgotten password ?
                            </a>
                        </div>
                        <div>
                            <hr></hr>
                        </div>
                        <div className="center">
                            <button type="button" className="CNA btn fw-bold py-2 text-light"
                                style={{ background: "rgb(54, 168, 32)" }}
                            >

                                Create New Account
                            </button>
                        </div>

                    </form>
                </div>

            </div>
        </>

    )
}