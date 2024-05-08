import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth';

export const Logout = () => {

    const {setAuth, setCounters} = useAuth();
    const Navigate = useNavigate();

    useEffect(() => {
        //Vaciar el localstorage
        localStorage.clear();

        //Setear estados globales a vacio
        setAuth({});
        setCounters({});

        //Redireccion al login (Navigate)
        Navigate("/login");
    })

  return (
    <h1>Cerrando Sesion.....</h1>
  )
}
