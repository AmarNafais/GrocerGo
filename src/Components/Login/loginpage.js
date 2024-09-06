import React from "react";
import "./loginpage.css";
import sampleImage from "../../Assets/Images/login-img.png";

const LoginPage = () => {
    return (
        <div className="login-container">
            <div className="login-box">
                <div className="login-left">
                    <div className="illustration">
                        <img src={sampleImage} alt="Sample Illustration" className="illustration-img" />
                    </div>
                </div>
                <div className="login-right">
                    <h1>Welcome to GrocerGo</h1>
                    <form>
                        <div className="input-group">
                            <label>Username or Email</label>
                            <input type="text" placeholder="Username or Email" />
                        </div>
                        <div className="input-group">
                            <label>Password</label>
                            <input type="password" placeholder="******" />
                            <a href="#" className="forgot-password">
                                Forgot password?
                            </a>
                        </div>
                        <button type="submit" className="login-button">
                            Sign In
                        </button>
                        <div className="separator">or</div>
                        <button className="google-login">
                            Sign in with Google
                        </button>
                        <div className="create-account">
                            <a href="#">Create Account</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;