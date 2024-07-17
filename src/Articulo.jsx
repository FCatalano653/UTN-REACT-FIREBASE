import React from "react";
import {NavLink, Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import NoFotoNaturaConBian from './assets/NoFotoNaturaConBian.webp';

function Articulo({nombre, urlfoto, id}){
    return(
        

            <article style={{boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius:'10px'}}>
                <img src={!urlfoto ? NoFotoNaturaConBian : urlfoto} width={200}/>
                <p>{nombre}</p>
                <NavLink style={({isActive})=>{
                    return{
                        color: isActive ? 'hotPink' : null,
                    }
                }} to={`/articulos/${id}`}> Ver más <FaEye style={{paddingTop:'5'}}/> </NavLink>

            </article>
        
    );
}

export default Articulo;