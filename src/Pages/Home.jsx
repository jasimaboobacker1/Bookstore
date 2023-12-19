import React from 'react'
import './Home.css'
import Carousel from 'react-bootstrap/Carousel';
import frth from '../Assets/frth.png'
import ffth from '../Assets/ffth.png'
import fst from '../Assets/fst.png'
import sec from '../Assets/sec.png'
import thrd from '../Assets/thrd.png'

import { Link } from 'react-router-dom';
import Header from '../Components/Header'




function Home() {
  
  return (
    <>
    <Header/>

   {/* <section className='d-flex flex-column align-items-center justify-content-center p-3'>
     
      <h2>Best Seller</h2>
      <div class="book-container">
       
  
          <div class="book">
              <img src="" alt="" className='img-fluid'/>
              
          </div>
          
          <div class="book">
              <img src="" alt="" className='img-fluid'/>
              
          </div>
          
          <div class="book">
              <img src="" alt="" className='img-fluid'/>
              
          </div>
          
          <div class="book">
              <img src="" alt="" className='img-fluid'/>
              
          </div>
          
          <div class="book">
              <img src="" alt="" className='img-fluid'/>
              
          </div>
         
          
          </div>
   </section>
   <section>
     
    
     <div class="book-container">
      
 
         <div class="book d-flex align-items-center justify-content-center">
          <div >yrfyehf</div>
          <div>vrvr</div>
          <div>rvrr</div>
             
             
         </div>
        
         
         </div>
  </section>

   <section className='d-flex flex-column align-items-center justify-content-center p-3'>
     
     <h2>Best Seller</h2>
     <div class="book-container">
      
 
         <div class="book">
             <img src="" alt="" className='img-fluid'/>
             
         </div>
         
         <div class="book">
             <img src="" alt="" className='img-fluid'/>
             
         </div>
         
         <div class="book">
             <img src="" alt="" className='img-fluid'/>
             
         </div>
         
         <div class="book">
             <img src="" alt="" className='img-fluid'/>
             
         </div>
         
         <div class="book">
             <img src="" alt="" className='img-fluid'/>
             
         </div>
        
         
         </div>
  </section> */}


  {/* </div> */}
 
    <section  className=' d-flex align-items-center justify-content-center mt-3' >
      <div style={{width:"100%",height:"auto"}} className='ms-5 me-5 mb-4 d-flex flex-wrap align-items-center justify-content-center'>
        <div id='wrapp' className='row row-cols-1 row-cols-md-2 ' >
         <div> <h3 style={{color:"#023246"}}>Fictional Books</h3><img src={frth} alt="" /></div>
       <div> <h3 style={{color:"#023246"}}>Manga Mania Best Seller</h3><img src={ffth} alt="" /></div>
        </div>
      </div>
    </section>
    <hr />
    <Carousel data-interval="1000" fade className='mt-1 mb-5 ms-4 me-4'>
            <Carousel.Item>
              <img src={fst} alt="" />
            </Carousel.Item>
            <Carousel.Item>
             <img src={sec} alt="" />
            </Carousel.Item>
            <Carousel.Item>
             <img src={thrd} alt="" />
            </Carousel.Item>
          </Carousel> 
       
    
   
    <hr />
   <section className='p-5 d-flex align-items-center justify-content-center '>
    
     <span>For More Offers and Details Please <Link to={'login'}>Login</Link></span></section>
       


     
    </>
  )
}

export default Home