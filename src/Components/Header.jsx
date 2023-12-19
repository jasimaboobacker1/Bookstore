import { useEffect, useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";


function Navbar() {
	const navRef = useRef();
	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};
	 
	const navigate = useNavigate()

    const [logedIn,setLogedIn] = useState(false)
	useEffect(()=>{
		if(sessionStorage.getItem("token")){
			setLogedIn(true)
		}else{
			setLogedIn(false)
		}
	},[])
	const handleLogout = () => {
		// Clear the token from sessionStorage
		sessionStorage.removeItem('token');
		// Update the loggedIn state
		setLogedIn(false);
		navigate('/')
		
		
	};

	return (
		<header >
			<h3 id="h3" className="text-light">BOOKIES</h3>
			<nav ref={navRef}>
			 { logedIn?
				<div>
					 <Link  to={'/'}>Home</Link>
					
	                <Link to={'/Books'}>BOOKS</Link>
					<Link to={'/contact'}>Contact Us</Link>
					<button id="btn" onClick={handleLogout}>Log Out</button>
					</div>:
					<Link to={'/login'}><button id="btn">Log in</button></Link>
					}
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;

