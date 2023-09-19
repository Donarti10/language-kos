import React, {useState} from "react";
import "../Login/login.scss";
import {BsPerson} from 'react-icons/bs'
import {BiLock} from 'react-icons/bi'



const Logiin = () => {

  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="images-component">
      <div className="images">
        <div className="top">
          <div className="img1"></div>
          <div className="img2"></div>
          <div className="img3"></div>
          <div className="img4"></div>
          <div className="img5"></div>
          <div className="img6"></div>
          <div className="img7"></div>
          <div className="img8"></div>
        </div>
      </div>

      <div className="login-page">
        <h1>Log in</h1>

        <p>Enter the info you registered with</p>

        <span>Username or email address</span>
        <div className="username">
          <span> <BsPerson /> </span>
        <input
                        type="email"
                        placeholder='Username or email address'
                    />
        </div>
        
        <h4>Password</h4>
        <div className="username">
          <span> <BiLock /> </span>
        <input
                        type="password"
                        placeholder='Enter your password'
                    />
        <button>Show</button>
        
        </div>
        
        <div className="inline-login">
          <input type="checkbox"/>
        <h5>Remember Me</h5>
        <h6>Forgot Password?</h6>
        </div>

        <button>Login</button>

        <div className="login-register">
        <h3>Don't have an account? </h3>
        <h4>Register Here</h4>
        </div>

      </div>
    </div>
  );
};

export default Logiin;



