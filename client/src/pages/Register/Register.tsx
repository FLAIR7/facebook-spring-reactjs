import { Link } from "react-router-dom";
import "./Register.scss";

export function Register(){
    /*return (
        <div className="register">
           <div>
                <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" className="register__logo"/>
           </div>
           <div className="register__container">
                <div className="first_sector">
                    <div className="header_h1">Create a new account</div>
                    <div className="p">It's quick and easy.</div>
                </div>
                <form className="second_sector">
                    <div className="row">
                        <input className="name" placeholder="First Name"/>
                        <input className="last_name" placeholder="Last Name" />
                    </div>
                    <div className="center">
                        <input className="email" placeholder="Mobile number or email"/>
                    </div>
                    <div className="center">
                        <input className="password" placeholder="New Password" />
                    </div>
                    <h5>Birthday</h5>
                    <div className="row">
                        <select>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                        </select>
                        <select>
                            <option>Jan</option>
                            <option>Feb</option>
                            <option>Mar</option>
                            <option>Apr</option>
                            <option>May</option>
                            <option>Jun</option>
                            <option>Jul</option>
                            <option>Aug</option>
                            <option>Sep</option>
                            <option>Out</option>
                            <option>Nov</option>
                            <option>Dec</option>
                        </select>
                        <select>
                            <option>2022</option>
                            <option>2019</option>
                            <option>2018</option>
                            <option>2017</option>
                            <option>2016</option>
                            <option>2015</option>
                            <option>2014</option>
                            <option>2013</option>
                            <option>2012</option>
                            <option>2011</option>
                            <option>2010</option>
                            <option>2009</option>
                            <option>2008</option>
                            <option>2007</option>
                            <option>2006</option>
                            <option>2005</option>
                            <option>2004</option>
                            <option>2003</option>
                        </select>
                    </div>
                    <h5>Gender</h5>

                    <div className="radio__container">
                        <div className="wrapper">
                            <label>Female</label>
                            <input type="radio"/>
                        </div>
                        <div className="wrapper">
                            <label>Male</label>
                            <input type="radio"/>
                        </div>
                        <div className="wrapper">
                            <label>Other</label>
                            <input type="radio"/>
                        </div>
                    </div>

                    <p className="register__policy">
                        <span>People who use our service may have uploaded your contact information to Facebook. Learn more.</span>
                        <span>By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy. You may receive SMS Notifications from us and can opt out any time.</span>
                    </p>

                    <div className="center">
                        <button className="register">Sign Up</button>
                    </div>

                    <div className="center">
                        <Link to="/">
                            <p className="register__login">Already have an account?</p>
                        </Link>
                    </div>
                </form>
           </div>
        </div>        
    );*/

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
    )
}