import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <>

<footer className="footer bg-body-tertiary">
  <div className="footer-left col-md-4 col-sm-6">
  <div className="footer-col">
                   <h3 className='text-light'>Company</h3>
                   <ul>
                         <li>About Us</li>
                         <li>Blogs</li>
                         <li>Contact Us</li>
                         <li>Carreer</li>
                    </ul>
                 </div>
  </div>
  <div className="footer-center col-md-4 col-sm-6">
    <div>
      <i className="fa fa-map-marker"></i>
      <p><span> Kozhikode</span> Kerala, India</p>
    </div>
    <div>
      <i className="fa fa-phone"></i>
      <p> (+91) 0495 395798</p>
    </div>
    <div>
      <i className="fa fa-envelope"></i>
      <p><a href="#"> Bookies@g.com</a></p>
    </div>
  </div>
  <div className="footer-right col-md-4 col-sm-6">
    <h2>BOOKIES</h2>
    <p className="menu">
      <a href="#"> Home</a> <br />
      <a href="#"> About</a> <br />
      <a href="#"> Contact Us</a>
    </p>
    <p className="name"> BOOKIES &copy; 2023</p>
  </div>
</footer>



   </>
  )
}

export default Footer



