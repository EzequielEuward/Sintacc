
import { HomeIcon, Settings2Icon, SettingsIcon, UsersIcon, CalendarIcon, BarChartIcon } from '../../ui/Dashboard/components/IconTable'
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../../Style/dashboard.css';
export const NavStudio = () => {
    return (
        <>
            <Nav className="flex-column p-3">
                <NavLink
                    to="/home"
                    className={({ isActive }) => `p-2 text-secondary d-flex align-items-center text-decoration-none ${isActive ? 'activo' : ''}`}>
                    <HomeIcon />
                    Inicio
                </NavLink>

                <NavLink
                    to="/pacientes"
                    className={({ isActive }) => `p-2 text-secondary d-flex align-items-center text-decoration-none ${isActive ? 'activo' : ''}`}>
                    <UsersIcon />
                    Pacientes
                </NavLink>


                <NavLink
                    to="/Turnos"
                    className={({ isActive }) => `p-2 text-secondary d-flex align-items-center text-decoration-none ${isActive ? 'activo' : ''}`}>
                    <CalendarIcon />
                    Turnos
                </NavLink>

                <NavLink
                    to="/Reportes"
                    className={({ isActive }) => `p-2 text-secondary d-flex align-items-center text-decoration-none ${isActive ? 'activo' : ''}`}>

                    <BarChartIcon />
                    Reportes
                </NavLink>

                <NavLink
                    to="/Configuraciones"
                    className={({ isActive }) => `p-2 text-secondary d-flex align-items-center text-decoration-none ${isActive ? 'activo' : ''}`}>
                    <SettingsIcon />
                    Configuraciones
                </NavLink>

                <NavLink
                    to="/versiones"
                    className={({ isActive }) => `p-2 text-secondary d-flex align-items-center text-decoration-none ${isActive ? 'activo' : ''}`}>
                    <Settings2Icon />
                    Versiones
                </NavLink>
            </Nav>
        </>
    )
}

export default NavStudio
