import { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom';
import '../../Style/section1.css';
export const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <header
        className="d-flex align-items-center justify-content-center backgroundd sticky-top ">
        <div className="container d-flex align-items-center justify-content-between">
          <Link to="/" className="d-flex align-items-center">
            <img src="../../../public/logo.svg" alt="../../../public/logoMain.png" className='logoo' />
            <span className='ms-2 fs-4 fw-bold text-black' style={{ textDecoration: 'none' }}>SINTACC</span>
          </Link>

          <nav className="navbar navbar-expand-sm d-none d-md-flex align-items-center gap-3">
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
              to="/planes"
              className={({ isActive }) => `peso nav-link nav-item ${isActive ? 'activo' : ''}`}>
              Planes
            </NavLink>
            <NavLink
              to="/conocenos"
              className={({ isActive }) => `peso nav-link nav-item ${isActive ? 'activo' : ''}`}>
              Conocenos
            </NavLink>
          </nav>

          <Button variant='light' className='text-success' onClick={() => setIsModalOpen(true)}>
            Login
          </Button>
        </div>
      </header>

      <Modal show={isModalOpen} onHide={() => setIsModalOpen(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formUsername">
              <Form.Label>Usuario</Form.Label>
              <Form.Control type="text" placeholder="Nombre de usuario" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Ingresar contraseña" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={() => setIsModalOpen(false)}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </>

  );
};




export default Navbar
