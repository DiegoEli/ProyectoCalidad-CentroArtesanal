export class HorarioEstudianteModel {

    constructor(
        public idhorario_estudiante: string,
        public lunes: string,
        public martes: string,
        public miercoles: string,
        public jueves: string,
        public viernes: string,
        public sabado: string,
        public domingo: string,
        public perfil_estudiante_idperfil_estudiante: string,
        public modulo_idmodulo: string,
        public asignatura_idasignatura: string
    ) {}

}
