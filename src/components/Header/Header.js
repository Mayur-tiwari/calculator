import React from 'react';
import'./Header.css';
import { useRef,useEffect } from "react";

function Header(props){
 
  return (
    <div className='Header'>
        
      
        <div className='expression'>
            <p className='express' >{props.expression}</p>

        </div>
        <h3 className='result'>{props.result}</h3>
      

  
        
     
    </div>
  )
}

export default Header