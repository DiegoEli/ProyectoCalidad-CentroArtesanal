-- -----------------------------------------------------
-- Schema BD_Centro-Artesanal-UG
-- -----------------------------------------------------
DROP DATABASE IF EXISTS BD_Centro_Artesanal_UG;

CREATE SCHEMA IF NOT EXISTS BD_Centro_Artesanal_UG;
USE BD_Centro_Artesanal_UG;

-- -----------------------------------------------------
-- Table perfil_estudiante
-- -----------------------------------------------------
DROP TABLE IF EXISTS perfil_estudiante;

CREATE TABLE IF NOT EXISTS perfil_estudiante (
  idperfil_estudiante INT NOT NULL AUTO_INCREMENT,
  foto_perfil LONGBLOB NULL,
  cedula VARCHAR(15) NULL,
  nombre VARCHAR(45) NOT NULL,
  apellido VARCHAR(45) NOT NULL,
  edad INT NOT NULL,
  direccion_domiciliaria VARCHAR(100) NULL,
  correo_electronico VARCHAR(45) NULL,
  telefono VARCHAR(15) NULL,
  nivel_educativo VARCHAR(45) NULL,
  PRIMARY KEY (idperfil_estudiante)
);

-- -----------------------------------------------------
-- Table modulo
-- -----------------------------------------------------
DROP TABLE IF EXISTS modulo;

CREATE TABLE IF NOT EXISTS modulo (
  idmodulo INT NOT NULL AUTO_INCREMENT,
  nombre_modulo VARCHAR(45) NULL,
  descripcion VARCHAR(300) NULL,
  PRIMARY KEY (idmodulo)
);

-- -----------------------------------------------------
-- Table asignatura
-- -----------------------------------------------------
DROP TABLE IF EXISTS asignatura;

CREATE TABLE IF NOT EXISTS asignatura (
  idasignatura INT NOT NULL AUTO_INCREMENT,
  nombre_asignatura VARCHAR(45) NOT NULL,
  PRIMARY KEY (idasignatura)
);

-- -----------------------------------------------------
-- Table horario_estudiante
-- -----------------------------------------------------
DROP TABLE IF EXISTS horario_estudiante;

CREATE TABLE IF NOT EXISTS horario_estudiante (
  idhorario_estudiante INT NOT NULL AUTO_INCREMENT,
  lunes VARCHAR(45) NULL,
  martes VARCHAR(45) NULL,
  miercoles VARCHAR(45) NULL,
  jueves VARCHAR(45) NULL,
  viernes VARCHAR(45) NULL,
  sabado VARCHAR(45) NULL,
  domingo VARCHAR(45) NULL,
  perfil_estudiante_idperfil_estudiante INT NOT NULL,
  modulo_idmodulo INT NOT NULL,
  asignatura_idasignatura INT NOT NULL,
  PRIMARY KEY (idhorario_estudiante),
  CONSTRAINT fk_horario_estudiante_perfil_estudiante1 FOREIGN KEY (perfil_estudiante_idperfil_estudiante) REFERENCES perfil_estudiante (idperfil_estudiante),
  CONSTRAINT fk_horario_estudiante_modulo1 FOREIGN KEY (modulo_idmodulo)REFERENCES modulo (idmodulo),
  CONSTRAINT fk_horario_estudiante_asignatura1 FOREIGN KEY (asignatura_idasignatura) REFERENCES asignatura (idasignatura)
);

-- -----------------------------------------------------
-- Table perfil_docente
-- -----------------------------------------------------
DROP TABLE IF EXISTS perfil_docente;

CREATE TABLE IF NOT EXISTS perfil_docente (
  idperfil_docente INT NOT NULL AUTO_INCREMENT,
  foto_perfil LONGBLOB NULL,
  cedula VARCHAR(15) NULL,
  nombre VARCHAR(45) NOT NULL,
  apellido VARCHAR(45) NOT NULL,
  edad INT NOT NULL,
  direccion_domiciliaria VARCHAR(45) NULL,
  correo_electronico VARCHAR(45) NULL,
  telefono VARCHAR(45) NULL,
  PRIMARY KEY (idperfil_docente)
);

-- -----------------------------------------------------
-- Table salario
-- -----------------------------------------------------
DROP TABLE IF EXISTS salario;

CREATE TABLE IF NOT EXISTS salario (
  idsalario INT NOT NULL AUTO_INCREMENT,
  titulo VARCHAR(45) NULL,
  contrato VARCHAR(45) NULL,
  cantidad_sueldo VARCHAR(45) NULL,
  perfil_docente_idperfil_docente INT NOT NULL,
  PRIMARY KEY (idsalario),
  CONSTRAINT fk_salario_perfil_docente1 FOREIGN KEY (perfil_docente_idperfil_docente) REFERENCES perfil_docente (idperfil_docente)
);

