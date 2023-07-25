export class PerfilDocenteModel {

    constructor (
        public idperfil_docente: string,
        public foto_perfil: string,
        public cedula: string,
        public nombre: string,
        public apellido: string,
        public edad: string,
        public direccion_domiciliaria: string,
        public correo_electronico: string,
        public telefono: string
    ) {}

}