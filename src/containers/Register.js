import React, { useState } from 'react';
import myImage from '../containers/register_background.jpg'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import {Nav} from 'react-bootstrap';

const Register = () => {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    
    const textWelcome = {
        position: 'absolute',
        top: '20%',
        left: '43%',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '35px' 
    };

    const containerRegister = {
        position: 'absolute',
        top: '30%',
        left: '37%',
        background: 'white',
        width: '363px',
        height: '490px',
        borderRadius: '20px',
        marginTop: '10px', 
    };

    const textRegister = {
        color: '#6F4E46', 
        fontWeight: 'bold', 
        fontSize: '30px', 
        padding: '10px 0px 0px 125px',
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

    const Signup_btn = {
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

    const Back_to_login = {
        background:'white', 
        border:'none', 
        padding: '0px 0px 0px 0px', 
        color:'#6F4E46', 
        marginLeft: '131px', 
        marginTop:'7px',
    };

    return (
        <div>
            <div style={textWelcome}>WELCOME!</div>
            <div style={containerRegister}>
                <div style={textRegister}>Register</div>
                <div style={textEmail_Password}>Firstname</div>
                <input type='text' placeholder='Enter your firstname' style={Input}></input>
                <div style={textEmail_Password}>Lastname</div>
                <input type='text' placeholder='Enter your lastname' style={Input}></input>
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
                
                <div style={{padding: '30px 0px 0px 80px'}}>
                    <Nav.Link href={"/login"}>
                        <button style={Signup_btn}>Sign up</button>
                    </Nav.Link>
                </div>
                <div>
                    <Nav.Link href={"/login"}>
                        <button style={Back_to_login}>Back to login?</button>
                    </Nav.Link>
                </div>
            </div>
            <img src={myImage} alt="Signup Background" width="100%" height="100%"/>
                
        </div>
    )
}

export default Register
