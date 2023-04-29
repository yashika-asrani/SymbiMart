import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "../css/sign-up.css"
import axios from "axios"
const Signup = (props) => {
    const navigate = useNavigate();
    const signin = () => {
        navigate("/login")
    }
    const onSignup = async (e) => {
        e.preventDefault();
        const name = document.getElementById("signup-name").value;
        const email = document.getElementById("signup-email").value;
        const password = document.getElementById("signup-password").value;
        const data = {
            name: name,
            email: email,
            password: password
        }
        console.log(data)
        try {
            const res = await axios.post("http://localhost:8000/signup", data, {
                headers: {
                    "Content-Type": "application/json",
                }
            });
            const resp = await res.data
            if (resp.authtoken) {
                props.setMessage("Congratulations! Your account is created");
                setTimeout(() => {
                    props.setMessage(null)
                    navigate("/login")
                }, 3000);

            }
        } catch (error) {
            props.setMessage(error.response.data.error);
                setTimeout(() => {
                    props.setMessage(null)
                }, 3000);
        }
    }
    return (
        <>
            {props.message === null ? null : <div className='message' style={{ paddingBottom: "20px" }}>

                <div class="alert alert-warning w-50" style={{ margin: "auto" }} role="alert">
                    {props.message}
                </div>
            </div>}
            <div class="login-container" id="container" style={{marginTop: "150px"}}>
                <div class="form-container sign-in-container">
                    <form onClick={onSignup}>
                        <h1>Sign Up</h1>
                        <span>or use your account</span>
                        <input type="text" id="signup-name" placeholder="Name" />
                        <input type="email" id="signup-email" placeholder="Email" />
                        <input type="password" id="signup-password" placeholder="Password" />
                        <Link to="#">Forgot your password?</Link>
                        <button>Sign Up</button>
                    </form>
                </div>
                <div class="overlay-container">
                    <div class="overlay">
                        <div class="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button class="ghost" id="signIn">Sign Up</button>
                        </div>
                        <div class="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start journey with us</p>
                            <button class="ghost" id="signUp" onClick={signin}>Sign In</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup