import React, { useEffect, useState } from 'react'
import './AddBook.css'
import { Form } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { sellAPI } from '../Services/allAPI';
import { Link } from 'react-router-dom';
import Adminnav from './Adminnav';
import { useNavigate } from 'react-router-dom';




function Addbook() {
    const [preview,setPreview] = useState("")
    const navigate = useNavigate();
    
  
  const [bookDetails,setBookDetails] = useState({
    bookname:"",author:"",price:"",bookImage:""
  })

  const handleclose = () =>{
    setBookDetails({
      bookname:"",author:"",price:"",bookImage:""
    })
    setPreview("")
    

  }
  const handlesell = async (e)=>{
    e.preventDefault()
    const  {bookname,author,price,bookImage} = bookDetails
    if(!bookname || !author || !price || !bookImage){
      toast.warning("Please fill the form completely") 
    }else{
      const reqBody = new FormData()
      reqBody.append("bookname",bookname)
      reqBody.append("author",author)
      reqBody.append("price",price)
      reqBody.append("bookImage",bookImage)

      
        const reqHeader = {
          "Content-Type":"multipart/form-data",
          
        }
        const result = await sellAPI(reqBody,reqHeader)
        if(result.status===(200)){
          console.log(result.data);
          toast.success("Book added Successfully")
          navigate('/booksmanage');
         

        }else{
          console.log(result);
          toast.warning(result.response.data);
        }
      
    }
  }


  useEffect(()=>{
    if(bookDetails.bookImage){
      setPreview(URL.createObjectURL(bookDetails.bookImage))
    }

  },[bookDetails.bookImage])

  return (
    <>
    <Adminnav/>
    <div style={{width:'100%',height:'auto'}} className='d-flex mt-5 justify-content-center align-items-center '>
    <div style={{width:'700px',height:'auto'}} className='shadow-lg p-3 mb-5 bg-body-tertiary d-flex justify-content-center align-items-center'>
    <label style={{width:'100%',height:'auto'}} className='p-3' >
    <input type="file" style={{ display: 'none' }} onChange={e=>setBookDetails({...bookDetails,bookImage:e.target.files[0]})}/>
   <img style={{width:"auto",height:"250px"}} className='img-fluid' src={preview?preview:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/310px-Placeholder_view_vector.svg.png"} alt="" />
                    </label>
    <Form className='text-secondary w-100 p-5 '>
   
      
          <h6>Book Name :</h6>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                          <Form.Control type="text" placeholder="Bookname" value={bookDetails.bookname} onChange={e=>setBookDetails({...bookDetails,bookname:e.target.value})}  />
                      </Form.Group>
                      <h6>Author:</h6>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                          <Form.Control type="text" placeholder="Authur" value={bookDetails.author} onChange={e=>setBookDetails({...bookDetails,author:e.target.value})}  />
                      </Form.Group>
                 
                  <h6>Price :</h6>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                      <Form.Control type="price" placeholder="Enter the price" value={bookDetails.price} onChange={e=>setBookDetails({...bookDetails,price:e.target.value})}  />
                  </Form.Group> 
                     <div className='d-flex  justify-content-center align-items-center '>
                          <div className='me-3'>
                              <Link to={'/booksmanage'}><button className='btn btn-dark' onClick={handleclose}>CANCEL</button></Link>
                          </div>
                          <div className='ms-3'>
                          <button className='btn btn-dark' onClick={handlesell} >Add</button>
       
                    </div>
                   </div>
            </Form></div>
            <ToastContainer 
theme="colored"
autoClose={2000}
position="top-right"/>
</div>
</>
  )
}

export default Addbook