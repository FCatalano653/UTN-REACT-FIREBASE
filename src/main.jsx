import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Register from './routes/register.jsx'
import Login from './routes/login.jsx'
import NotFound from './routes/NotFound.jsx'
import ArticuloDetalle from './routes/ArticuloDetalle.jsx'
import { UserCtxProvider } from './context/UserContext.jsx'
import Logout from './routes/Logout.jsx'
import AuthGuard from './routes/AuthGuard.jsx'
import Protected from './routes/Protected.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserCtxProvider>
          <BrowserRouter basename='/ecomm-natura'>
            <Routes>
                <Route path='/' element={<App/>}>
                  <Route path='login' element={<Login/>}></Route>
                  <Route path='register' element={<Register/>}></Route>
                  <Route element={<AuthGuard/>} > 
                    <Route path='protected' element={<Protected/>}></Route>
                  </Route>
                  <Route path='logout' element={<Logout/>}></Route>
                  <Route path='articulos' >
                    <Route
                      index
                      element={
                        <section>
                          <p> Seleccione un articulo </p>
                        </section>
                      }
                      />
                    <Route path={':articuloId'} element={<ArticuloDetalle/>}/>
                  </Route>
                </Route>
                <Route path='*' element={<NotFound/>}></Route>
            </Routes>
          </BrowserRouter>
    </UserCtxProvider>
  </React.StrictMode>
);
