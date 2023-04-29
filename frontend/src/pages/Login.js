import axios from 'axios';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "../css/login.css"
const Login = (props) => {
    const navigate = useNavigate();
    const signup = () => {
        navigate("/signup")
    }

    const onLogin = async (e) => {
        e.preventDefault();
        const email = document.getElementById("login-email").value;
        const password = document.getElementById("login-password").value;
        const data = {
            email: email,
            password: password
        }
        try {
            const res = await axios.post("http://localhost:8000/login", data, {
                headers: {
                    "Content-Type": "application/json",
                }
            });
            const resp = await res.data
            console.log(resp)
            if (resp.authtoken) {
                props.setMessage("Welcome to SymbiMart, Please wait while we are tranfering you to home");
                setTimeout(() => {
                    props.setMessage(null)
                    navigate("/")
                }, 3000);

            }
        } catch (error) {
            console.log(error)
            props.setMessage(error.response.data.error);
                setTimeout(() => {
                    props.setMessage(null)
                }, 3000);
        }
    }
    return (
        <>
            {props.message === null ? null : <div className='message' style={{ paddingBottom: "20px" }}>

                <div className="alert alert-warning w-50" style={{ margin: "auto" }} role="alert">
                    {props.message}
                </div>
            </div>}
            <div className="login-container" id="container" style={{marginTop: "150px"}}>

                <div className="form-container sign-in-container">
                    <form onSubmit={onLogin}>
                        <h1>Sign In</h1>
                        <input type="email" id="login-email" placeholder="Email" />
                        <input type="password" id="login-password" placeholder="Password" />
                        <Link to="#">Forgot your password?</Link>
                        <button>Sign In</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start journey with us</p>
                            <button className="ghost" id="signUp" onClick={signup}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login