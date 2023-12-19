import React from 'react'
import Adminnav from './Adminnav'

import { useState,useEffect } from 'react'
import { allordersAPI } from '../Services/allAPI'

function Orders() {
  const[allorders,setAllorders]=useState([])

  


  const getorderdetails = async()=>{
    const result = await allordersAPI()
    //  console.log(result.data);
    setAllorders(result.data)
    
 }


 

 useEffect(()=>{
  
  getorderdetails()
},[])
  return (
    <>
    <Adminnav/>
    <div className='d-flex flex-column align-items-center justify-content-center justify-content-between p-3' style={{width:"100%",height:"auto"}}>
    <h1>Orders Table</h1>
       
       <table className='rounded shadow-lg bg-light text-dark border ' style={{width:"900px"}}>
          <thead className='border'>
        
              <tr >
                  <th className=' p-2 text-center '>Book name</th>
                  <th className=' p-2 text-center'>Price</th>
                  <th className=' p-2 text-center'>Name</th>
                  <th className='p-2 text-center'>Mobile Number</th>
                  <th className='p-2 text-center'>Pincode</th>
                  <th className='p-2 text-center'>Address</th>
                  
                  
              </tr>
          </thead>
          
          <tbody>
          {
      allorders.length>0?allorders.map((order)=>(
        <tr className='text-center'>
       <td className='p-3'>{order.Bookname}</td>
       <td className='p-3'>{order.Price}  &#8377;</td>
       <td className='p-3'>{order.name}</td>
       <td className='p-3'>{order.mobileNumber}</td>
       <td className='p-3'>{order.pincode}</td>
       <td className='p-3'>{order.address}</td>
      <td className='p-3'><button className='btn btn-success'>Proceed</button></td>
     </tr>
      )): <h3 className='text-danger text-center'>No Orders</h3>
     }
          </tbody>
      </table> 

    </div>
    </>
  )
}

export default Orders