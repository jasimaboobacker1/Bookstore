import React, { useEffect, useState } from 'react';
import { allBooksAPI, deletebookAPI } from '../Services/allAPI';
import './BooksManage.css';
import { BASE_URL } from '../Services/baseurl';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import Adminnav from './Adminnav';

function BooksManage() {
  const [allbooks, setAllbooks] = useState([]);
  const [deleteresponse, setresponse] = useState(1);

  const getallbooks = async () => {
    const result = await allBooksAPI();

    if (result.status === 200) {
      setAllbooks(result.data);
    }
  };

  const handlebookdelete = async (bookId) => {
    try {
      const result = await deletebookAPI(bookId);
      if (result.status === 200) {
        setresponse(deleteresponse + 1);
        toast.success("Book deleted successfully");
      } else {
        toast.error("Action Failed !!! Please Try After Some Time...");
      }
    } catch (error) {
      console.error("Error deleting book:", error);
      toast.error("An error occurred while deleting the book. Please try again later.");
    }
  };

  useEffect(() => {
    getallbooks();
  }, [deleteresponse]);

  return (
    <>
      <Adminnav />

      <div className="container">
        <h1 className="heading text-dark">BOOKS</h1>
        <center>
          <Link to={'/addbook'}>
            <button className='btn text-light ms-5 me-5 mb-2 ' style={{ width: "auto", backgroundColor: "#023246" }}>Add New Books</button>
          </Link>
        </center>

        <div className="box-container mt-4">
          {allbooks.map((book) => (
            <div key={book._id} className="box">
              <img
                src={book ? `${BASE_URL}/Uploads/${book?.bookImage}` : 'Uploads\\image-1701440853878-its.png'}
                style={{ height: '300px', width: '100%', borderRadius: "0px" }}
                className="img-fluid card-img-top"
                alt={book.name}
              />
              <h6>Book Name: {book.bookname}</h6>
              <h6>Author: {book.author}</h6>
              <h6>Price: &#8377;{book.price}</h6>
              <button className='btn' onClick={() => handlebookdelete(book._id)}>Delete</button>
            </div>
          ))}
        </div>
        <ToastContainer theme="colored" autoClose={2000} position="top-right" />
      </div>
    </>
  );
}

export default BooksManage;
