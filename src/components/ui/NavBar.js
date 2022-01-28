import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

//menu de navegacion responsivo con orientacion horizontal en pantallas grandes y vertical en pantallas pequeñas
export const Navbar = () => {

   const navigate = useNavigate();

   //redirige a la pagina de inicio cuando se presiona el boton y no permite el regreso a la pagina anterior
    const handleLogout = () => {
        navigate("/login", { replace: true });
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={ ({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '') }
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={ ({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '') }
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        className={ ({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '') }
                        to="/hero"
                    >
                        Hero
                    </NavLink>
                    <NavLink 
                        className={ ({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '') }
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className='nav-item nav-link text-info'>Miguel</span>
                    <button 
                        onClick={ handleLogout }
                        className="nav-item nav-link btn" 
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}