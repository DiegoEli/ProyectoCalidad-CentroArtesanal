export class PerfilEstudianteModel {

    constructor (
        public idperfil_estudiante: string,
        public foto_perfil: string,
        public cedula: string,
        public nombre: string,
        public apellido: string,
        public edad: string,
        public direccion_domiciliaria: string,
        public correo_electronico: string,
        public telefono: string,
        public nivel_educativo: string
    ) {}

}
