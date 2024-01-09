import React, { useState, useEffect } from 'react';
import './Adminhome.css';
import { Link } from 'react-router-dom';
import Adminnav from './Adminnav';
import { getusers } from '../Services/allAPI';

function Adminhome() {
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    // Fetch the number of users from your backend API
    const fetchUserCount = async () => {
      try {
        const result = await getusers();
        setUserCount(result.data.length);
      } catch (error) {
        console.error('Error fetching user count:', error);
      }
    };

    fetchUserCount();
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  return (
    <>
      <Adminnav />
      <div style={{ height: '150px', width:"100%" }} className="border rounded shadow p-2 bg-light text-dark d-flex align-items-center justify-content-center my-2">
        <h2>
          <i className="fa-solid fa-users me-2"></i>
          No Of Users: {userCount}
        </h2>
      </div>
    </>
  );
}

export default Adminhome;
