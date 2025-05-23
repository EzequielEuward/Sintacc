import { Box, Table, TableHead, TableRow, Typography, TableCell, TableBody, Chip, IconButton } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const getChipColorEstado = (estado) => {
  const estadoLower = (estado || '').toLowerCase();
  switch (estadoLower) {
    case 'pendiente':
      return 'warning';
    case 'aprobado':
      return 'success';
    case 'fallido':
      return 'error';
    case 'reembolsado':
      return 'info';
    case 'enproceso':
    case 'en proceso':
      return 'primary';
    case 'cancelado':
      return 'default';
    default:
      return 'default';
  }
};

export const TablaConsulta = ({ handleMenuOpen, consultas = [] }) => {
  return (
    <Box sx={{ overflowX: 'auto' }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>DNI</TableCell>
            <TableCell>Fecha</TableCell>
            <TableCell>Apellido</TableCell>
            <TableCell>Nombre</TableCell>
            <TableCell>Diagnóstico</TableCell>
            <TableCell>Plan Alimenticio</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {consultas.map((row) => (
            <TableRow key={row.idConsulta} hover>
              <TableCell>{row.paciente?.persona.dni || 'N/A'}</TableCell>
              <TableCell>
                {row.fecha ? new Date(row.fecha).toLocaleDateString() : 'N/A'}
              </TableCell>
              <TableCell>
                {`${row.paciente?.persona.apellido || ''}`}
              </TableCell>

              <TableCell>
                {`${row.paciente?.persona.nombre || ''}`}
              </TableCell>

              <TableCell>
                <Chip
                  label={row.diagnostico || 'Sin diagnóstico'}
                  size="small"
                  sx={{
                    maxWidth: 180,
                    whiteSpace: 'normal',
                    height: 'auto',
                    '& .MuiChip-label': { py: 1 }
                  }}
                />
              </TableCell>
              <TableCell>
                <Chip
                  label={row.planAlimenticio || 'No asignado'}
                  color={getChipColorEstado(row.planAlimenticio)}
                  variant="outlined"
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {consultas.length === 0 && (
        <Box sx={{ p: 3, textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            No hay consultas registradas
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default TablaConsulta;