-- -----------------------------------------------------
-- Table calificaciones
-- -----------------------------------------------------
DROP TABLE IF EXISTS calificaciones;

CREATE TABLE IF NOT EXISTS calificaciones (
  idcalificaciones INT NOT NULL AUTO_INCREMENT,
  nota_1p DECIMAL(4, 2) NULL,
  nota_2p DECIMAL(4, 2) NULL,
  promedio DECIMAL(4, 2) NULL,
  perfil_docente_idperfil_docente INT NOT NULL,
  perfil_estudiante_idperfil_estudiante INT NOT NULL,
  modulo_idmodulo INT NOT NULL,
  asignatura_idasignatura INT NOT NULL,
  PRIMARY KEY (idcalificaciones),
  CONSTRAINT fk_calificaciones_perfil_docente1 FOREIGN KEY (perfil_docente_idperfil_docente) REFERENCES perfil_docente (idperfil_docente),
  CONSTRAINT fk_calificaciones_perfil_estudiante1 FOREIGN KEY (perfil_estudiante_idperfil_estudiante) REFERENCES perfil_estudiante (idperfil_estudiante),
  CONSTRAINT fk_calificaciones_modulo1 FOREIGN KEY (modulo_idmodulo) REFERENCES modulo (idmodulo),
  CONSTRAINT fk_calificaciones_asignatura1 FOREIGN KEY (asignatura_idasignatura) REFERENCES asignatura (idasignatura)
);

-- -----------------------------------------------------
-- Table horario_docente
-- -----------------------------------------------------
DROP TABLE IF EXISTS horario_docente;

CREATE TABLE IF NOT EXISTS horario_docente (
  idhorario_docente INT NOT NULL AUTO_INCREMENT,
  lunes VARCHAR(45) NULL,
  martes VARCHAR(45) NULL,
  miercoles VARCHAR(45) NULL,
  jueves VARCHAR(45) NULL,
  viernes VARCHAR(45) NULL,
  sabado VARCHAR(45) NULL,
  domingo VARCHAR(45) NULL,
  perfil_docente_idperfil_docente INT NOT NULL,
  modulo_idmodulo INT NOT NULL,
  asignatura_idasignatura INT NOT NULL,
  PRIMARY KEY (idhorario_docente),
  CONSTRAINT fk_horario_docente_perfil_docente1 FOREIGN KEY (perfil_docente_idperfil_docente) REFERENCES perfil_docente (idperfil_docente),
  CONSTRAINT fk_horario_docente_modulo1 FOREIGN KEY (modulo_idmodulo) REFERENCES modulo (idmodulo),
  CONSTRAINT fk_horario_docente_asignatura1 FOREIGN KEY (asignatura_idasignatura) REFERENCES asignatura (idasignatura)
);



-- -----------------------------------------------------
-- OPERACIONES DE INSERCIÓN
-- -----------------------------------------------------

-- Inserción en la tabla 'perfil_estudiante'
INSERT INTO perfil_estudiante (foto_perfil, cedula, nombre, apellido, edad, direccion_domiciliaria, correo_electronico, telefono, nivel_educativo) 
	VALUES
		('ruta_de_la_imagen.jpg', '123456789', 'Juan', 'Perez', 20, 'Calle 123, Ciudad X', 'estudiante@ug.edu.ec', '555-1234', 'Universitario');


-- Inserción en la tabla 'perfil_docente'
INSERT INTO perfil_docente (foto_perfil, cedula, nombre, apellido, edad, direccion_domiciliaria, correo_electronico, telefono) 
	VALUES
		('ruta_de_la_imagen.jpg', '987654321', 'Maria', 'Gomez', 30, 'Avenida ABC, Ciudad Y', 'profesor@ug.edu.ec', '555-5678');


-- Inserción en la tabla 'salario'
INSERT INTO salario (titulo, contrato, cantidad_sueldo, perfil_docente_idperfil_docente) 
	VALUES
		('Fijo', 'Nombramiento', '2,100.00', 1);        


-- Inserción en la tabla 'modulo'
INSERT INTO modulo (nombre_modulo, descripcion) 
	VALUES
		('Primer módulo', 'El plan de estudios de nuestro programa incluye una variedad de módulos diseñados para brindar a los estudiantes una formación integral en diversas áreas relevantes.');


