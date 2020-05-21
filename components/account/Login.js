import React from 'react';
import { Link } from 'react-router-dom';
import revLogo from '../../assets/revlogo.png';

function Login() {
    return (
        <React.Fragment>
            <div className="whole_page">
                <div className="block">
                    <div className="img_holder">
                        <Link to="/"><img src={ revLogo } className="" alt="rev_logo" /></Link>
                    </div>
                    <h2>Log In</h2>
                    <form >
                        <div className='error'> </div>
                        <input type="email" name="email" className="fb_input" placeholder="Email"/>
                        <input type="password" name="pword" className="fb_input" placeholder="Password" />
                        <input type="submit" name="login" className="fb_btn" value="Log In" />
                    </form>
                    <p>I forgot my password  <Link to="/password-reset" style={linkStyle}> Click here </Link> </p>
                    <span className="span"></span>
                    <div className="account">
                        <p>Don't have an account? <Link to="/register" style={linkStyle}> Sign Up </Link> </p>
                    </div>

                </div>
            </div>
        </React.Fragment>
    )
}

const linkStyle = {
display: 'inline',
color: '#0993e8'
}

export default Login;
