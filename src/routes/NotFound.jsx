import React from 'react';
import { FaHome } from 'react-icons/fa';
import { TbFaceIdError } from "react-icons/tb";
import { Link, useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <>
        <div style={{textAlign:'center', justifyContent:'center', display:'flex'}}>
          <div>

            <h2 > Esta página no existe </h2>
          
            <div>
              <TbFaceIdError style={{fontSize:'100px'}}/>
            </div>

            <button onClick={()=>navigate(-1)}> Volver </button>

            <Link style={{display:'block'}} to={'/'}> Volver al incio <FaHome style={{paddingTop:'5'}}/></Link>
          </div>
            
        </div>
        
    </>
  )
}
