import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        status: "not-authenticated",
        uid: null,
        username: "",
        rol: "",
        persona: {
            nombre: "",
            apellido: "",
            email: "",
            telefono: "",
            sexoBiologico: "",
        },
        matricula: "",  // Aquí se asigna directamente fuera de persona
        especialidad: "",  // Aquí también se asigna directamente
        token: "",
        errorMessage: null,
    },
    reducers: {
        checkingCredentials: (state) => {
            state.status = "checking";
        },
        login: (state, { payload }) => {
            state.status = "authenticated";
            state.uid = payload.uid;
            state.username = payload.username;
            state.rol = payload.rol;

            // Asignación de los datos de persona
            state.persona = payload.persona;  // Aquí asignamos todo el objeto persona

            // Asignación de los campos adicionales directamente
            state.matricula = payload.matricula;  // Ahora matricula se asigna directamente
            state.especialidad = payload.especialidad;  // Y especialidad también
            state.token = payload.token;
            state.errorMessage = null;
        },
        logout: (state, { payload }) => {
            state.status = "not-authenticated";
            state.uid = null;
            state.username = "";
            state.rol = "";
            state.persona = {
                nombre: "",
                apellido: "",
                email: "",
                telefono: "",
                sexoBiologico: "",
            };
            state.matricula = "";
            state.especialidad = "";
            state.token = "";
            state.errorMessage = payload?.errorMessage || null;
        },
        setError: (state, { payload }) => {
            state.status = "not-authenticated";
            state.errorMessage = payload;
        },
    },
});

// Exportar acciones
export const { login, logout, checkingCredentials, setError } = authSlice.actions;

// Exportar el reducer
export default authSlice.reducer;
