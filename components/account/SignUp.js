import React from 'react';
import { Link } from 'react-router-dom';
import revLogo from '../../assets/revlogo.png';

function Signup() {
	return (
        <React.Fragment>
            <div className="whole_page">
                <div className="block">
                    <div className="img_holder">
                        <Link to="/"><img src={ revLogo } className="" alt="rev_logo" /></Link>
                    </div>
                    <h2>Sign Up</h2>
                    <form>
                        <div className='error'> </div>
                        <input type="email" name="email" className="fb_input" placeholder="Email"/>
                        <input type="tel" name="fone" className="fb_input" placeholder="Phone" />
                        <input type="password" name="pword" className="fb_input" placeholder="Password" />
                        <input type="submit" name="login" className="fb_btn" value="Join Revlearn" />
                    </form>
                    <span className="span"></span>
                    <div className="account">
                        <p>Have an account? <Link to="/login" style={linkStyle}> Login </Link> </p>
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

export default Signup;