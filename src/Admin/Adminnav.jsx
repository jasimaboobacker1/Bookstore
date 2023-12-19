import React from 'react'
import {  useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './Adminnav.css'
import { useNavigate } from 'react-router-dom';

function Adminnav() {
    const navRef = useRef();
	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};
	const navigate = useNavigate();
    // const navigate = useNavigate()
	const handleLogout=()=>{
		navigate('/')
	  }
  return (
    <>
    <header >
			<div className='d-flex align-items-center justify-content-center justify-content-between p-3'>
			    <h3  className="text-light mt-3">BOOKIES</h3>
    			<nav className='mt-3 ms-5' ref={navRef}>
    			 
    				<div>
					<Link  to={'/adminhome'}>Dashboard</Link>
    					
    					 <Link  to={'/orderlist'}>Order Manage</Link>
    					
    	                <Link to={'/Usermanage'}>Manage User</Link>
    					<Link to={'/booksmanage'}>Manage Books</Link>
    					<button onClick={handleLogout}  id="btn" >Log Out</button>
    					</div>
    
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
			</div>
		</header>
    </>
  )
}

export default Adminnav