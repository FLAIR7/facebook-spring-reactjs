import React, { useState } from "react"
import { Link } from "react-router-dom"
import "./Login.scss"

export default function Login() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    return (
        <div className="login">
            <div>
                <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" className="login__logo"/>
            </div>
            <div className="login__container">
                <h3>Log Into Facebook</h3>
                <form>
                    <div className="center">
                        <input type="email" placeholder="Email or phone number" />
                    </div>
                    <div className="center">
                        <input type="password" placeholder="Password" />                         
                    </div>
                    <div className="center">
                        <button type="submit" className="login__submit">
                            Log In
                        </button>
                    </div>
                    <div className="center">
                        <div className="sideinfo">
                            <h5>Forgot account?</h5>
                            <span className="dot">.</span>
                            <a href="/reg" style={{textDecoration: "none"}}>
                                <h5 className="rtd">Sign up for Facebook</h5>
                            </a>     
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}