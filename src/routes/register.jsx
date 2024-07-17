import { Link } from "react-router-dom";
import '../css/formStyles.css';
import { FaKey, FaUser, FaAt } from "react-icons/fa";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

export default function Register(){
    const [error, setError] = useState(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        const {email, password} = e.target.elements;
        createUserWithEmailAndPassword(auth, email.value, password.value)        
        .then((userCredential)=>{
            const user = userCredential.user;
            console.log(user);
            setError(null);
        })
        .catch((errr)=>{
            const errorCode = errr.code;
            const errorMessage = errr.message;
            console.error(errorCode);
            console.error(errorMessage);
            setError(errorMessage);
        });

    };
    return(
        <main>
            <div className="contenedor-login">
                <h2>Registrarse</h2>
                <form id="form-login" method="post" onSubmit={handleSubmit}>
                    <div className="grupo">
                        <div className="labelIcon-div">
                            <FaUser className="labelIcon"/>
                            <label htmlFor="usuario"> Nombre de usuario </label>
                        </div>
                        <input readOnly="readonly" type="text" name="usuario" placeholder="Ingresá tu usuario" />
                    </div>

                    <div className="grupo">
                        <div className="labelIcon-div">
                            <FaAt className="labelIcon"/>
                            <label htmlFor="email"> Correo electrónico </label>
                        </div>
                        <input type="email" name="email" required placeholder="Ingresá tu correo" />
                    </div>

                    <div className="grupo">
                        <div className="labelIcon-div">
                            <FaKey className="labelIcon"/>
                            <label htmlFor="password">Contraseña</label>
                        </div>
                        <input type="password" name="password" required placeholder="Ingresá tu contraseña" />                        
                    </div>
                    <div className="boton-container">
                        <button id="botonIngresar" type="submit" className="boton">Registrarme</button>
                        {/* <Link id="botonRegistrarme" to="../register" className="boton"> Registrarme </Link> */}
                    </div>
                      
                </form>

                {error && <div className="error">{error}</div>}

            </div>
        </main>
    );
}