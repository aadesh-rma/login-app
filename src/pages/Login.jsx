import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {dummyUser} from "/projects/login-app/src/constant.js"

export default function Login({isAuthenticated,setIsAuthenticated}) {
    const navigate = useNavigate();
    useEffect(()=>{
        if(JSON.parse(localStorage.getItem("isAuthenticated"))===true){
            navigate("/dashboard")
        }
    },[isAuthenticated])
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        if ((email === dummyUser.email) && (password === dummyUser.password)) {
            setIsAuthenticated(true)
            console.log("authentication successful")
            navigate("/dashboard")
        }
        else {
            console.log("invalid credentials")
            setError("invalid email or password")
        }
    }
    return (
        <>
            <div id="login-field">
                <h2 id="login-title">Login</h2>
                <form onSubmit={handleSubmit} id="login-form">

                    <div className="input-container">
                        <label htmlFor="idEmail">Email</label>
                        <input autoFocus id="idEmail" type="email" placeholder="enter email" value={email} onChange={(e) => { setEmail(e.target.value);setError("") }} />
                    </div>

                    <div className="input-container">
                        <label htmlFor="idPassword">Password</label>
                        <input id="idPassword" type="password" placeholder="enter password" value={password} onChange={(e) => { setPassword(e.target.value); setError("")
                         }} />
                    </div>
                    <button id="submit-button" type="submit">Submit</button>
                </form>
                <div id="error-box">{error && <p>{error}</p>}</div>
            </div>

        </>
    )
}