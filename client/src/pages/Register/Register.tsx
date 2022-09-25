import { Link } from "react-router-dom";
import "./Register.scss";

export function Register(){
    return (
        <div className="register">
            <div>
                <div className="logo">
                    <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" className="register__logo"/>
                </div>
                <div className="register_container">
                    <div className="sector">
                        <div className="first__block">
                            <div className="block_header">Create a new account</div>
                            <div className="block_p">It's quick and easy.</div>
                        </div>
                        <div>
                            <div className="second__sector">
                                <div className="second__block">
                                    <form className="reg">
                                        <div>
                                            <div>
                                                <div className="names">
                                                    <div className="first">
                                                        <div className="rel">
                                                            <div className="first__name">
                                                                <div className="first__placeholder"></div>
                                                                <input className="first__input" placeholder="First Name"></input>
                                                            </div>
                                                            {/* <i className="red_sign"></i> */}
                                                        </div>
                                                    </div>
                                                    <div className="second">
                                                        <div className="rel">
                                                            <div className="last__name">
                                                                <div className="last__placeholder"></div>
                                                                <input className="last__input" placeholder="Last Name"></input>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="third">
                                                    <div className="rel">
                                                        <div className="email__phone">
                                                            <div className="email__placeholder"></div>
                                                            <input className="email__input" placeholder="Mobile number or email"></input>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="forth">

                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>   
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}