-- Inserción en la tabla asignatura
INSERT INTO asignatura (nombre_asignatura) 
	VALUES
		('MANTENIMIENTO DE COMPUTADORAS'),
		('ROBOTICA'),
		('DESARROLLO WEB'),
		('INGLES'),
		('CABLEADO ESTRUCTURADO');


-- Inserción en la tabla 'horario_estudiante'
INSERT INTO horario_estudiante (lunes, martes, miercoles, jueves, viernes, sabado, domingo, perfil_estudiante_idperfil_estudiante, modulo_idmodulo, asignatura_idasignatura) 
	VALUES
		('07:00 - 10:00', '-', '-', '-', '07:00 - 10:00', '-', '-', 1, 1, 1), -- Horario del estudiante para MANTENIMIENTO DE COMPUTADORAS (asignatura_idasignatura = 1) y el módulo 1 (modulo_idmodulo = 1)
		('-', '-', '10:00 - 12:00', '-', '10:00 - 12:00', '-', '-', 1, 1, 2), -- Horario del estudiante para ROBOTICA (asignatura_idasignatura = 2) y el módulo 1 (modulo_idmodulo = 1)
		('-', '12:00 - 14:00', '-', '-', '-', '12:00 - 14:00', '-', 1, 1, 3), -- Horario del estudiante para DESARROLLO WEB (asignatura_idasignatura = 3) y el módulo 1 (modulo_idmodulo = 1)
		('-', '-', '-', '-', '14:00 - 16:00', '14:00 - 16:00', '-', 1, 1, 4), -- Horario del estudiante para INGLES (asignatura_idasignatura = 4) y el módulo 1 (modulo_idmodulo = 1)
		('-', '-', '-', '-', '-', '16:00 - 18:00', '16:00 - 18:00', 1, 1, 5); -- Horario del estudiante para CABLEADO ESTRUCTURADO (asignatura_idasignatura = 5) y el módulo 1 (modulo_idmodulo = 1)


-- Inserción en la tabla 'calificaciones'
INSERT INTO calificaciones (nota_1p, nota_2p, promedio, perfil_docente_idperfil_docente, perfil_estudiante_idperfil_estudiante, modulo_idmodulo, asignatura_idasignatura)
	VALUES
		(8.5, 7.8, 8.15, 1, 1, 1, 1), -- Calificaciones para MANTENIMIENTO DE COMPUTADORAS (asignatura_idasignatura = 1) y el módulo 1 (modulo_idmodulo = 1)
		(9.0, 8.7, 8.85, 1, 1, 1, 2), -- Calificaciones para ROBOTICA (asignatura_idasignatura = 2) y el módulo 1 (modulo_idmodulo = 1)
		(7.0, 7.0, 7.0, 1, 1, 1, 3), -- Calificaciones para DESARROLLO WEB (asignatura_idasignatura = 3) y el módulo 1 (modulo_idmodulo = 1)
		(8.0, 8.0, 8.0, 1, 1, 1, 4), -- Calificaciones para INGLES (asignatura_idasignatura = 4) y el módulo 1 (modulo_idmodulo = 1)
		(9.0, 9.0, 9.0, 1, 1, 1, 5); -- Calificaciones para CABLEADO ESTRUCTURADO (asignatura_idasignatura = 5) y el módulo 1 (modulo_idmodulo = 1)


-- Inserción en la tabla 'horario_docente'
INSERT INTO horario_docente (lunes, martes, miercoles, jueves, viernes ,sabado, domingo, perfil_docente_idperfil_docente, modulo_idmodulo, asignatura_idasignatura)
	VALUES
		('08:00 - 10:00', '-', '08:00 - 10:00', '-', '-', '-', '-', 1, 1, 1), -- Horario del docente para MANTENIMIENTO DE COMPUTADORAS (asignatura_idasignatura = 1)
		('-', '10:00 - 12:00', '-', '10:00 - 12:00', '-', '-', '-', 1, 1, 2); -- Horario del docente para ROBOTICA (asignatura_idasignatura = 2)



-- -----------------------------------------------------
-- OPERACIONES DE CONSULTA
-- -----------------------------------------------------

-- Consulta en la tabla perfil_estudiante por ID --
-- SELECT * FROM perfil_estudiante WHERE idperfil_estudiante = 1;

-- -----------------------------------------------------
-- OPERACIONES DE MODIFICACION
-- -----------------------------------------------------

-- Modificación en la tabla perfil_estudiante por ID --
-- UPDATE perfil_estudiante SET direccion_domiciliaria = 'Nueva dirección' WHERE idperfil_estudiante = 1;