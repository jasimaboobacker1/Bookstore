import React, { useEffect, useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { allBooksAPI } from '../Services/allAPI';
import './Books.css';
import { BASE_URL } from '../Services/baseurl';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../Components/Header';
import { addcontext } from '../Components/ContextShare';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';

function Books() {
  const [show, setShow] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const handleClose = () => setShow(false);

  // Use the useNavigate hook to get the navigation function
  const navigate = useNavigate();

  const handleShow = (book) => {
    setSelectedBook(book);
    setShow(true);
  };

  const [allbooks, setAllbooks] = useState([]);
  const { addthings, setaddthings } = useContext(addcontext);

  const getallbooks = async () => {
    try {
      const result = await allBooksAPI();
      if (result.status === 200) {
        setAllbooks(result.data);
      }
    } catch (error) {
      console.error('Error fetching books:', error);
      toast.error('Error fetching books');
    }
  };

  useEffect(() => {
    getallbooks();
  }, []);

  const handleCart = (e, book) => {
    e.preventDefault();
    setaddthings([...addthings, book]);
    toast.success('Book added to cart');
  };

  const handlePlaceOrder = () => {
    // Navigate to /orderform and pass the selectedBook details as state
    navigate('/orderform', { state: { selectedBook: selectedBook } });
  };

  return (
    <>
      <Header />

      <div className="container">
        <h1 className="heading text-dark">BOOKS</h1>
        <Link to={'/addcart'}>
          <button className='p-1 text-dark shadow' style={{ width: '100px', backgroundColor: 'white', border: 'none', borderRadius: '5px' }}>
            <i className="fa-solid fa-cart-plus me-2"></i>Cart {addthings.length}
          </button>
        </Link>

        <div className="box-container mt-4">
          {allbooks.map((book) => (
            <div className="box" key={book.id}>
              <img
                src={book ? `${BASE_URL}/Uploads/${book?.bookImage}` : 'Uploads\\image-1701440853878-its.png'}
                style={{ height: '300px', width: '100%', borderRadius: '0px' }}
                className="img-fluid card-img-top"
                alt={book.name}
              />
              <h6>Book Name: {book.bookname}</h6>
              <h6>Author: {book.author}</h6>
              <h6>Price: &#8377;{book.price}</h6>
              <i
                className="fa-solid fa-cart-shopping m-2 ms-2"
                style={{ cursor: 'pointer' }}
                onClick={(e) => handleCart(e, book)}
              ></i>
              <Button
                variant=""
                className='m-2 me-3 text-light'
                style={{ width: '100px', backgroundColor: '#023246' }}
                onClick={() => handleShow(book)}
              >
                Buy
              </Button>
            </div>
          ))}
        </div>
        <ToastContainer theme="colored" autoClose={2000} position="top-right" />
      </div>
      <Modal show={show} onHide={handleClose} >
  <Modal.Header closeButton>
    <Modal.Title>{selectedBook && selectedBook.bookname}</Modal.Title>
  </Modal.Header>
  <Modal.Body className='d-flex flex-column align-items-center justify-content-center'>
    <img
      src={selectedBook ? `${BASE_URL}/Uploads/${selectedBook?.bookImage}` : 'Uploads\\image-1701440853878-its.png'}
      style={{ height: '100%', width: '200px', objectFit: 'cover', borderRadius: '8px' }}
      alt={selectedBook && selectedBook.bookname}
    />
    <p>Author: {selectedBook && selectedBook.author}</p>
    <p>Price: &#8377;{selectedBook && selectedBook.price}</p>
    {/* Add more details as needed */}
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={handleClose} className='m-2 me-3 text-light'
                style={{ width: 'auto', backgroundColor: '#023246' }}>
      Close
    </Button>
    <Button
                variant=""
                className='m-2 me-3 text-light'
                style={{ width: 'auto', backgroundColor: '#023246' }}
                onClick={handlePlaceOrder}
              >
                Place Order
              </Button>
  </Modal.Footer>
</Modal>

    </>
  );
}

export default Books;
