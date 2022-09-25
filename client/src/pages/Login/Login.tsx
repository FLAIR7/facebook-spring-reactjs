import React from "react"
import { Link } from "react-router-dom";
import "./Login.scss";

export function Login() {
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
                            <Link to="/reg" style={{textDecoration: "none"}}>
                                <h5 className="rtd">Sign up for Facebook</h5>
                            </Link>     
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}