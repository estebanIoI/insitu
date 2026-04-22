CREATE DATABASE IF NOT EXISTS app
CHARACTER SET utf8mb4
COLLATE utf8mb4_spanish_ci;

USE app;

SET NAMES utf8mb4 COLLATE utf8mb4_spanish_ci;
SET character_set_client = utf8mb4;
SET character_set_connection = utf8mb4;
SET character_set_results = utf8mb4;
SET collation_connection = utf8mb4_spanish_ci;

-- ============================================
-- 🟦 ROLES Y USUARIOS
-- ============================================

CREATE TABLE rfh_tkn (
  id INT AUTO_INCREMENT PRIMARY KEY,
  jti VARCHAR(255) NOT NULL UNIQUE,
  user_id INT NOT NULL,
  token VARCHAR(255) NOT NULL,
  fecha_expiracion DATETIME NOT NULL,
  es_revocado BOOLEAN NOT NULL DEFAULT FALSE,
  fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  fecha_actualizacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE rol (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) UNIQUE NOT NULL,
  fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  fecha_actualizacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO rol (nombre) VALUES 
('Admin'),
('Director de Programa');

CREATE TABLE user_rol (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  rol_id INT NOT NULL,
  fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  fecha_actualizacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (rol_id) REFERENCES rol(id) ON DELETE CASCADE
);

INSERT INTO user_rol (user_id, rol_id) VALUES
(2191, 1),
(1934, 1),
(14609, 1);

CREATE TABLE prog (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  UNIQUE (nombre)
);

INSERT INTO prog (nombre) VALUES
('ADMINISTRACION DE EMPRESAS'),
('ADMINISTRACION DE NEGOCIOS INTERNACIONALES'),
('CONTADURIA PUBLICA'),
('ESPECIALIZACIÓN EN GERENCIA DEL TALENTO HUMANO'),
('INGENIERIA AGROINDUSTRIAL'),
('INGENIERIA AMBIENTAL'),
('INGENIERIA CIVIL'),
('INGENIERIA DE SISTEMAS'),
('INGENIERIA FORESTAL'),
('TECNOLOGIA EN DESARROLLO DE SOFTWARE'),
('TECNOLOGIA EN GESTION CONTABLE'),
('TECNOLOGIA EN GESTION DE COMERCIO EXTERIOR'),
('TECNOLOGIA EN GESTION EMPRESARIAL Y DE LA INNOVACION'),
('TECNOLOGIA EN GESTION GASTRONOMICA'),
('TECNOLOGIA EN OBRAS CIVILES'),
('TECNOLOGIA EN PRODUCCION AGROINDUSTRIAL'),
('TECNOLOGIA EN RECURSOS FORESTALES'),
('TECNOLOGIA EN SANEAMIENTO AMBIENTAL');

CREATE TABLE user_prog (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_rol_id INT NOT NULL,
  prog_id INT NOT NULL,
  fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  fecha_actualizacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (user_rol_id) REFERENCES user_rol(id) ON DELETE CASCADE,
  FOREIGN KEY (prog_id) REFERENCES prog(id) ON DELETE CASCADE
);

-- ============================================
-- 🟩 TIPOS DE EVALUACIÓN
-- ============================================

CREATE TABLE cat_t (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  descripcion TEXT,
  fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  fecha_actualizacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE tipo (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  descripcion TEXT,
  fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  fecha_actualizacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE ct_map (
  id INT AUTO_INCREMENT PRIMARY KEY,
  categoria_id INT NOT NULL,
  tipo_id INT NOT NULL,
  fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  fecha_actualizacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (categoria_id) REFERENCES cat_t(id) ON DELETE CASCADE,
  FOREIGN KEY (tipo_id) REFERENCES tipo(id) ON DELETE CASCADE
);

CREATE TABLE tipo_form (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  descripcion TEXT,
  fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  fecha_actualizacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Insert tipos de formulario iniciales
INSERT INTO tipo_form (nombre, descripcion) VALUES
('Evaluación', 'Formulario destinado a procesos de evaluación.'),
('Encuesta', 'Formulario destinado a recolección de información no evaluativa.'),
('Autoevaluación', 'Formulario destinado a la autoevaluación del usuario.'),
('Autoevaluación por materias', 'Formulario destinado a la autoevaluación del usuario organizada por materias.');

CREATE TABLE cfg_t (
  id INT AUTO_INCREMENT PRIMARY KEY,
  tipo_id INT NOT NULL,
  genera_autoeval BOOLEAN DEFAULT FALSE,
  autoeval_tipo_form_id INT NULL,
  tipo_form_id INT NOT NULL,
  fecha_inicio DATE NOT NULL,
  fecha_fin DATE NOT NULL,
  es_cmt_gen BOOLEAN DEFAULT TRUE,
  es_cmt_gen_oblig BOOLEAN DEFAULT FALSE,
  es_activo BOOLEAN DEFAULT FALSE,
  fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  fecha_actualizacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (tipo_id) REFERENCES ct_map(id) ON DELETE CASCADE,
  FOREIGN KEY (tipo_form_id) REFERENCES tipo_form(id) ON DELETE RESTRICT
);

CREATE TABLE rol_mix (
  id INT AUTO_INCREMENT PRIMARY KEY,
  rol_origen_id INT NULL,
  nombre VARCHAR(100) NOT NULL,
  origen ENUM('APP','AUTH') NOT NULL,
  UNIQUE (rol_origen_id, origen)
);

INSERT INTO rol_mix (rol_origen_id, nombre, origen) VALUES
(1, 'Admin', 'APP'),
(2, 'Director de Programa', 'APP'),
(1, 'Estudiante', 'AUTH'),
(2, 'docente_planta', 'AUTH'),
(12, 'Bibliotecario', 'AUTH'),
(14, 'Admin Sigedin', 'AUTH'),
(15, 'Docente de apoyo', 'AUTH'),
(17, 'Decano de Facultad', 'AUTH'),
(18, 'Vicerrector Académico', 'AUTH'),
(19, 'Director CIECYT', 'AUTH'),
(21, 'Admin Evaluación Docente', 'AUTH'),
(23, 'Admin Egresados', 'AUTH'),
(24, 'Reclutador Empleo', 'AUTH'),
(25, 'Egresado', 'AUTH'),
(26, 'Admin Biblioteca', 'AUTH'),
(27, 'Admin Deserción', 'AUTH'),
(28, 'Admin Matricula', 'AUTH'),
(29, 'Bienestar Universitario', 'AUTH'),
(30, 'Consulta', 'AUTH'),
(31, 'Admin Financiera', 'AUTH'),
(33, 'BBVA developer', 'AUTH'),
(35, 'Casos Especiales', 'AUTH');

CREATE TABLE cfg_t_rol (
  id INT AUTO_INCREMENT PRIMARY KEY,
  cfg_t_id INT NOT NULL,
  rol_mix_id INT NOT NULL,
  fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  fecha_actualizacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (cfg_t_id) REFERENCES cfg_t(id) ON DELETE CASCADE,
  FOREIGN KEY (rol_mix_id) REFERENCES rol_mix(id) ON DELETE CASCADE,
  UNIQUE (cfg_t_id, rol_mix_id)
);

CREATE TABLE cfg_t_rel (
  id INT AUTO_INCREMENT PRIMARY KEY,
  cfg_eval_id INT NOT NULL,
  cfg_autoeval_id INT NOT NULL,
  UNIQUE (cfg_eval_id),
  UNIQUE (cfg_autoeval_id),
  -- CHECK (cfg_eval_id <> cfg_autoeval_id),
  FOREIGN KEY (cfg_eval_id) REFERENCES cfg_t(id) ON DELETE CASCADE,
  FOREIGN KEY (cfg_autoeval_id) REFERENCES cfg_t(id) ON DELETE CASCADE
);

-- =========================================
-- TABLAS SCOPE
-- =========================================

CREATE TABLE peri (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(10) NOT NULL UNIQUE
);

INSERT INTO peri (nombre) VALUES
('2026-1');

CREATE TABLE sede (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL UNIQUE
);

INSERT INTO sede (nombre) VALUES
('UNIP-MOCOA'),
('UNIP-SIBUNDOY');

CREATE TABLE smstre (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL UNIQUE
);

INSERT INTO smstre (nombre) VALUES
('PRIMER SEMESTRE'),
('SEGUNDO SEMESTRE'),
('TERCER SEMESTRE'),
('CUARTO SEMESTRE'),
('QUINTO SEMESTRE'),
('SEXTO SEMESTRE'),
('SEPTIMO SEMESTRE'),
('OCTAVO SEMESTRE'),
('NOVENO SEMESTRE'),
('DECIMO SEMESTRE');

CREATE TABLE grp (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(10) NOT NULL UNIQUE
);

INSERT INTO grp (nombre) VALUES
('A'),
('B'),
('C'),
('D'),
('NIVELACION');

CREATE TABLE cfg_t_scope (
  id INT AUTO_INCREMENT PRIMARY KEY,
  cfg_t_id INT NOT NULL,
  periodo_id INT NOT NULL,
  sede_id INT NULL,
  programa_id INT NULL,
  semestre_id INT NULL,
  grupo_id INT NULL,
  FOREIGN KEY (cfg_t_id) REFERENCES cfg_t(id) ON DELETE CASCADE,
  FOREIGN KEY (periodo_id) REFERENCES peri(id),
  FOREIGN KEY (sede_id) REFERENCES sede(id),
  FOREIGN KEY (programa_id) REFERENCES prog(id),
  FOREIGN KEY (semestre_id) REFERENCES smstre(id),  
  FOREIGN KEY (grupo_id) REFERENCES grp(id)
);

-- ============================================
-- 🟨 ASPECTOS
-- ============================================

CREATE TABLE cat_a (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  descripcion TEXT,
  fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  fecha_actualizacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE aspecto (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  descripcion TEXT,
  fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  fecha_actualizacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE ca_map (
  id INT AUTO_INCREMENT PRIMARY KEY,
  categoria_id INT NOT NULL,
  aspecto_id INT NOT NULL,
  fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  fecha_actualizacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (categoria_id) REFERENCES cat_a(id) ON DELETE CASCADE,
  FOREIGN KEY (aspecto_id) REFERENCES aspecto(id) ON DELETE CASCADE
);

CREATE TABLE cfg_a (
  id INT AUTO_INCREMENT PRIMARY KEY,
  cfg_t_id INT NOT NULL,
  aspecto_id INT NOT NULL,
  orden DECIMAL(5,2) NOT NULL,
  es_activo BOOLEAN DEFAULT TRUE,
  fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  fecha_actualizacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (cfg_t_id) REFERENCES cfg_t(id) ON DELETE CASCADE,
  FOREIGN KEY (aspecto_id) REFERENCES ca_map(id) ON DELETE CASCADE
);

-- ============================================
-- 🟫 ESCALA DE VALORACIÓN
-- ============================================

CREATE TABLE cat_e (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  descripcion TEXT,
  fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  fecha_actualizacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE escala (
  id INT AUTO_INCREMENT PRIMARY KEY,
  sigla CHAR(5) NOT NULL,
  nombre VARCHAR(100) NOT NULL,
  descripcion TEXT,
  fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  fecha_actualizacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE ce_map (
  id INT AUTO_INCREMENT PRIMARY KEY,
  categoria_id INT NOT NULL,
  escala_id INT NOT NULL,
  fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  fecha_actualizacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (categoria_id) REFERENCES cat_e(id) ON DELETE CASCADE,
  FOREIGN KEY (escala_id) REFERENCES escala(id) ON DELETE CASCADE
);

CREATE TABLE cfg_e (
  id INT AUTO_INCREMENT PRIMARY KEY,
  cfg_t_id INT NOT NULL,
  escala_id INT NOT NULL,
  puntaje DECIMAL(3,2) NOT NULL,
  orden DECIMAL(5,2) NOT NULL,
  es_activo BOOLEAN DEFAULT TRUE,
  fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  fecha_actualizacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (cfg_t_id) REFERENCES cfg_t(id) ON DELETE CASCADE,
  FOREIGN KEY (escala_id) REFERENCES ce_map(id) ON DELETE CASCADE
);

-- ============================================
-- 🟦 RESULTADOS DE EVALUACIONES
-- ============================================

CREATE TABLE eval (
  id INT AUTO_INCREMENT PRIMARY KEY,
  id_configuracion INT NOT NULL,
  estudiante VARCHAR(10),
  docente VARCHAR(15),
  codigo_materia VARCHAR(10),
  cmt_gen TEXT,
  fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  fecha_actualizacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (id_configuracion) REFERENCES cfg_t(id) ON DELETE CASCADE
);

CREATE TABLE a_e (
  id INT AUTO_INCREMENT PRIMARY KEY,
  aspecto_id INT NOT NULL,
  escala_id INT,
  es_cmt BOOLEAN DEFAULT TRUE,
  es_cmt_oblig BOOLEAN DEFAULT FALSE,
  fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  fecha_actualizacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (aspecto_id) REFERENCES cfg_a(id) ON DELETE CASCADE,
  FOREIGN KEY (escala_id) REFERENCES cfg_e(id) ON DELETE CASCADE
);

CREATE TABLE eval_det (
  id INT AUTO_INCREMENT PRIMARY KEY,
  eval_id INT NOT NULL,
  a_e_id INT NOT NULL,
  cmt TEXT,
  fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  fecha_actualizacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (eval_id) REFERENCES eval(id) ON DELETE CASCADE,
  FOREIGN KEY (a_e_id) REFERENCES a_e(id) ON DELETE CASCADE
);

CREATE TABLE cmt_ai (
  id INT AUTO_INCREMENT PRIMARY KEY,
  cfg_t_id INT NOT NULL,
  aspecto_id INT NOT NULL,
  conclusion TEXT,
  conclusion_gen TEXT,
  fortaleza JSON,
  debilidad JSON,
  fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  fecha_actualizacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (cfg_t_id) REFERENCES cfg_t(id) ON DELETE CASCADE
);

-- ===============================
-- CATEGORIA TIPOS
-- ===============================

INSERT INTO cat_t (nombre, descripcion) VALUES
('Desempeño Docente', 'Mide la efectividad, participación y compromiso del docente en su labor pedagógica.'),
('Infraestructura y Servicios', 'Se enfoca en la adecuación de espacios físicos, recursos tecnológicos y servicios de apoyo.');

-- ===============================
-- TIPOS
-- ===============================

-- Desempeño Docente
INSERT INTO tipo (nombre, descripcion) VALUES
('In Situ', 'Evalúa el desempeño pedagógico del docente durante las clases.'),
('Observación en Aula', 'Analiza la dinámica de clase, claridad de explicación y participación estudiantil.'),
('Planificación Pedagógica', 'Evalúa la estructura y preparación de clases, objetivos y metodología.'),
('Tutorías y Orientación', 'Mide la disponibilidad y calidad del apoyo académico personalizado a estudiantes.'),
('Participación en Proyectos Académicos', 'Valora la implicación del docente en investigación y actividades complementarias.');

-- Infraestructura y Servicios
INSERT INTO tipo (nombre, descripcion) VALUES
('Sala de Cómputo', 'Mide el estado, funcionamiento y disponibilidad de los equipos de cómputo.'),
('Laboratorios', 'Analiza estado de equipos, materiales y condiciones de seguridad.'),
('Espacios Deportivos', 'Analiza estado, seguridad y mantenimiento de instalaciones deportivas.');

-- ===============================
-- TIPO MAP
-- ===============================

-- Desempeño Docente
INSERT INTO ct_map (categoria_id, tipo_id)
SELECT c.id, t.id
FROM cat_t c
JOIN tipo t
WHERE c.nombre = 'Desempeño Docente'
  AND t.nombre IN ('In Situ','Observación en Aula','Planificación Pedagógica','Tutorías y Orientación','Participación en Proyectos Académicos');

-- Infraestructura y Servicios
INSERT INTO ct_map (categoria_id, tipo_id)
SELECT c.id, t.id
FROM cat_t c
JOIN tipo t
WHERE c.nombre = 'Infraestructura y Servicios'
  AND t.nombre IN ('Sala de Cómputo','Laboratorios','Espacios Deportivos');

-- ===============================
-- CATEGORIA ASPECTOS
-- ===============================
INSERT INTO cat_a (nombre, descripcion) VALUES
('Desempeño Docente', 'Evaluación de los métodos, eficacia y desempeño del personal docente en el proceso educativo.'),
('Reflexión Docente', 'Autoevaluación de los métodos, eficacia y desempeño del personal docente en el proceso educativo.'),
('Infraestructura y Servicios', 'Evaluación de la adecuación de espacios físicos, recursos y servicios.');

-- Desempeño Docente
INSERT INTO aspecto (nombre, descripcion) VALUES
('Dominio del tema', 'Demuestra conocimiento profundo y actualizado del área que imparte.'),
('Metodología de enseñanza', 'Aplica métodos didácticos efectivos para facilitar el aprendizaje.'),
('Puntualidad y asistencia', 'Cumple con los horarios establecidos de clase y asesorías.'),
('Evaluación justa', 'Evalúa de manera objetiva, transparente y coherente con los objetivos.'),
('Motivación al estudiante', 'Fomenta interés y participación activa de los estudiantes.'),
('Uso de recursos', 'Emplea materiales y recursos tecnológicos de manera pertinente.'),
('Comunicación', 'Explica con claridad los contenidos y mantiene comunicación efectiva.'),
('Responsabilidad profesional', 'Cumple con sus compromisos académicos y administrativos.');

-- Reflexión Docente
INSERT INTO aspecto (nombre, descripcion) VALUES
('Dominio del tema', '¿Demuestro un conocimiento profundo y actualizado del área que imparto?'),
('Metodología de enseñanza', '¿Estoy aplicando métodos didácticos que realmente facilitan el aprendizaje?'),
('Puntualidad y asistencia', '¿Cumplo responsablemente con los horarios establecidos de clase y asesorías?'),
('Evaluación justa', '¿Estoy evaluando de forma objetiva, transparente y coherente con los objetivos del curso?'),
('Motivación al estudiante', '¿Estoy fomentando el interés y la participación activa de mis estudiantes?'),
('Uso de recursos', '¿Estoy empleando materiales y recursos tecnológicos de manera pertinente y efectiva?'),
('Comunicación', '¿Explico los contenidos con claridad y mantengo una comunicación efectiva con los estudiantes?'),
('Responsabilidad profesional', '¿Cumplo adecuadamente con mis compromisos académicos y administrativos?');

-- Infraestructura y Servicios
INSERT INTO aspecto (nombre, descripcion) VALUES
-- AULA
('Iluminación del aula', '¿La iluminación permite visualizar correctamente el contenido?'),
('Ventilación del aula', '¿La ventilación mantiene una temperatura adecuada?'),
('Estado de sillas', '¿Las sillas están en buen estado?'),
('Estado de mesas', '¿Las mesas están en buen estado?'),
('Espacio físico suficiente', '¿El aula tiene espacio suficiente para la cantidad de estudiantes?'),

-- LABORATORIOS
('Disponibilidad de equipos', '¿Los equipos están disponibles cuando se requieren?'),
('Funcionamiento de equipos', '¿Los equipos funcionan correctamente durante las prácticas?'),
('Materiales de práctica suficientes', '¿Existen suficientes materiales para todos los estudiantes?'),

-- TECNOLOGÍA
('Cobertura WiFi', '¿La señal WiFi cubre adecuadamente las áreas académicas?'),
('Estabilidad WiFi', '¿La conexión a internet es estable?'),
('Disponibilidad de proyectores', '¿Las aulas cuentan con proyectores funcionales?');

-- Desempeño
INSERT INTO ca_map (categoria_id, aspecto_id)
SELECT c.id, a.id
FROM cat_a c, aspecto a
WHERE c.nombre = 'Desempeño Docente'
AND a.id BETWEEN 1 AND 8;

-- Reflexión
INSERT INTO ca_map (categoria_id, aspecto_id)
SELECT c.id, a.id
FROM cat_a c, aspecto a
WHERE c.nombre = 'Reflexión Docente'
AND a.id BETWEEN 9 AND 16;

INSERT INTO ca_map (categoria_id, aspecto_id)
SELECT c.id, a.id
FROM cat_a c
JOIN aspecto a ON 1=1
WHERE c.nombre = 'Infraestructura y Servicios'
AND a.nombre IN (
'Iluminación del aula',
'Ventilación del aula',
'Estado de sillas',
'Estado de mesas',
'Espacio físico suficiente',
'Disponibilidad de equipos',
'Funcionamiento de equipos',
'Materiales de práctica suficientes',
'Cobertura WiFi',
'Estabilidad WiFi',
'Disponibilidad de proyectores'
);

-- ===============================
-- CATEGORIA ESCALAS
-- ===============================
INSERT INTO cat_e (nombre, descripcion) VALUES
('Escala de Desempeño', 'Escala cualitativa utilizada para valorar el nivel de desempeño del personal docente.'),
('Escala de Satisfacción', 'Escala utilizada para medir el grado de satisfacción de los estudiantes.');

-- ===============================
-- INSERCIÓN DE TIPOS DE ESCALAS
-- ===============================

-- Escala de Desempeño Docente
INSERT INTO escala (sigla, nombre, descripcion) VALUES
('E', 'Excelente', 'Desempeño excepcional'),
('B', 'Bueno', 'Desempeño por encima del promedio'),
('A', 'Aceptable', 'Desempeño promedio'),
('D', 'Deficiente', 'Desempeño por debajo del promedio');

-- Escala de Satisfacción Estudiantil
INSERT INTO escala (sigla, nombre, descripcion) VALUES
('MS', 'Muy Satisfecho', 'Altamente satisfecho con el servicio o experiencia'),
('S', 'Satisfecho', 'Satisfacción aceptable'),
('N', 'Neutral', 'Ni satisfecho ni insatisfecho'),
('I', 'Insatisfecho', 'No satisfecho con el servicio o experiencia'),
('NA', 'No Aplica', 'No corresponde evaluar esta opción'),
('O', 'Otro', 'Otras valoraciones no contempladas');

-- ===============================
-- MAPEOS AUTOMÁTICOS EN ce_map
-- ===============================

-- Escala de Desempeño Docente
INSERT INTO ce_map (categoria_id, escala_id)
SELECT c.id, e.id
FROM cat_e c
JOIN escala e
WHERE c.nombre = 'Escala de Desempeño'
  AND e.sigla IN ('E','B','A','D');

-- Escala de Satisfacción Estudiantil
INSERT INTO ce_map (categoria_id, escala_id)
SELECT c.id, e.id
FROM cat_e c
JOIN escala e
WHERE c.nombre = 'Escala de Satisfacción'
  AND e.sigla IN ('MS','S','N','I','NA','O');



