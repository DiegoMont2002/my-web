import React from 'react'
import avatar from '../../../assets/img/user.png'
import { NavLink } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'
import { Global } from '../../../helpers/Global'

export const Nav = () => {

    const {auth} = useAuth();

    return (
        <nav className="navbar__container-lists">

            <ul className="container-lists__menu-list">
                <li className="menu-list__item">
                    <NavLink to="/social" className="menu-list__link">
                        <i className="fa-solid fa-house"></i>
                        <span className="menu-list__title">Inicio</span>
                    </NavLink>
                </li>

                <li className="menu-list__item">
                    <NavLink to="/social/feed" className="menu-list__link">
                        <i className="fa-solid fa-list"></i>
                        <span className="menu-list__title">Social</span>
                    </NavLink>
                </li>

                <li className="menu-list__item">
                    <NavLink to="/social/gente" className="menu-list__link">
                        <i className="fa-solid fa-user"></i>
                        <span className="menu-list__title">Gente</span>
                    </NavLink>
                </li>

                <li className="menu-list__item">
                    <NavLink to="#" className="menu-list__link">
                    <i className="fa-regular fa-bed"></i>
                        <span className="menu-list__title">Hoteles</span>
                    </NavLink>
                </li>

                <li className="menu-list__item">
                    <NavLink to="#" className="menu-list__link">
                        <i className="fa-regular fa-restaurant"></i>
                        <span className="menu-list__title">Restaurantes</span>
                    </NavLink>
                </li>

                <li className="menu-list__item">
                    <NavLink to="#" className="menu-list__link">
                        <i className="fa-regular fa-zonas"></i>
                        <span className="menu-list__title">Zonas Arqueologicas</span>
                    </NavLink>
                </li>

                <li className="menu-list__item">
                    <NavLink to="#" className="menu-list__link">
                        <i className="fa-regular fa-zonas"></i>
                        <span className="menu-list__title">Zonas Naturales</span>
                    </NavLink>
                </li>
                
            </ul>

            <ul className="container-lists__list-end">
                <li className="list-end__item">
                    <NavLink to={"/social/perfil/"+auth._id} className="list-end__link-image">
                        <img src={Global.url + "user/avatar/" + auth.image} className="list-end__img" alt="Imagen de perfil"></img>
                        
                    </NavLink>
                </li>
                <li className="list-end__item">
                    <NavLink to={"/social/perfil/"+auth._id} className="list-end__link">
                        <span className="list-end__name">{auth.nick}</span>
                    </NavLink>
                </li>
                <li className="list-end__item">
                    <NavLink to="/social/ajustes" className="list-end__link">
                    <i className="fa-solid fa-gear"></i>
                        <span className="list-end__name">Ajustes</span>
                    </NavLink>
                </li>
                <li className="list-end__item">
                    <NavLink to='/social/logout' className="list-end__link">
                    <i className="fa-solid fa-arrow-right-from-bracket"></i>
                        <span className="list-end__name">Cerrar Sesion</span>
                    </NavLink>
                </li>
            </ul>

        </nav>
        
    )
}
