export class CalificacionesModel {

    constructor(
        public idcalificaciones: string,
        public nota_1p: string,
        public nota_2p: string,
        public promedio: string,
        public perfil_docente_idperfil_docente: string,
        public perfil_estudiante_idperfil_estudiante: string,
        public modulo_idmodulo: string,
        public asignatura_idasignatura: string
    ) { }

}
