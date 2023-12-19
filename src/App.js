import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import Header from './Components/Header'
import Contact from './Components/Contact';
import Books from './Components/Books';
import Auth from './Components/Auth';
import Adminhome from './Admin/Adminhome';
import BooksManage from '../src/Admin/BooksManage'
import UserManage from '../src/Admin/UserManage'
import Addbook from './Admin/Addbook';
import Addcart from './Components/Addcart';
import OrderForm from '../src/Components/OrderForm'
import Orders from '../src/Admin/Orders';


function App() {
  return (
    <>
   
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='Books' element={<Books/>}/>
      <Route path='login' element={<Auth/>}/>
      <Route path='register' element={<Auth register/>}/>
      <Route path='adminhome' element={<Adminhome/>}/>
      <Route path='booksmanage' element={<BooksManage/>}/>
      <Route path='Usermanage' element={<UserManage/>}/>
      <Route path='addbook' element={<Addbook/>}/>
      <Route path='addcart' element={<Addcart/>}/>
      <Route path='orderform' element={<OrderForm/>}/>
      <Route path='orderlist' element={<Orders/>}/>
      
    </Routes>
    <Footer/>
     
    </>
  );
}

export default App;
