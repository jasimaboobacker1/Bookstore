import React, { useContext } from 'react';
import './Addcart.css'
import { BASE_URL } from '../Services/baseurl';
import { addcontext } from '../Components/ContextShare';
import Header from '../Components/Header'
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { OrderAPI } from '../Services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

function Addcart() {
  const { addthings } = useContext(addcontext);
 

  const [show, setShow] = useState(false);
  const [cartbooks, setCartbooks] = useState([]);

  const handleClose = () =>{ 
    setUserdetails({
      name:"",mobileNumber:"",pincode:"",address:""

    })

    setShow(false);
  }

  const handleShow = () => {
    const bookNames = addthings.map(book => book.bookname);
    setCartbooks(bookNames);
    setShow(true);
  }

  const numberOfBooks = addthings.length;
  const totalPrice = addthings.reduce((acc, book) => acc + book.price, 0);
  const [userdetails, setUserdetails] = useState({
    Bookname: '',
    Price: '',
    name: '',
    mobileNumber: '',
    pincode: '',
    address: ''
  });
   console.log(userdetails);
  

  const handleadd = async(e)=>{
    e.preventDefault()
    const { Bookname, Price, name, mobileNumber, pincode, address } = userdetails;
  
    if (!Bookname || !Price || !name || !mobileNumber || !pincode || !address) {
      toast.info('Please fill the form completely');
    } else {
      const reqBody = new FormData();
      reqBody.append('Bookname', Bookname);
      reqBody.append('Price', Price);
      reqBody.append('name', name);
      reqBody.append('mobileNumber', mobileNumber);
      reqBody.append('pincode', pincode);
      reqBody.append('address', address);
  
      const reqHeader = {
        'Content-Type': 'application/json',
      };
  
       const res = await OrderAPI(reqBody,reqHeader)
       console.log(res);
       if(res.status===200){
           toast.success("Your Order Placed Successfully")
           // reset state
           setUserdetails({
            name:"",mobileNumber:"",pincode:"",address:""
           })    
          //  navigate('/books');  
          setShow(false) 
          
         }
         else{
           alert(res.response.data)
         }
    }
    
  }

  return (
    <>
      <Header />

      <div className="box-container d-flex">
 
<div className="container">
         
<h1 className="heading text-dark text-center">CART </h1>
<Link to={'/books'}>
  <button className='p-1 text-dark shadow' style={{ width: '100px',backgroundColor:"white",border:"none",borderRadius:"5px" }}>
  <i class="fa-solid fa-arrow-left" ></i>
            <span className='ms-2'>  Back</span>
            </button>
</Link>



<div className="box-container p-5">
{addthings.length > 0 ? (
                addthings.map((book) => (
  


    <div className="box m-3">
       <img
                        src={book ? `${BASE_URL}/Uploads/${book?.bookImage}` : "Uploads\\image-1701440853878-its.png"}
                        style={{ height: '300px', width: '100%',borderRadius:"0px" }}
                        className="img-fluid card-img-top"
                        alt={book.name}
                      />
       <h6>Book Name: {book.bookname}</h6>
       <h6>Author: {book.author}</h6>
       <h6>Price: {book.price}</h6>
    </div>
     ))
     ) : (
       <h2 className='text-danger text-center mt-5'>Cart is Empty</h2>
     )}
    </div>
    </div>
   

        <div className='d-flex align-items-top justify-content-center p-5 mt-5 ' style={{ width: "550px", height: "600px" }}>
          <Card style={{ width: '18rem', borderRadius: "0px" }} className='d-flex align-items-center justify-content-center shadow'>
            <Card.Img variant="top" src="https://static.vecteezy.com/system/resources/previews/002/896/415/original/books-illustration-cartoon-books-books-vector.jpg" />
            <Card.Body className='d-flex flex-column align-items-center justify-content-center'>
              <Card.Title>No of Books: {numberOfBooks}</Card.Title>
              <Card.Text>
                Total Price: &#8377;{totalPrice.toFixed(2)}
              </Card.Text>
              <Button variant="" className='text-center text-light'  style={{ width: 'auto', backgroundColor: '#023246' }} onClick={handleShow}>
                Buy
              </Button>
            </Card.Body>
          </Card>
          </div>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Confirm details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {/* <h4>Selected Books</h4>
              <ul>
                {cartbooks.map((bookName, index) => (
                  <li key={index}>{bookName}</li>
                  
                ))}
              </ul>
              <h4>Total Price : <span> &#8377; {totalPrice}</span></h4> */}
              <form>
              <div className="mb-3">
  <label className="form-label">Books</label>
  <input
    type="text"
    className="form-control"
    value={cartbooks.map(bookName => bookName).join(', ')}  
    onChange={e => setUserdetails({ ...userdetails, Bookname: e.target.value })}
  />
</div>

  <div className="mb-3">
    <label  className="form-label">Total Price</label>
    <input type="text" className="form-control"  value={totalPrice}    onChange={e=>setUserdetails({...userdetails,Price:e.target.value})} />
  
  </div>
  <div className="mb-3">
  <label className="form-label">Name</label>
  <input
    type="text"
    className="form-control"
    value={userdetails.name}
    onChange={(e) => setUserdetails((prevDetails) => ({ ...prevDetails, name: e.target.value }))}
  />
</div>
<div className="mb-3">
  <label className="form-label">Mobile Number</label>
  <input
    type="text"
    className="form-control"
    value={userdetails.mobileNumber}
    onChange={(e) => setUserdetails((prevDetails) => ({ ...prevDetails, mobileNumber: e.target.value }))}
  />
</div>
<div className="mb-3">
  <label className="form-label">Pin Code</label>
  <input
    type="text"
    className="form-control"
    value={userdetails.pincode}
    onChange={(e) => setUserdetails((prevDetails) => ({ ...prevDetails, pincode: e.target.value }))}
  />
</div>
<label className="form-label">Address</label><br />
<textarea
  id='comment'
  style={{ width: "100%" }}
  maxLength={100}
  className='bg-gray-200 p-1 h-20 w-full mt-0 good'
  value={userdetails.address}
  onChange={(e) => setUserdetails((prevDetails) => ({ ...prevDetails, address: e.target.value }))}
/>

<p>Payment Method: Cash on Delivery</p>
 
</form>
              
               
             
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <button style={{ width: '150px', backgroundColor: '#023246' }} onClick={handleadd} className="btn text-light ms-5"> Submit</button>
            </Modal.Footer>
          </Modal>
        </div>
        <ToastContainer 
theme="colored"
autoClose={2000}
position="top-right"/>
     
    </>
  );
}

export default Addcart;
