

// import Signin from "./Signin";
import Main from "./Main";
import React, { useEffect, useState } from 'react'
import {auth,provider} from './Config';
import {signInWithPopup} from "firebase/auth";
import Home from "./Home";


export default function App() {
  const [value,setValue] = useState('')
  return (
    <div>
      
      {/* <Signin/> */}
      <div>
        {value?<Home/>:
      <Main setValue={(value)=>setValue(value)}/>
      
    }
    
      </div>
    </div>
  )
}
