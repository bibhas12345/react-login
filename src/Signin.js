import React, { useEffect, useState } from 'react'
import {auth,provider} from './Config';
import {signInWithPopup} from "firebase/auth";
import Home from './Home';
import { FcGoogle} from 'react-icons/fc';
import Main from './Main';
export default function Signin(props) {
  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      props.setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
    });
  };

  useEffect(() => {
    props.setValue(localStorage.getItem("email"));
  }, []);

  return (
    <div>
      <button className="bg-white px-5 p-1 text-gray-400 flex rounded-lg" onClick={handleClick}>
        <FcGoogle className="mt-1" />sign in with Google
      </button>

      <p></p>
    </div>
  );
}

