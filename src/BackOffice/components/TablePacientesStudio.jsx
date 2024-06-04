import { Dropdown } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export const TablePacientesStudio = () => {
    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Edad</th>
                        <th>Estado</th>
                        <th>Ingreso</th>
                        <th className="text-right">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="fw-medium">Ezequiel</td>
                        <td>Euward</td>
                        <td>21</td>
                        <td><span className="badge rounded-pill bg-success">Activo</span></td>
                        <td>3/5/2024</td>
                        <td className="text-right">
                            <Dropdown>
                                <Dropdown.Toggle variant="light" id="dropdown-basic">
                                <i className="bi bi-three-dots"></i>
                                    <span className="sr-only"> </span>
                                </Dropdown.Toggle>
                                <Dropdown.Menu align="end">
                                    <Dropdown.Item href="#">Ver paciente</Dropdown.Item>
                                    <Dropdown.Item href="#">Editar paciente</Dropdown.Item>
                                    <Dropdown.Item className="bg-danger rounded fw-bold">Eliminar paciente</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </td>
                    </tr>
                    <tr>
                        <td className="fw-medium">Leonel</td>
                        <td>Euward</td>
                        <td>23</td>
                        <td><span className="badge rounded-pill bg-danger">Inactivo</span></td>
                        <td>4/5/2024</td>
                        <td className="text-right">
                            <Dropdown>
                                <Dropdown.Toggle variant="light" id="dropdown-basic">
                                <i className="bi bi-three-dots"></i>
                                    <span className="sr-only"></span>
                                </Dropdown.Toggle>
                                <Dropdown.Menu align="end">
                                    <Dropdown.Item href="#">Ver paciente</Dropdown.Item>
                                    <Dropdown.Item >Editar paciente</Dropdown.Item>
                                    <Dropdown.Item className="bg-danger rounded fw-bold">Eliminar paciente</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default TablePacientesStudio
