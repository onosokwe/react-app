import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/devamplify.png'; 

function Header() {
	return (
		<header className="navbar">
			<Link to="/"><img src={ img } alt="logo" /> </Link>
			<ul className="navbar-nav">
				<li className="nlink"><Link to="/courses" style={linkStyle}>Courses </Link></li>
				<li className="nlink"><Link to="/tests" style={linkStyle}>Tests</Link></li> 
				<li className="nlink"><Link to="/paths" style={linkStyle}>Paths</Link></li> 
				<li className="nlink"><Link to="/teachers" style={linkStyle}>Teachers</Link></li>
				<li className="nlink"><Link to="/register" style={linkStyle}>Account</Link></li>
			</ul>
		</header>
	)
}

const linkStyle = {
	color:'#18297d',
	textDecoration: 'none'
}

export default Header;