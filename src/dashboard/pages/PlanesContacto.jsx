import { useParams } from 'react-router-dom';
import {
    Typography,
    Box,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Paper,
    Button,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const dataPlanes = {
    Básico: {
        precio: "35.500",
        color: "#42a5f5",
        features: [
            "Pacientes limitados a 20",
            "Gestión de Turnos limitados a 30",
            "Funcionalidades básicas (Historia Clínica, Anamnesis, Métricas)",
            "Formulario de Seguimiento Semanal",
            "Planes Nutricionales limitados a 15",
            "Perzonalización de turnos vía e-mail",
            "Informes en pantalla",
            "Soporte básico",
            "Backup manual",
        ]
    },
    Premium: {
        precio: "55.500",
        color: "#66bb6a",
        features: [
            "Pacientes ilimitados",
            "Gestión de Turnos ilimitados",
            "Funcionalidades completas (Historia Clínica, Anamnesis, Antropometría, Métricas, Seguimiento Estadístico del Paciente)",
            "Formulario de Seguimiento optimizado",
            "Nutrideas ilimitadas",
            "Planes personalizados ilimitados",
            "Impresión en un solo click",
            "Análisis Nutricional Básico",
            "Soporte prioritario",
            "Backup automático",
            "Almacenamiento ilimitado"
        ]
    },
    Elite: {
        precio: "65.000",
        color: "#ef5350",
        features: [
            "Pacientes ilimitados",
            "Gestión de Turnos ilimitados",
            "Funcionalidades avanzadas con Cálculo Calórico",
            "Registro optimizado de ingesta alimentaria",
            "NutriIdeas Ilimitadas",
            "Notificaciones automáticas",
            "Informes PDF y en pantalla",
            "Planes personalizados ilimitados",
            "Análisis avanzado de nutrientes",
            "Envío de planes por e-mail",
            "Soporte técnico con formación continua",
            "Backup automático",
            "Almacenamiento ilimitado",
            "Licencia ilimitada"
        ]
    }
};

export const PlanesContacto = () => {
    const { nombrePlan } = useParams();
    const navigate = useNavigate();
    const plan = dataPlanes[nombrePlan];
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=nutribite.software@gmail.com&su=Quiero contratar el plan ${nombrePlan}&body=Hola, estoy interesado/a en contratar el plan ${nombrePlan} con un precio de $${plan.precio}/mes. Por favor, envíenme más información.`;
    if (!plan) {
        return (
            <Box sx={{ padding: 4 }}>
                <Typography variant="h4" color="error">Plan no encontrado</Typography>
            </Box>
        );
    }

    return (
        <Box
            sx={{
                minHeight: '100vh',
                background: `linear-gradient(135deg, ${plan.color}30 0%, #ffffff 100%)`,
                padding: 6,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                style={{ width: '100%', maxWidth: 700 }}
            >
                <Paper elevation={6} sx={{ borderRadius: 4, padding: 4 }}>
                    <Typography variant="h3" gutterBottom sx={{ color: plan.color, fontWeight: 'bold' }}>
                        Plan {nombrePlan}
                    </Typography>

                    <Typography variant="h5" gutterBottom sx={{ color: '#444' }}>
                        <strong>${plan.precio}</strong> / mes
                    </Typography>

                    <List>
                        {plan.features.map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.05 }}
                            >
                                <ListItem>
                                    <ListItemIcon>
                                        <CheckCircleIcon sx={{ color: plan.color }} />
                                    </ListItemIcon>
                                    <ListItemText primary={feature} />
                                </ListItem>
                            </motion.div>
                        ))}
                    </List>

                    <Box mt={4} display="flex" gap={2}>
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: plan.color,
                                fontWeight: 'bold',
                                '&:hover': { backgroundColor: `${plan.color}cc` }
                            }}
                            fullWidth
                            component="a"
                            href={gmailLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Contratar ahora
                        </Button>

                        <Button
                            startIcon={<ArrowBackIcon />}
                            onClick={() => navigate('/#planes')}
                            fullWidth
                            sx={{ borderColor: plan.color, color: plan.color }}
                            variant="outlined"
                        >
                            Volver
                        </Button>
                    </Box>
                </Paper>
            </motion.div>
        </Box>
    );
};

export default PlanesContacto;
