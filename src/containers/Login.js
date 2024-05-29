import React, { useState } from 'react';
import myImage from '../containers/background.jpg'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import {Nav} from 'react-bootstrap';

const Login = () => {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    
    const textWelcome = {
        position: 'absolute',
        top: '20%',
        left: '39.5%',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '35px' 
    };

    const containerLogin = {
        position: 'absolute',
        top: '30%',
        left: '37%',
        background: 'white',
        width: '363px',
        height: '395px',
        borderRadius: '20px',
        marginTop: '10px', 
    };

    const textLogin = {
        color: '#6F4E46', 
        fontWeight: 'bold', 
        fontSize: '30px', 
        padding: '10px 0px 0px 145px',
    };

    const textEmail_Password = {
        color: '#6F4E46', 
        fontWeight: 'bold', 
        fontSize: '18px', 
        paddingLeft: '30px',
        paddingTop: '10px',
    };

    const Input = {
        paddingLeft: '10px', 
        marginLeft: '30px', 
        marginTop:'7px', 
        width: '300px',
        height: '35px'
    };

    const Signin_btn = {
        width: '200px', 
        height: '40px', 
        background: '#6F4E46', 
        color: 'white', 
        fontWeight: 'bold', 
        fontSize: '18px', 
        textAlign: 'center', 
        borderRadius:'3px', 
        border: 'none',
    };

    const Signup_btn = {
        width: '200px', 
        height: '40px', 
        background: '#C87615', 
        color: 'white', 
        fontWeight: 'bold', 
        fontSize: '18px', 
        textAlign: 'center', 
        borderRadius:'3px', 
        border: 'none',
    };

    const Forgot_pass = {
        background:'white', 
        border:'none', 
        padding: '0px 0px 0px 0px', 
        color:'#6F4E46', 
        marginLeft: '203px', 
        marginTop:'5px',
    };

    return (
        <div>
            <div style={textWelcome}>WELCOME BACK!</div>
            <div style={containerLogin}>
                <div style={textLogin}>Login</div>
                <div style={textEmail_Password}>Email</div>
                <input type='text' placeholder='Enter your email' style={Input}></input>
                <div style={textEmail_Password}>Password</div>
                <div style={{ position: 'relative', display: 'inline-block' }}>
                    <input 
                        type={showPassword ? 'text' : 'password'} 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Enter your password' 
                        style={Input}/>
                    <span
                        onClick={togglePasswordVisibility}
                        style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer'}}>
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                </div>
                <div>
                    <button style={Forgot_pass}>Forgot password?</button>
                </div>
                <div style={{padding: '20px 0px 0px 80px'}}>
                    <Nav.Link href={"/homepage"}>
                        <button style={Signin_btn}>Sign in</button>
                    </Nav.Link>
                </div>
                <div>
                    <text style={{color:'#7A7E7C', paddingLeft: '160px'}}>--or--</text>
                </div>
                <div style={{padding: '5px 0px 0px 80px'}}>
                    <Nav.Link href={"/register"}>
                        <button style={Signup_btn}>Create New Account</button>
                    </Nav.Link>
                </div>
            </div>
            <img src={myImage} alt="Login Background" width="100%" height="100%"/>
                
        </div>
    )
}

export default Login
