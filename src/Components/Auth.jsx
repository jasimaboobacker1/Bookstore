import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { registerAPI,loginAPI } from '../Services/allAPI';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header'


function Auth({register}) {
    const navigate = useNavigate()
    const [userData,setUserData] = useState({
        username:"",email:"",password:""
    })
     const isRegisterForm = register?true:false
     
     const handleregister = async (e) =>{
        e.preventDefault()
        const {username,email,password} = userData
        if(!username || !email || !password){
          toast.info("Please fill the form completely")
        }else{
          const result = await registerAPI(userData)
          if(result.status===200){
            toast.success(`${result.data.username} has registerd successfully!!!`)
            setUserData({
              username:"",email:"",password:""
            })
            navigate('/login')
          }else{
            toast.warning(result.response.data)
            console.log(result);
          }
        }
     }
     const handleLogin = async (e)=>{
        e.preventDefault()
        const {email,password} = userData
        if(userData.email=="admin@gmail.com"&&userData.password=="admin123"){
          navigate('/adminhome')
        }else{
          const result = await loginAPI(userData)
          if(result.status===200){
            // toast.success(`${result.data.username} has registerd successfully!!!`)
            sessionStorage.setItem("existingUser",JSON.stringify(result.data.existingUser))
            sessionStorage.setItem("token",result.data.token)
            setUserData({
              email:"",password:""
            })
            navigate('/')
            window.location.reload();
        
          }else{
            toast.warning(result.response.data)
            console.log(result);
          }
        }
      }

  return (
    <>
    <Header/>
 
            <div style={{width:'100%',height:'700px'}} className='d-flex justify-content-center align-items-center '>
                <div style={{width:'700px',height:'400px'}} className='shadow-lg p-3 mb-5 bg-body-tertiary'>
<div className='d-flex justify-content-center flex-column align-items-center'>
                    <h1 className='fw-bolder text-secondary'>BOOKIES</h1>
                            <h5 className='fw-bolder text-secondary mt-2 pb-3'>
                                {
                                    isRegisterForm ? 'Sign up to your Account':'Sign in to your Account'
                                }
                            </h5>
</div>
                <Form className='text-secondary w-100'>
                        {
                                isRegisterForm && 
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Control type="text" placeholder="Username" value={userData.username} onChange={e=>setUserData({...userData,username:e.target.value})} />
                                </Form.Group>
                             } 
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Control type="email" placeholder="Enter Email Id" value={userData.email} onChange={e=>setUserData({...userData,email:e.target.value})} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Control type="password" placeholder="Enter Password" value={userData.password} onChange={e=>setUserData({...userData,password:e.target.value})} />
                            </Form.Group>
                              {
                                isRegisterForm ? 
                                <div>
                                    <button className='btn btn-dark' onClick={handleregister} >Register</button>
                                    <p>Already have an Account? Click Here To <Link style={{textDecoration:'none',color:'red'}} to={'/login'}>Login</Link> </p>
                                </div>:
                                <div>
                                <button className='btn btn-dark' onClick={handleLogin} >Login</button>
                                <p>New User? Click Here To <Link style={{textDecoration:'none',color:'red'}} to={'/register'}>Register</Link> </p>
                            </div>
                              }
                        </Form>
                </div>
                <ToastContainer 
       theme="colored"
       autoClose={2000}
       position="top-right"/>
            </div>


    </>
  )
}

export default Auth