-- -----------------------------------------------------
-- Schema BD_Centro-Artesanal-UG
-- -----------------------------------------------------
CREATE DATABASE BD_Centro_Artesanal_UG;
USE BD_Centro_Artesanal_UG;
-- -----------------------------------------------------
-- Table `perfil_estudiante`
-- -----------------------------------------------------
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
  PRIMARY KEY (idperfil_estudiante));


-- -----------------------------------------------------
-- Table `horario_estudiante`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS horario_estudiante (
  idhorario_estudiante INT NOT NULL AUTO_INCREMENT,
  asignatura VARCHAR(45) NULL,
  lunes VARCHAR(45) NULL,
  martes VARCHAR(45) NULL,
  miercoles VARCHAR(45) NULL,
  jueves VARCHAR(45) NULL,
  viernes VARCHAR(45) NULL,
  sabado VARCHAR(45) NULL,
  domingo VARCHAR(45) NULL,
  perfil_estudiante_idperfil_estudiante INT NOT NULL,
  PRIMARY KEY (idhorario_estudiante),
  CONSTRAINT fk_horario_estudiante_perfil_estudiante1 FOREIGN KEY (perfil_estudiante_idperfil_estudiante) REFERENCES perfil_estudiante (idperfil_estudiante));


-- -----------------------------------------------------
-- Table `perfil_docente`
-- -----------------------------------------------------
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
  PRIMARY KEY (idperfil_docente));


-- -----------------------------------------------------
-- Table `salario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS salario (
  idsalario INT NOT NULL AUTO_INCREMENT,
  titulo VARCHAR(45) NULL,
  contrato VARCHAR(45) NULL,
  cantidad_sueldo VARCHAR(45) NULL,
  perfil_docente_idperfil_docente INT NOT NULL,
  PRIMARY KEY (idsalario),
  CONSTRAINT fk_salario_perfil_docente1 FOREIGN KEY (perfil_docente_idperfil_docente) REFERENCES perfil_docente (idperfil_docente));


-- -----------------------------------------------------
-- Table `calificaciones`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS calificaciones (
  idcalificaciones INT NOT NULL AUTO_INCREMENT,
  asignatura VARCHAR(45) NULL,
  modulo VARCHAR(45) NULL,
  nota_1p DECIMAL(2) NULL,
  nota_2p DECIMAL(2) NULL,
  promedio VARCHAR(45) NULL,
  perfil_docente_idperfil_docente INT NOT NULL,
  perfil_estudiante_idperfil_estudiante INT NOT NULL,
  PRIMARY KEY (idcalificaciones),
  CONSTRAINT fk_calificaciones_perfil_docente1 FOREIGN KEY (perfil_docente_idperfil_docente) REFERENCES perfil_docente (idperfil_docente),
  CONSTRAINT fk_calificaciones_perfil_estudiante1 FOREIGN KEY (perfil_estudiante_idperfil_estudiante) REFERENCES perfil_estudiante (idperfil_estudiante));


-- -----------------------------------------------------
-- Table `modulo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS modulo (
  idmodulo INT NOT NULL AUTO_INCREMENT,
  nombre_modulo VARCHAR(45) NULL,
  horario_estudiante_idhorario_estudiante INT NOT NULL,
  PRIMARY KEY (idmodulo),
  CONSTRAINT fk_modulo_horario_estudiante1 FOREIGN KEY (horario_estudiante_idhorario_estudiante) REFERENCES horario_estudiante (idhorario_estudiante));


-- -----------------------------------------------------
-- Table `horario_docente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS horario_docente (
  idhorario_docente INT NOT NULL AUTO_INCREMENT,
  asignatura VARCHAR(45) NULL,
  modulo VARCHAR(45) NULL,
  lunes VARCHAR(45) NULL,
  martes VARCHAR(45) NULL,
  miercoles VARCHAR(45) NULL,
  jueves VARCHAR(45) NULL,
  sabado VARCHAR(45) NULL,
  domingo VARCHAR(45) NULL,
  perfil_docente_idperfil_docente INT NOT NULL,
  PRIMARY KEY (idhorario_docente),
  CONSTRAINT fk_horario_docente_perfil_docente1 FOREIGN KEY (perfil_docente_idperfil_docente) REFERENCES perfil_docente (idperfil_docente));

-- -----------------------------------------------------
-- OPERACIONES DE CONSULTA O MODIFICACION
-- -----------------------------------------------------
INSERT INTO perfil_estudiante (foto_perfil, cedula, nombre, apellido, edad, direccion_domiciliaria, correo_electronico, telefono, nivel_educativo)
	VALUES
		('ruta_de_la_imagen.jpg', '123456789', 'Juan', 'Pérez', 25, 'Calle Principal 123', 'juan.perez@example.com', '1234567890', 'Universitario');

