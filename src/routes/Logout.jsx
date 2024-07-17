import {useContext} from 'react';
import { auth } from '../firebase';
import { UserCtx } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

function Logout() {
    const {user, setUser} = useContext(UserCtx);
    const navigate = useNavigate();
    const signout = ()=>{
        auth.signOut()
        .then(()=>{
            setUser(null);
            navigate("/");
        })
        .catch((err)=>{
            console.error("Error signing out", err);
        });
    }
  return (
    <>
        {user && <p> {JSON.stringify(user)} </p>}
        <button onClick={signout}> Logout </button>
    </>
  )
}

export default Logout;