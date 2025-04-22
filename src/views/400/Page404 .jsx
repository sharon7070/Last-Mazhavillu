import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Page404.css';

const Page404 = () => {
  const navigate = useNavigate();

  return (
    <div className="page404-wrapper">
      <div className="page404-graphic">
        <svg viewBox="0 0 512 512" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
          <path fill="red" d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 
            256-114.6 256-256S397.4 0 256 0zm0 472c-119.1 0-216-96.9-216-216S136.9 
            40 256 40s216 96.9 216 216-96.9 216-216 216z"/>
          <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fontSize="120" fill="red" fontWeight="bold">
            404
          </text>
        </svg>
      </div>
      <h1 className="page404-title">Page Not Found</h1>
      <p className="page404-description">It seems like you're lost in the woods </p>
      <button className="page404-button" onClick={() => navigate('/')}>
        Take Me Home
      </button>
    </div>
  );
};

export default Page404;
