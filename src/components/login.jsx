import React, {useState} from "react";
import "./login.css"
import { Link } from "react-router-dom";
//import { useHistory } from "react-router-dom";
const Login = () =>{
    const [popupStyle, showPopup]= useState('hide');
    const popup = () => {
        showPopup("Login-popup");
        setTimeout(() => showPopup("hide"), 3000);
      };
    // const popup = () =>{
    //     showPopup("Login-popup");
    //     setTimeout(() => {
    //         showPopup("hide");
    //         //history.push("/dashboard");
    //     },2000);
    // }
    //const history = useHistory();
    
    return(
        <div className="cover">
            <h1>Login</h1>
            <input type="text" placeholder="username"/>
            <input type="password" placeholder="password"/>
            
            <div className="Lg-btn" onClick={popup}>Login</div>
            <p className="text">You can login using</p>

            <div className="alt-login">
                <div className="google"></div>
                <div className="facebook"></div>
            </div>
            
            <div className={popupStyle}>
                <h3>Login failed</h3>
                <p>user or password incorrect</p>
            </div>
            <Link to="/Dashboard">Dashboard</Link>    
       </div>
    )
}

export default Login