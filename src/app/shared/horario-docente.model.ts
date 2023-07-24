export class HorarioDocenteModel {

    constructor(
        public idhorario_docente: string,
        public asignatura: string,
        public lunes: string,
        public martes: string,
        public miercoles: string,
        public jueves: string,
        public viernes: string,
        public sabado: string,
        public domingo: string,
        public perfil_docente_idperfil_docente: string,
        public modulo_idmodulo: string,
        public asignatura_idasignatura: string
    ) {}

}
