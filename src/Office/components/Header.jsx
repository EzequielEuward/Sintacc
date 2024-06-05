import React from 'react';
import { Link, NavLink } from 'react-router-dom'
import { Navbar, Nav, Offcanvas, Button } from 'react-bootstrap';
import { MenuIcon } from '../../ui/CaracterCard/SvgCardCaracteristicas';
import '../../Style/section1.css';

export const Header = () => {
  return (
    <section className='sticky-top backgroundd' id="home">
      <header className="d-flex align-items-center justify-content-between h-20 w-100 p-4 p-md-6">
        <Link to="#" className="me-3 d-flex align-items-center tex-decoration-none" >
          <img src="/logoTest.png" alt="logo" className="logoo me-2 img-fluid" />

        </Link>
        <Link to="#" className='me-3 d-flex-align-items-center text-decoration-none'> <span className='text-decoration-none '>SINTACC</span></Link>
        <div className="ms-auto justify-content-between align-items-center">
         
          <Navbar expand="lg" className="d-none d-lg-flex">

            <Nav className="ms-auto">

              <NavLink
                to="/home"
                className={({ isActive }) => `peso nav-link nav-item ${isActive ? 'activo' : ''}`}>
                Inicio
              </NavLink>

              <NavLink
                to="/caracteristicas"
                className={({ isActive }) => `peso nav-link nav-item ${isActive ? 'activo' : ''}`}>
                Caracteristicas
              </NavLink>

              <NavLink
                to="/web"
                className={({ isActive }) => `peso nav-link nav-item ${isActive ? 'activo' : ''}`}>
                Web
              </NavLink>

              <NavLink
                to="/planes"
                className={({ isActive }) => `peso nav-link nav-item ${isActive ? 'activo' : ''}`}>
                Planes
              </NavLink>

              <NavLink
                to="/equipo"
                className={({ isActive }) => `peso nav-link nav-item ${isActive ? 'activo' : ''}`}>
                Equipo
              </NavLink>

              <NavLink
                to="/contactos"
                className={({ isActive }) => `peso nav-link nav-item ${isActive ? 'activo' : ''}`}>
                Contactos
              </NavLink>

            </Nav>
          </Navbar>
          <div className="d-lg-none me-3">
            <Button variant="outline-secondary" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
              <MenuIcon className="h-6 w-6" />
              <span className="visually-hidden">SINTACC</span>
            </Button>
            <Offcanvas id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="start">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel"></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="flex-column">
                  <NavLink
                    to="/home"
                    className={({ isActive }) => `peso nav-link nav-item ${isActive ? 'activo' : ''}`}>
                    Inicio
                  </NavLink>

                  <NavLink
                    to="/caracteristicas"
                    className={({ isActive }) => `peso nav-link nav-item ${isActive ? 'activo' : ''}`}>
                    Caracteristicas
                  </NavLink>

                  <NavLink
                    to="/web"
                    className={({ isActive }) => `peso nav-link nav-item ${isActive ? 'activo' : ''}`}>
                    Web
                  </NavLink>

                  <NavLink
                    to="/planes"
                    className={({ isActive }) => `peso nav-link nav-item ${isActive ? 'activo' : ''}`}>
                    Planes
                  </NavLink>

                  <NavLink
                    to="/equipo"
                    className={({ isActive }) => `peso nav-link nav-item ${isActive ? 'activo' : ''}`}>
                    Equipo
                  </NavLink>

                  <NavLink
                    to="/contactos"
                    className={({ isActive }) => `peso nav-link nav-item ${isActive ? 'activo' : ''}`}>
                    Contactos
                  </NavLink>
                </Nav>
              </Offcanvas.Body>
            </Offcanvas>
          </div>
        </div>
        <div className="d-flex gap-3 align-items-center">
          <Button variant="outline-primary">Iniciar sesión</Button>
        </div>
      </header>
    </section>
  );

};


export default Header;


