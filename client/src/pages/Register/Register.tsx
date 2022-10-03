import "./register.scss";
import { Formik, FormikProps, Form, getIn, FormikErrors, ErrorMessage } from "formik";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";

interface FormValues {
    firstName: string,
    lastName: string,
    email: string,
    password: string
}

const validate = Yup.object().shape({
    firstName: Yup.string()
    .required('Required'),

    lastName: Yup.string()
    .required('Required'),

    email: Yup.string()
    .required('Required')
    .email(),

    password: Yup.string()
    .required('Required')
});

export default function Register(){
    const [error, setError] = useState<boolean>(false);

    function getStyles(errors: any, fieldName: any, touched: any) {
        if(!touched) {
            return {
                border: '1px solid #ccd0d5'
            }
        } else if(getIn(errors, fieldName) && touched){
            return {
                border: '1px solid red'
            }
        } 
    }

    return (
        <div className="register">
            <div>
                <div className="logo">
                    <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" className="register__logo" alt="logo"/>
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
                                <Formik<FormValues>
                                initialValues={{
                                    firstName: "",
                                    lastName: "",
                                    email: "",
                                    password: "",
                                    
                                }}
                                onSubmit={(values) => {
                                    alert(JSON.stringify(values));
                                    
                                }} validationSchema={validate}>
                                    { ({handleSubmit, values, handleChange, touched, errors, handleBlur}) => (
                                    <form className="reg" onSubmit={handleSubmit}>
                                        <div>
                                            <div>
                                                <div className="names">
                                                    <div className="first">
                                                        <div className="rel">
                                                            <div className="first__name">
                                                                <div className="first__placeholder"></div>
                                                                <input type="text" name="firstName" className="first__input" placeholder="First Name"
                                                                    value={values.firstName} onChange={handleChange} onBlur={handleBlur} style={getStyles(errors, 'firstName', touched.firstName)}
                                                                />
                                                            </div>
                                                            {touched.firstName && errors.firstName && <i className="red_sign"></i>}
                                                        </div>
                                                    </div>
                                                    <div className="second">
                                                        <div className="rel">
                                                            <div className="last__name">
                                                                <div className="last__placeholder"></div>
                                                                <input type="text" name="lastName" className="last__input" placeholder="Last Name"
                                                                    value={values.lastName} onChange={handleChange} onBlur={handleBlur} style={getStyles(errors, 'lastName', touched.lastName)}
                                                                />
                                                            </div>
                                                            {touched.lastName && errors.lastName && <i className="red_sign"></i>}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="third">
                                                    <div className="rel">
                                                        <div className="email__phone">
                                                            <div className="email__placeholder"></div>
                                                            <input name="email" type="email" className="email__input" placeholder="Mobile number or email"
                                                                value={values.email} onChange={handleChange} onBlur={handleBlur} style={getStyles(errors, 'email', touched.email)}
                                                            />
                                                        </div>
                                                        {touched.email &&  errors.email && <i className="red_sign"></i>}
                                                    </div>
                                                </div>
                                                <div className="forth">
                                                    <div className="rel">
                                                        <div className="password">
                                                            <div className="password__placeholder"></div>
                                                            <input name="password" type="password" className="password__input" placeholder="New password"
                                                                value={values.password} onChange={handleChange} onBlur={handleBlur} style={getStyles(errors, 'password', touched.password)}
                                                            />
                                                        </div>
                                                        {touched.password && errors.password && <i className="red_sign"></i>}
                                                    </div>
                                                </div>
                                                <div className="birthday_wrapper">
                                                    <div className="birthday">
                                                        Birthday
                                                    </div>
                                                    <div className="birthday_dates">
                                                        <span className="dates">
                                                            <span>
                                                                <select id="month">
                                                                    <option value="1">Jan</option>
                                                                    <option value="2">Feb</option>
                                                                    <option value="3">Mar</option>
                                                                    <option value="4">Apr</option>
                                                                    <option value="5">May</option>
                                                                    <option value="6">Jun</option>
                                                                    <option value="7">Jul</option>
                                                                    <option value="8">Aug</option>
                                                                    <option value="9">Sep</option>
                                                                    <option value="10">Oct</option>
                                                                    <option value="11">Nov</option>
                                                                    <option value="12">Dec</option>
                                                                </select>
                                                                <select id="day">
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
                                                                    <option>11</option>
                                                                    <option>12</option>
                                                                    <option>13</option>
                                                                    <option>14</option>
                                                                    <option>15</option>
                                                                    <option>16</option>
                                                                    <option>17</option>
                                                                    <option>18</option>
                                                                    <option>19</option>
                                                                    <option>20</option>
                                                                    <option>21</option>
                                                                    <option>22</option>
                                                                    <option>23</option>
                                                                    <option>24</option>
                                                                    <option>25</option>
                                                                    <option>26</option>
                                                                    <option>27</option>
                                                                    <option>28</option>
                                                                    <option>29</option>
                                                                    <option>30</option>
                                                                    <option>31</option>
                                                                </select>
                                                                <select id="year">
                                                                    <option>2022</option>
                                                                    <option>2021</option>
                                                                    <option>2020</option>
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
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="gender_wrapper">
                                                    <div className="gender">
                                                        Gender
                                                    </div>
                                                    <span className="genders">
                                                        <span className="gender_choice">
                                                            <label className="gender_label">Female</label>
                                                            <input type="radio" className="gender_input" name="sex" value="1"></input>
                                                        </span>
                                                        <span className="gender_choice">
                                                            <label className="gender_label">Male</label>
                                                            <input type="radio" className="gender_input" name="sex" value="2"></input>
                                                        </span>
                                                        <span className="gender_choice">
                                                            <label className="gender_label">Custom</label>
                                                            <input type="radio" className="gender_input" name="sex" value="3"></input>
                                                        </span>     
                                                    </span>
                                                </div>
                                                <div className="terms">
                                                    <p className="terms_text">
                                                        People who use our service may have uploaded your contact 
                                                        information to Facebook. 
                                                        <Link to="https://google.com" className="terms_links" 
                                                        > Learn more</Link>
                                                        .
                                                    </p>
                                                </div>
                                                <div className="terms">
                                                    <p className="terms_text">
                                                        By clicking Sign Up, you agree to our 
                                                        <Link to="https://google.com" className="terms_links" 
                                                        > Terms</Link>
                                                        ,  
                                                        <Link to="/" className="terms_links"
                                                        > Privacy Policy </Link>
                                                        and  
                                                        <Link to="/" className="terms_links"
                                                        > Cookies Policy</Link>
                                                        . You may receive SMS Notifications from us and can opt out 
                                                        any time.
                                                    </p>
                                                </div>
                                                <div className="reg_area">
                                                    <button type="submit" className="reg_button">Sign Up</button>
                                                </div>
                                                <div className="login_area">
                                                    <Link to="/" className="login_link">Already have an account?</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </form> 
                                    )}
                                    </Formik>
                                </div>
                            </div>   
                        </div>
                    </div>
                </div>
                {error && <div className="first_error">
                    <div className="first_error_block">
                        <div className="error_first_name">
                            <div className="error_first_msg">What's your name?</div>
                            <i className="error_first_arrow"></i>
                        </div>
                    </div>
                </div>}
                {error && <div className="second_error">
                    <div className="second_error_block">
                        <div className="error_last_name">
                            <div className="error_last_msg">What's your name?</div>
                            <i className="error_last_arrow"></i>
                        </div>
                    </div>
                </div>}
            </div>
        </div>
    );
}