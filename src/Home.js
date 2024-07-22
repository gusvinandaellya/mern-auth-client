import React from 'react';
import {Link} from 'react-router-dom';

export default function Home({email, logOut}) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          {
            email ? (
              <>
                Welcome {email} to the MERN Tutorial : <br/> Register and Login
              </>
            ) : (
              'Welcome to the MERN Tutorial: Register and Login'
            )
          }
        </h1>
        <div className="flex flex-col gap-4">
          { email ? (
            <>
              <button onClick={() => logOut()} className="w-full px-6 py-3 text-white bg-black rounded-md text-lg hover:bg-gray-700 transition duration-300">Sign Out</button>
            </>
          ) : (
            <>
              <Link to="/register" className="w-full px-6 py-3 text-white bg-black rounded-md text-lg hover:bg-gray-700 transition duration-300">Sign Up</Link>
              <Link to="/login" className="w-full px-6 py-3 text-white bg-black rounded-md text-lg hover:bg-gray-700 transition duration-300">Sign In</Link>
            </>
          ) }
        </div>
      </div>
    </div>
  );
}
