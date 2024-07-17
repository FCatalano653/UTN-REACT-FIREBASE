import { Link } from "react-router-dom";
import '../css/formStyles.css';
import { FaKey, FaAt } from "react-icons/fa";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function Login(){
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const {email, password} = e.target.elements;
        signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential)=>{
            console.log(userCredential);
            setError(null);
            navigate("/protected");
        })
        .catch((errr)=>{
            const errorCode = errr.code;
            const errorMessage = errr.message;
            console.error(errorCode);
            console.error(errorMessage);
            setError(errorMessage);
        });;
    };
    return(
        <main>
            <div className="contenedor-login">
                <h2>Ingresá a tu cuenta</h2>
                <form id="form-login" method="post" onSubmit={handleSubmit}>
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
                        <Link className="link">Olvidé mi contraseña</Link>
                    </div>
                    <div className="boton-container">
                        <button id="botonIngresar" type="submit" className="boton">Ingresar</button>
                        <Link id="botonRegistrarme" to="../register" className="boton"> Registrarme </Link>
                    </div>

                                                 
                </form>

                {error && <div className="error">{error}</div>}

            </div>
        </main>
    );
}