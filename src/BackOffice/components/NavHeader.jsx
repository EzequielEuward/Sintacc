import { Container, Dropdown, Navbar,Form } from "react-bootstrap"
import {FormSearchStudio} from '../components/FormSearchStudio';
import { AvatarB1 } from "../../ui/Dashboard/components/IconTable";

export const NavHeader = () => {
  return (
    <>
       <Navbar bg="light" expand="lg" className="border-bottom">
          <Container fluid>
            <Navbar.Brand>SINTACC STUDIO</Navbar.Brand>
           <FormSearchStudio/>
            <Dropdown>
              <Dropdown.Toggle variant="light" id="dropdown-basic">
                <AvatarB1/>
                <span className="sr-only">Ezequiel Euward</span>
              </Dropdown.Toggle>
              <Dropdown.Menu align="end">
                <Dropdown.Header>Cuenta</Dropdown.Header>
                <Dropdown.Divider />
                <Dropdown.Item href="#">Configuraciones</Dropdown.Item>
                <Dropdown.Item href="#">Soporte</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#">Cerrar sesion</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Container>
        </Navbar>
    </>
  )
}

export default NavHeader
{/* <img src="../../assets/avatarSVG/avatar-boy-svgrepo-1.svg" width="32" height="32" className="rounded-circle" alt="Avatar" /> */}