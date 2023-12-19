import { BASE_URL } from "./baseurl";
import { commonAPI } from "./commonAPI";

// register
export const registerAPI = async (user)=>{
    return await commonAPI("POST",`${BASE_URL}/user/register`,user,"")
}

// login
export const loginAPI = async(user)=>{
    return await commonAPI("POST",`${BASE_URL}/user/login`,user,"")
  
}

// sell book
export const sellAPI = async(reqBody,reqHeader)=>{
    return await commonAPI("POST",`${BASE_URL}/book/sell`,reqBody,reqHeader)

}

// getallbook
export const allBooksAPI = async()=>{
    return await commonAPI("GET",`${BASE_URL}/books/all`,"","")
}
// delete book

export const deletebookAPI=async(bookid)=>{
    return await commonAPI("DELETE",`${BASE_URL}/deletebook`,{bookid},"")
 }
// get alluser

export const getusers = async()=>{
    return await commonAPI("GET",`${BASE_URL}/allusers`,"","")
 }
//  delete user
 
export const deleteuser=async(userid)=>{
    return await commonAPI("DELETE",`${BASE_URL}/deleteuser`,{userid},"")
 } 

//  addorder
 
export const OrderAPI = async(order,header)=>{
    return await commonAPI("POST",`${BASE_URL}/addorder`,order,header)
 }
//  get all orders
export const allordersAPI = async()=>{
    return await commonAPI("GET",`${BASE_URL}/allorders`,"","")
}

// delete order

export const deleteorder=async(userid)=>{
    return await commonAPI("DELETE",`${BASE_URL}/deleteorder`,{userid},"")
 } 

