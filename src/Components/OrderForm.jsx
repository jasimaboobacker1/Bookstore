import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';
import { OrderAPI } from '../Services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useLocation } from 'react-router-dom';


function OrderForm() {
  const navigate = useNavigate();
  const location = useLocation();

  const [userdetails, setUserdetails] = useState({
    Bookname: '',
    Author: '',
    Price: '',
    name: '',
    mobileNumber: '',
    pincode: '',
    address: ''
  });
  

  useEffect(() => {
    if (location.state && location.state.selectedBook) {
      const selectedBook = location.state.selectedBook;
      console.log("Selected Book in OrderForm:", selectedBook);
      setUserdetails({
        Bookname: selectedBook.bookname,
        Price: selectedBook.price,
        name: '',
  mobileNumber: '',
  pincode: '',
  address: ''
      });
    }
  }, [location.state]);
  
  
  console.log(userdetails);

  const handleclose = () => {
    setUserdetails({
      Bookname: '',
      Price: '',
      name: '',
      mobileNumber: '',
      pincode: '',
      address: ''
    });
    navigate('/books');
  };
  const handleadd = async (e) => {
    e.preventDefault();
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
  
      try {
        const res = await OrderAPI(reqBody, reqHeader);
        console.log(res);
  
        if (res.status === 200) {

          toast.success('Your Order Placed Successfully');
          setUserdetails({
            Bookname: '',  
            Price: '',     
            mobileNumber: '',
            pincode: '',
            address: '',
          });
        } else {
          toast.error(res.response?.data || 'Error placing order');
        }
      } catch (error) {
        console.error('Error placing order:', error);
        toast.error('Error placing order');
      }
    }
  };
  




  return (
    <>
      <Header />

      <div style={{ width: '100%', height: '100vh' }} className='d-flex align-items-center justify-content-center '>
        <div style={{ width: '600px', height: 'auto' }} className='shadow p-5'>
          <form onSubmit={handleadd}>
            <center>
              <h3 id='h3' className='text-dark mb-3'>
                BOOKIES
              </h3>
            </center>
            <div className='mb-3'>
  <label className='form-label'>Book Name</label>
  <input
    type='text'
    className='form-control'
    value={userdetails.Bookname}
    readOnly
    onChange={(e) => setUserdetails({ ...userdetails, Bookname: e.target.value })}
  />
</div>

<div className='mb-3'>
  <label className='form-label'>Price</label>
  <input
    type='text'
    className='form-control'
    value={userdetails.Price}
    readOnly
    onChange={(e) => setUserdetails({ ...userdetails, Price: e.target.value })}
  />
</div>

            <div className='mb-3'>
              <label className='form-label'>Name</label>
              <input
                type='text'
                className='form-control'
               
                value={userdetails.name}
                onChange={(e) => setUserdetails({ ...userdetails, name: e.target.value })}
              />
            </div>
            <div className='mb-3'>
              <label className='form-label'>Mobile Number</label>
              <input
                type='text'
                className='form-control'
                value={userdetails.mobileNumber}
                onChange={(e) => setUserdetails({ ...userdetails, mobileNumber: e.target.value })}
              />
            </div>
            <div className='mb-3 '>
              <label className='form-label'>Pincode</label>
              <input
                type='text'
                className='form-control'
                value={userdetails.pincode}
                onChange={(e) => setUserdetails({ ...userdetails, pincode: e.target.value })}
              />
            </div>
            <div className='mb-3 '>
              <label className='form-label'>Address</label>
              <br />
              <textarea
                id='comment'
                style={{ width: '100%' }}
                maxLength={100}
                className='bg-gray-200 p-1 h-20 w-full mt-0 good'
                value={userdetails.address}
                onChange={(e) => setUserdetails({ ...userdetails, address: e.target.value })}
              />
              <p>Payment Method: Cash on Delivery</p>
            </div>
            <div style={{ width: '100%' }} className='d-flex align-items-center justify-content-between'>
              <button style={{ width: '150px', backgroundColor: '#023246' }} onClick={handleclose} className='btn text-light'>
                Cancel
              </button>
              <button style={{ width: '150px', backgroundColor: '#023246' }} onClick={handleadd} className='btn text-light ms-5'>
                Submit
              </button>
            </div>
          </form>
        </div>
        <ToastContainer theme='colored' autoClose={2000} position='top-right' />
      </div>
    </>
  );
}

export default OrderForm;