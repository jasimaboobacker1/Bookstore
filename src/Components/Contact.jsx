import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Row,Form,Col } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../Components/Header'



function Contact() {
    const [show, setShow] = useState(false);
    const [contact,setContact] = useState({
      name:"",email:"",message:""
    })

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const hadlesub  = async (e)=>{
      e.preventDefault()
      const  {name,email,message} = contact
      if(!name || !email || !message ){
        toast.warning("Please fill the form completely") 
      }else{
        toast.success("Submited successfuly") 
        handleClose()
      }
    }
   
      
  return (
    <>
    <Header/>
   
   <div style={{width:"100%",height:"500px"}} className='d-flex align-items-center justify-content-center'>
      
      <div style={{width:"750px",height:"auto"}} className='d-flex align-items-center justify-content-center flex-column p-5 shadow-lg p-3 mb-5 bg-body-tertiary rounded mt-3'>
     <h4> Connect with Us:</h4>
  <div style={{width:"700px" ,height:"auto"}} className='p-3'>
    <center><p>At BOOKIES, we value the opportunity to engage with our customers. Whether you have a question about our extensive collection of books, need assistance with an order, or simply want to share your literary interests, we're here for you.Stay connected with the world of literature through BOOKIES - where every page turns into an enriching experience. We look forward to hearing from you!. Reach out to us using the contact information below:</p></center>
  </div>
  
  <div>
    📧 Email: bookies@gmail.com <br />
    📞 Phone: +91 9496625445
  </div>
  
  <div className='p-2'>
        <Button style={{backgroundColor:"#023246"}} onClick={handleShow}>
            Contact Us
          </Button>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Contact Us</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" value={contact.name} onChange={e=>setContact({...contact,name:e.target.value})}  />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" value={contact.email} onChange={e=>setContact({...contact,email:e.target.value})} />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={4} placeholder="Type your message here" value={contact.message} onChange={e=>setContact({...contact,message:e.target.value})}  />
          </Form.Group>
        </Row>
      </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={hadlesub}>
              Submit
              </Button>
            </Modal.Footer>
          </Modal>
     </div>
  
      </div>
      <ToastContainer 
       theme="colored"
       autoClose={2000}
       position="top-right"/>
   </div>
   

    </>
  )
}

export default Contact