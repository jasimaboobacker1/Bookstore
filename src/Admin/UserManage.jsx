import React from 'react'
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react'
import { getusers,deleteuser } from '../Services/allAPI'
import Adminnav from './Adminnav'

function UserManage() {
    const[allusers,setallusers]=useState([])
    const [delresponse,setdelresponse]=useState(1)



    const getusersdetails = async()=>{
        const result = await getusers()
        //  console.log(result.data);
        setallusers(result.data)
        
     }

     const handledeleteuser = async(e)=>{
        // console.log(e);
        console.log(e._id);
        const reqBody = e._id
        const res = await deleteuser(reqBody)
        if(res.status==200){
          setdelresponse(delresponse+1)
        }
        else{
          alert("Action Failed!!! Please try after some time")
        }
        
      }



     useEffect(()=>{
        getusersdetails()
      },[delresponse])
  return (
    <>
    <Adminnav/>
    
       <div className="tablecontainer d-flex flex-column align-items-center mt-5 " style={{width:"100%",height:"100vh"}}>
        <h1>Users Table</h1>
       
         <table className='rounded shadow-lg bg-light text-dark  ' style={{width:"900px"}}>
            <thead className='border'>
          
                <tr >
                    <th className='p-2 text-center '>Username</th>
                    <th className='p-2 text-center'>Password</th>
                    <th className='p-2 text-center'>Email</th>
                    <th className='p-2 text-center'>Actions</th>
                </tr>
            </thead>
            
            <tbody>
            {
        allusers.length>0?allusers.map((users)=>(
          <tr className='text-center'>
         <td className='p-3'>{users.username}</td>
         <td>{users.password}</td>
         <td>{users.email}</td>
         <td><button className='btn btn-danger' onClick={e=>handledeleteuser(users)}>Block User</button></td>
       </tr>
        )): <h3 className='text-danger text-center'>No Users</h3>
       }
            </tbody>
        </table> 
       </div>
    
    </>
  )
}

export default UserManage