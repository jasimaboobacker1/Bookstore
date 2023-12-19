import React, { useState, useEffect } from 'react';
import Adminnav from './Adminnav';
import { allordersAPI } from '../Services/allAPI';
import './Orders.css';

function Orders() {
  const [allorders, setAllorders] = useState([]);

  const getorderdetails = async () => {
    try {
      const result = await allordersAPI();
      setAllorders(result.data);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  useEffect(() => {
    getorderdetails();
  }, []);

  const handleProceed = async (orderId, index) => {
    try {
      const updatedOrders = [...allorders];
      updatedOrders[index].proceeded = true;
      setAllorders(updatedOrders);
    } catch (error) {
      console.error('Error updating order:', error);
    }
  };

  return (
    <>
      <Adminnav />
      <div className='d-flex flex-column align-items-center justify-content-center justify-content-between p-3' style={{ width: '100%', height: 'auto' }}>
        <h1>Orders Table</h1>
        <table className='content-table rounded shadow-lg bg-light text-dark border' style={{ width: '900px' }}>
          <thead className='border'>
            <tr>
              <th className='p-2 text-center'style={{width:"500px"}}>Book Name</th>
              <th className='p-2 text-center' style={{width:"150px"}}>Price</th>
              <th className='p-2 text-center'style={{width:"150px"}}>Mobile Number</th>
              <th className='p-2 text-center'style={{width:"150px"}}>Pincode</th>
              <th className='p-2 text-center'style={{width:"150px"}}>Address</th>
              <th className='p-2 text-center'style={{width:"150px"}}>Actions</th>
            </tr>
          </thead>

          <tbody>
            {allorders.length > 0 ? (
              allorders.map((order, index) => (
                <tr key={order._id} className='text-center'>
                  <td className='p-3'>{order.Bookname}</td>
                  <td className='p-3 '>{order.Price} &#8377;</td>
                  <td className='p-3'>{order.mobileNumber}</td>
                  <td className='p-3'>{order.pincode}</td>
                  <td className='p-3'>{order.address}</td>
                  <td className='p-3'>
                    {order.proceeded ? (
                      <span className='text-success '>
                        <i className="fa-solid fa-check fa-lg me-3" style={{ color: '#07b00a' }}></i>
                        Proceeded
                      </span>
                    ) : (
                      <button className='btn btn-success p-2' onClick={() => handleProceed(order._id, index)}>Proceed</button>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr className='active-row'>
                <td colSpan="6" className='text-danger text-center'>No Orders</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Orders;
