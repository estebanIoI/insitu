CREATE DATABASE  IF NOT EXISTS `app` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `app`;
-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: localhost    Database: app
-- ------------------------------------------------------
-- Server version	8.0.40

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `a_e`
--

DROP TABLE IF EXISTS `a_e`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `a_e` (
  `id` int NOT NULL AUTO_INCREMENT,
  `aspecto_id` int NOT NULL,
  `escala_id` int DEFAULT NULL,
  `es_cmt` tinyint(1) DEFAULT '1',
  `es_cmt_oblig` tinyint(1) DEFAULT '0',
  `fecha_creacion` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `fecha_actualizacion` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `aspecto_id` (`aspecto_id`),
  KEY `escala_id` (`escala_id`),
  CONSTRAINT `a_e_ibfk_1` FOREIGN KEY (`aspecto_id`) REFERENCES `cfg_a` (`id`) ON DELETE CASCADE,
  CONSTRAINT `a_e_ibfk_2` FOREIGN KEY (`escala_id`) REFERENCES `cfg_e` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=97 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `a_e`
--

LOCK TABLES `a_e` WRITE;
/*!40000 ALTER TABLE `a_e` DISABLE KEYS */;
INSERT INTO `a_e` VALUES (1,1,1,1,0,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(2,2,1,1,0,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(3,3,1,1,0,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(4,4,1,1,0,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(5,5,1,1,0,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(6,6,1,1,0,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(7,7,1,1,0,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(8,8,1,1,0,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(9,1,2,1,0,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(10,2,2,1,0,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(11,3,2,1,0,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(12,4,2,1,0,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(13,5,2,1,0,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(14,6,2,1,0,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(15,7,2,1,0,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(16,8,2,1,0,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(17,1,3,1,0,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(18,2,3,1,0,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(19,3,3,1,0,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(20,4,3,1,0,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(21,5,3,1,0,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(22,6,3,1,0,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(23,7,3,1,0,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(24,8,3,1,0,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(25,1,4,1,0,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(26,2,4,1,0,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(27,3,4,1,0,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(28,4,4,1,0,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(29,5,4,1,0,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(30,6,4,1,0,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(31,7,4,1,0,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(32,8,4,1,0,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(64,16,8,1,0,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(65,17,8,1,0,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(66,18,8,1,0,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(67,19,8,1,0,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(68,20,8,1,0,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(69,21,8,1,0,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(70,22,8,1,0,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(71,23,8,1,0,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(72,16,9,1,0,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(73,17,9,1,0,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(74,18,9,1,0,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(75,19,9,1,0,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(76,20,9,1,0,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(77,21,9,1,0,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(78,22,9,1,0,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(79,23,9,1,0,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(80,16,10,1,0,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(81,17,10,1,0,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(82,18,10,1,0,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(83,19,10,1,0,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(84,20,10,1,0,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(85,21,10,1,0,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(86,22,10,1,0,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(87,23,10,1,0,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(88,16,11,1,0,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(89,17,11,1,0,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(90,18,11,1,0,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(91,19,11,1,0,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(92,20,11,1,0,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(93,21,11,1,0,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(94,22,11,1,0,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(95,23,11,1,0,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(96,24,12,0,0,'2026-02-21 23:39:45','2026-02-21 23:39:45');
/*!40000 ALTER TABLE `a_e` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `aspecto`
--

DROP TABLE IF EXISTS `aspecto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `aspecto` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) COLLATE utf8mb4_spanish_ci NOT NULL,
  `descripcion` text COLLATE utf8mb4_spanish_ci,
  `fecha_creacion` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `fecha_actualizacion` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=70 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `aspecto`
--

LOCK TABLES `aspecto` WRITE;
/*!40000 ALTER TABLE `aspecto` DISABLE KEYS */;
INSERT INTO `aspecto` VALUES (1,'Dominio del tema','Demuestra conocimiento profundo y actualizado del área que imparte.','2026-02-21 04:47:21','2026-02-21 04:47:21'),(2,'Metodología de enseñanza','Aplica métodos didácticos efectivos para facilitar el aprendizaje.','2026-02-21 04:47:21','2026-02-21 04:47:21'),(3,'Puntualidad y asistencia','Cumple con los horarios establecidos de clase y asesorías.','2026-02-21 04:47:21','2026-02-21 04:47:21'),(4,'Evaluación justa','Evalúa de manera objetiva, transparente y coherente con los objetivos.','2026-02-21 04:47:21','2026-02-21 04:47:21'),(5,'Motivación al estudiante','Fomenta interés y participación activa de los estudiantes.','2026-02-21 04:47:21','2026-02-21 04:47:21'),(6,'Uso de recursos','Emplea materiales y recursos tecnológicos de manera pertinente.','2026-02-21 04:47:21','2026-02-21 04:47:21'),(7,'Comunicación','Explica con claridad los contenidos y mantiene comunicación efectiva.','2026-02-21 04:47:21','2026-02-21 04:47:21'),(8,'Responsabilidad profesional','Cumple con sus compromisos académicos y administrativos.','2026-02-21 04:47:21','2026-02-21 04:47:21'),(9,'Dominio del tema','¿Demuestro un conocimiento profundo y actualizado del área que imparto?','2026-02-21 04:47:21','2026-02-21 04:47:21'),(10,'Metodología de enseñanza','¿Estoy aplicando métodos didácticos que realmente facilitan el aprendizaje?','2026-02-21 04:47:21','2026-02-21 04:47:21'),(11,'Puntualidad y asistencia','¿Cumplo responsablemente con los horarios establecidos de clase y asesorías?','2026-02-21 04:47:21','2026-02-21 04:47:21'),(12,'Evaluación justa','¿Estoy evaluando de forma objetiva, transparente y coherente con los objetivos del curso?','2026-02-21 04:47:21','2026-02-21 04:47:21'),(13,'Motivación al estudiante','¿Estoy fomentando el interés y la participación activa de mis estudiantes?','2026-02-21 04:47:21','2026-02-21 04:47:21'),(14,'Uso de recursos','¿Estoy empleando materiales y recursos tecnológicos de manera pertinente y efectiva?','2026-02-21 04:47:21','2026-02-21 04:47:21'),(15,'Comunicación','¿Explico los contenidos con claridad y mantengo una comunicación efectiva con los estudiantes?','2026-02-21 04:47:21','2026-02-21 04:47:21'),(16,'Responsabilidad profesional','¿Cumplo adecuadamente con mis compromisos académicos y administrativos?','2026-02-21 04:47:21','2026-02-21 04:47:21'),(17,'Tiempo de respuesta administrativa','¿Los trámites académicos se resuelven en tiempos razonables?','2026-02-21 04:47:21','2026-02-21 04:47:21'),(18,'Claridad en requisitos','¿Los requisitos para trámites están claramente definidos?','2026-02-21 04:47:21','2026-02-21 04:47:21'),(19,'Disponibilidad de información académica','¿La información académica está disponible cuando la necesita?','2026-02-21 04:47:21','2026-02-21 04:47:21'),(20,'Cumplimiento del calendario académico','¿La institución respeta el calendario académico publicado?','2026-02-21 04:47:21','2026-02-21 04:47:21'),(21,'Gestión de reclamos','¿Los reclamos o solicitudes reciben seguimiento adecuado?','2026-02-21 04:47:21','2026-02-21 04:47:21'),(22,'Comunicación institucional','¿La institución comunica cambios o avisos de manera oportuna?','2026-02-21 04:47:21','2026-02-21 04:47:21'),(23,'Transparencia en procesos','¿Los procesos administrativos se realizan con transparencia?','2026-02-21 04:47:21','2026-02-21 04:47:21'),(24,'Iluminación del aula','¿La iluminación permite visualizar correctamente el contenido?','2026-02-21 04:47:21','2026-02-21 04:47:21'),(25,'Ventilación del aula','¿La ventilación mantiene una temperatura adecuada?','2026-02-21 04:47:21','2026-02-21 04:47:21'),(26,'Estado de sillas','¿Las sillas están en buen estado?','2026-02-21 04:47:21','2026-02-21 04:47:21'),(27,'Estado de mesas','¿Las mesas están en buen estado?','2026-02-21 04:47:21','2026-02-21 04:47:21'),(28,'Espacio físico suficiente','¿El aula tiene espacio suficiente para la cantidad de estudiantes?','2026-02-21 04:47:21','2026-02-21 04:47:21'),(29,'Disponibilidad de equipos','¿Los equipos están disponibles cuando se requieren?','2026-02-21 04:47:21','2026-02-21 04:47:21'),(30,'Funcionamiento de equipos','¿Los equipos funcionan correctamente durante las prácticas?','2026-02-21 04:47:21','2026-02-21 04:47:21'),(31,'Materiales de práctica suficientes','¿Existen suficientes materiales para todos los estudiantes?','2026-02-21 04:47:21','2026-02-21 04:47:21'),(32,'Actualización de libros','¿Los libros están actualizados según la carrera?','2026-02-21 04:47:21','2026-02-21 04:47:21'),(33,'Cantidad de ejemplares','¿Hay suficientes ejemplares disponibles?','2026-02-21 04:47:21','2026-02-21 04:47:21'),(34,'Espacios de estudio adecuados','¿Los espacios de estudio son cómodos?','2026-02-21 04:47:21','2026-02-21 04:47:21'),(35,'Cobertura WiFi','¿La señal WiFi cubre adecuadamente las áreas académicas?','2026-02-21 04:47:21','2026-02-21 04:47:21'),(36,'Estabilidad WiFi','¿La conexión a internet es estable?','2026-02-21 04:47:21','2026-02-21 04:47:21'),(37,'Disponibilidad de proyectores','¿Las aulas cuentan con proyectores funcionales?','2026-02-21 04:47:21','2026-02-21 04:47:21'),(38,'Limpieza de aulas','¿Las aulas se mantienen limpias?','2026-02-21 04:47:21','2026-02-21 04:47:21'),(39,'Limpieza de baños','¿Los baños se mantienen limpios?','2026-02-21 04:47:21','2026-02-21 04:47:21'),(40,'Seguridad en el campus','¿Se siente seguro dentro del campus?','2026-02-21 04:47:21','2026-02-21 04:47:21'),(41,'Iluminación exterior','¿Las áreas externas están bien iluminadas en la noche?','2026-02-21 04:47:21','2026-02-21 04:47:21'),(42,'Proceso transparente de contratación','¿Los procesos de contratación son transparentes?','2026-02-21 04:47:21','2026-02-21 04:47:21'),(43,'Capacitación del personal','¿El personal recibe capacitación periódica?','2026-02-21 04:47:21','2026-02-21 04:47:21'),(44,'Evaluaciones periódicas al personal','¿Se realizan evaluaciones de desempeño regularmente?','2026-02-21 04:47:21','2026-02-21 04:47:21'),(45,'Reconocimiento al desempeño','¿Se reconoce el buen desempeño del personal?','2026-02-21 04:47:21','2026-02-21 04:47:21'),(46,'Clima laboral respetuoso','¿Existe un ambiente laboral respetuoso?','2026-02-21 04:47:21','2026-02-21 04:47:21'),(47,'Comunicación interna efectiva','¿La comunicación interna es clara y efectiva?','2026-02-21 04:47:21','2026-02-21 04:47:21'),(48,'Oportunidades de crecimiento','¿Existen oportunidades de desarrollo profesional?','2026-02-21 04:47:21','2026-02-21 04:47:21'),(49,'Satisfacción con la carrera','¿Está satisfecho con la carrera que estudia?','2026-02-21 04:47:21','2026-02-21 04:47:21'),(50,'Satisfacción con docentes','¿Está satisfecho con el nivel general del profesorado?','2026-02-21 04:47:21','2026-02-21 04:47:21'),(51,'Atención de coordinación académica','¿La coordinación académica responde a sus necesidades?','2026-02-21 04:47:21','2026-02-21 04:47:21'),(52,'Disponibilidad de tutorías','¿Existen tutorías cuando las necesita?','2026-02-21 04:47:21','2026-02-21 04:47:21'),(53,'Apoyo psicológico disponible','¿Existe apoyo psicológico accesible?','2026-02-21 04:47:21','2026-02-21 04:47:21'),(54,'Actividades culturales suficientes','¿Existen suficientes actividades culturales?','2026-02-21 04:47:21','2026-02-21 04:47:21'),(55,'Actividades deportivas suficientes','¿Existen suficientes actividades deportivas?','2026-02-21 04:47:21','2026-02-21 04:47:21'),(56,'Intención de permanencia','¿Tiene intención de continuar sus estudios en esta institución?','2026-02-21 04:47:21','2026-02-21 04:47:21'),(57,'Uso de plataforma virtual','¿La plataforma virtual funciona correctamente?','2026-02-21 04:47:21','2026-02-21 04:47:21'),(58,'Carga oportuna de materiales','¿Los docentes cargan los materiales en tiempo adecuado?','2026-02-21 04:47:21','2026-02-21 04:47:21'),(59,'Disponibilidad de aulas virtuales','¿Las aulas virtuales están habilitadas correctamente?','2026-02-21 04:47:21','2026-02-21 04:47:21'),(60,'Digitalización de trámites','¿Los trámites pueden realizarse en línea?','2026-02-21 04:47:21','2026-02-21 04:47:21'),(61,'Capacitación en herramientas digitales','¿Recibe capacitación en herramientas digitales?','2026-02-21 04:47:21','2026-02-21 04:47:21'),(62,'Actualización tecnológica institucional','¿La institución actualiza regularmente su tecnología?','2026-02-21 04:47:21','2026-02-21 04:47:21'),(63,'Promoción de investigación estudiantil','¿Se promueve la participación estudiantil en proyectos de investigación?','2026-02-21 04:47:21','2026-02-21 04:47:21'),(64,'Acceso a fondos de investigación','¿Existen fondos o apoyo económico para investigación?','2026-02-21 04:47:21','2026-02-21 04:47:21'),(65,'Publicación de resultados','¿Los resultados de investigación son difundidos adecuadamente?','2026-02-21 04:47:21','2026-02-21 04:47:21'),(66,'Participación en congresos','¿Se incentiva la participación en congresos académicos?','2026-02-21 04:47:21','2026-02-21 04:47:21'),(67,'Proyectos con empresas','¿Existen proyectos activos con empresas o sector productivo?','2026-02-21 04:47:21','2026-02-21 04:47:21'),(68,'Impacto social de proyectos','¿Los proyectos generan impacto en la comunidad?','2026-02-21 04:47:21','2026-02-21 04:47:21'),(69,'Convenios interinstitucionales activos','¿La institución mantiene convenios académicos activos?','2026-02-21 04:47:21','2026-02-21 04:47:21');
/*!40000 ALTER TABLE `aspecto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ca_map`
--

DROP TABLE IF EXISTS `ca_map`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ca_map` (
  `id` int NOT NULL AUTO_INCREMENT,
  `categoria_id` int NOT NULL,
  `aspecto_id` int NOT NULL,
  `fecha_creacion` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `fecha_actualizacion` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `categoria_id` (`categoria_id`),
  KEY `aspecto_id` (`aspecto_id`),
  CONSTRAINT `ca_map_ibfk_1` FOREIGN KEY (`categoria_id`) REFERENCES `cat_a` (`id`) ON DELETE CASCADE,
  CONSTRAINT `ca_map_ibfk_2` FOREIGN KEY (`aspecto_id`) REFERENCES `aspecto` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=137 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ca_map`
--

LOCK TABLES `ca_map` WRITE;
/*!40000 ALTER TABLE `ca_map` DISABLE KEYS */;
INSERT INTO `ca_map` VALUES (1,1,1,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(2,1,2,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(3,1,3,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(4,1,4,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(5,1,5,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(6,1,6,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(7,1,7,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(8,1,8,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(9,1,9,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(10,1,10,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(11,1,11,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(12,1,12,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(13,1,13,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(14,1,14,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(15,1,15,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(16,1,16,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(32,2,1,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(33,2,2,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(34,2,3,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(35,2,4,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(36,2,5,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(37,2,6,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(38,2,7,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(39,2,8,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(40,2,9,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(41,2,10,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(42,2,11,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(43,2,12,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(44,2,13,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(45,2,14,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(46,2,15,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(47,2,16,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(63,3,17,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(64,3,18,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(65,3,19,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(66,3,20,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(67,3,21,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(68,3,22,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(69,3,23,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(70,4,24,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(71,4,25,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(72,4,26,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(73,4,27,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(74,4,28,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(75,4,29,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(76,4,30,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(77,4,31,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(78,4,32,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(79,4,33,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(80,4,34,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(81,4,35,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(82,4,36,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(83,4,37,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(84,4,38,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(85,4,39,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(86,4,40,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(87,4,41,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(101,5,42,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(102,5,43,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(103,5,44,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(104,5,45,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(105,5,46,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(106,5,47,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(107,5,48,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(108,6,49,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(109,6,50,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(110,6,51,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(111,6,52,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(112,6,53,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(113,6,54,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(114,6,55,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(115,6,56,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(123,7,57,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(124,7,58,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(125,7,59,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(126,7,60,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(127,7,61,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(128,7,62,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(130,8,63,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(131,8,64,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(132,8,65,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(133,8,66,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(134,8,67,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(135,8,68,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(136,8,69,'2026-02-21 04:47:21','2026-02-21 04:47:21');
/*!40000 ALTER TABLE `ca_map` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cat_a`
--

DROP TABLE IF EXISTS `cat_a`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cat_a` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) COLLATE utf8mb4_spanish_ci NOT NULL,
  `descripcion` text COLLATE utf8mb4_spanish_ci,
  `fecha_creacion` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `fecha_actualizacion` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cat_a`
--

LOCK TABLES `cat_a` WRITE;
/*!40000 ALTER TABLE `cat_a` DISABLE KEYS */;
INSERT INTO `cat_a` VALUES (1,'Desempeño Docente','Evaluación de los métodos, eficacia y desempeño del personal docente en el proceso educativo.','2026-02-21 04:47:21','2026-02-21 04:47:21'),(2,'Reflexión Docente','Autoevaluación de los métodos, eficacia y desempeño del personal docente en el proceso educativo.','2026-02-21 04:47:21','2026-02-21 04:47:21'),(3,'Calidad Institucional','Análisis de procesos administrativos y académicos para garantizar eficiencia y excelencia.','2026-02-21 04:47:21','2026-02-21 04:47:21'),(4,'Infraestructura y Servicios','Evaluación de la adecuación de espacios físicos, recursos y servicios.','2026-02-21 04:47:21','2026-02-21 04:47:21'),(5,'Gestión de Talento Humano','Observa selección, capacitación, desempeño y bienestar del personal.','2026-02-21 04:47:21','2026-02-21 04:47:21'),(6,'Satisfacción Estudiantil','Mide la percepción de los estudiantes sobre la experiencia educativa.','2026-02-21 04:47:21','2026-02-21 04:47:21'),(7,'Innovación y Tecnología','Analiza la implementación de herramientas digitales y estrategias innovadoras.','2026-02-21 04:47:21','2026-02-21 04:47:21'),(8,'Investigación y Vinculación','Evalúa producción académica, investigación y colaboración con la sociedad.','2026-02-21 04:47:21','2026-02-21 04:47:21');
/*!40000 ALTER TABLE `cat_a` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cat_e`
--

DROP TABLE IF EXISTS `cat_e`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cat_e` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) COLLATE utf8mb4_spanish_ci NOT NULL,
  `descripcion` text COLLATE utf8mb4_spanish_ci,
  `fecha_creacion` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `fecha_actualizacion` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cat_e`
--

LOCK TABLES `cat_e` WRITE;
/*!40000 ALTER TABLE `cat_e` DISABLE KEYS */;
INSERT INTO `cat_e` VALUES (1,'Escala de Desempeño Docente','Escala cualitativa utilizada para valorar el nivel de desempeño del personal docente.','2026-02-21 04:47:21','2026-02-21 04:47:21'),(2,'Escala de Satisfacción Estudiantil','Escala utilizada para medir el grado de satisfacción de los estudiantes.','2026-02-21 04:47:21','2026-02-21 04:47:21'),(3,'Autoevaluación','Escala utilizada para la autoevaluación del desempeño o conocimientos del docente.','2026-02-21 04:47:21','2026-02-21 04:47:21'),(4,'Autoevaluación Por Materia','Escala utilizada para la autoevaluación del desempeño por cada materia específica.','2026-02-21 04:47:21','2026-02-21 04:47:21');
/*!40000 ALTER TABLE `cat_e` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cat_t`
--

DROP TABLE IF EXISTS `cat_t`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cat_t` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) COLLATE utf8mb4_spanish_ci NOT NULL,
  `descripcion` text COLLATE utf8mb4_spanish_ci,
  `fecha_creacion` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `fecha_actualizacion` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cat_t`
--

LOCK TABLES `cat_t` WRITE;
/*!40000 ALTER TABLE `cat_t` DISABLE KEYS */;
INSERT INTO `cat_t` VALUES (1,'Desempeño Docente','Mide la efectividad, participación y compromiso del docente en su labor pedagógica.','2026-02-21 04:47:21','2026-02-21 04:47:21'),(2,'Calidad Institucional','Analiza los procesos administrativos y académicos para garantizar excelencia institucional.','2026-02-21 04:47:21','2026-02-21 04:47:21'),(3,'Infraestructura y Servicios','Se enfoca en la adecuación de espacios físicos, recursos tecnológicos y servicios de apoyo.','2026-02-21 04:47:21','2026-02-21 04:47:21'),(4,'Gestión de Talento Humano','Observa la selección, capacitación, desempeño y bienestar del personal administrativo y docente.','2026-02-21 04:47:21','2026-02-21 04:47:21'),(5,'Satisfacción Estudiantil','Refleja la percepción de los estudiantes sobre su experiencia educativa y los servicios disponibles.','2026-02-21 04:47:21','2026-02-21 04:47:21'),(6,'Innovación y Tecnología','Analiza la implementación de herramientas digitales y estrategias innovadoras en la institución.','2026-02-21 04:47:21','2026-02-21 04:47:21'),(7,'Investigación y Vinculación','Mide la producción académica, investigación y colaboración con la sociedad y empresas.','2026-02-21 04:47:21','2026-02-21 04:47:21');
/*!40000 ALTER TABLE `cat_t` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ce_map`
--

DROP TABLE IF EXISTS `ce_map`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ce_map` (
  `id` int NOT NULL AUTO_INCREMENT,
  `categoria_id` int NOT NULL,
  `escala_id` int NOT NULL,
  `fecha_creacion` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `fecha_actualizacion` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `categoria_id` (`categoria_id`),
  KEY `escala_id` (`escala_id`),
  CONSTRAINT `ce_map_ibfk_1` FOREIGN KEY (`categoria_id`) REFERENCES `cat_e` (`id`) ON DELETE CASCADE,
  CONSTRAINT `ce_map_ibfk_2` FOREIGN KEY (`escala_id`) REFERENCES `escala` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ce_map`
--

LOCK TABLES `ce_map` WRITE;
/*!40000 ALTER TABLE `ce_map` DISABLE KEYS */;
INSERT INTO `ce_map` VALUES (1,1,1,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(2,1,2,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(3,1,3,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(4,1,4,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(8,2,5,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(9,2,6,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(10,2,7,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(11,2,8,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(12,2,9,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(13,2,10,'2026-02-21 04:47:21','2026-02-21 04:47:21');
/*!40000 ALTER TABLE `ce_map` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cfg_a`
--

DROP TABLE IF EXISTS `cfg_a`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cfg_a` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cfg_t_id` int NOT NULL,
  `aspecto_id` int NOT NULL,
  `orden` decimal(5,2) NOT NULL,
  `es_activo` tinyint(1) DEFAULT '1',
  `fecha_creacion` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `fecha_actualizacion` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `cfg_t_id` (`cfg_t_id`),
  KEY `aspecto_id` (`aspecto_id`),
  CONSTRAINT `cfg_a_ibfk_1` FOREIGN KEY (`cfg_t_id`) REFERENCES `cfg_t` (`id`) ON DELETE CASCADE,
  CONSTRAINT `cfg_a_ibfk_2` FOREIGN KEY (`aspecto_id`) REFERENCES `ca_map` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cfg_a`
--

LOCK TABLES `cfg_a` WRITE;
/*!40000 ALTER TABLE `cfg_a` DISABLE KEYS */;
INSERT INTO `cfg_a` VALUES (1,1,1,1.00,1,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(2,1,2,2.00,1,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(3,1,3,3.00,1,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(4,1,4,4.00,1,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(5,1,5,5.00,1,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(6,1,6,6.00,1,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(7,1,7,7.00,1,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(8,1,8,8.00,1,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(16,2,40,9.00,1,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(17,2,41,10.00,1,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(18,2,42,11.00,1,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(19,2,43,12.00,1,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(20,2,44,13.00,1,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(21,2,45,14.00,1,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(22,2,46,15.00,1,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(23,2,47,16.00,1,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(24,3,1,1.00,1,'2026-02-21 23:39:29','2026-02-21 23:39:29');
/*!40000 ALTER TABLE `cfg_a` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cfg_e`
--

DROP TABLE IF EXISTS `cfg_e`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cfg_e` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cfg_t_id` int NOT NULL,
  `escala_id` int NOT NULL,
  `puntaje` decimal(3,2) NOT NULL,
  `orden` decimal(5,2) NOT NULL,
  `es_activo` tinyint(1) DEFAULT '1',
  `fecha_creacion` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `fecha_actualizacion` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `cfg_t_id` (`cfg_t_id`),
  KEY `escala_id` (`escala_id`),
  CONSTRAINT `cfg_e_ibfk_1` FOREIGN KEY (`cfg_t_id`) REFERENCES `cfg_t` (`id`) ON DELETE CASCADE,
  CONSTRAINT `cfg_e_ibfk_2` FOREIGN KEY (`escala_id`) REFERENCES `ce_map` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cfg_e`
--

LOCK TABLES `cfg_e` WRITE;
/*!40000 ALTER TABLE `cfg_e` DISABLE KEYS */;
INSERT INTO `cfg_e` VALUES (1,1,1,5.00,1.00,1,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(2,1,2,3.33,2.00,1,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(3,1,3,1.67,3.00,1,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(4,1,4,0.00,4.00,1,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(8,2,1,5.00,1.00,1,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(9,2,2,3.33,2.00,1,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(10,2,3,1.67,3.00,1,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(11,2,4,0.00,4.00,1,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(12,3,1,5.00,1.00,1,'2026-02-21 23:39:33','2026-02-21 23:39:33');
/*!40000 ALTER TABLE `cfg_e` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cfg_t`
--

DROP TABLE IF EXISTS `cfg_t`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cfg_t` (
  `id` int NOT NULL AUTO_INCREMENT,
  `tipo_id` int NOT NULL,
  `tipo_form_id` int NOT NULL,
  `fecha_inicio` date NOT NULL,
  `fecha_fin` date NOT NULL,
  `es_cmt_gen` tinyint(1) DEFAULT '1',
  `es_cmt_gen_oblig` tinyint(1) DEFAULT '0',
  `es_activo` tinyint(1) DEFAULT '0',
  `fecha_creacion` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `fecha_actualizacion` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `tipo_id` (`tipo_id`),
  KEY `tipo_form_id` (`tipo_form_id`),
  CONSTRAINT `cfg_t_ibfk_1` FOREIGN KEY (`tipo_id`) REFERENCES `ct_map` (`id`) ON DELETE CASCADE,
  CONSTRAINT `cfg_t_ibfk_2` FOREIGN KEY (`tipo_form_id`) REFERENCES `tipo_form` (`id`) ON DELETE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cfg_t`
--

LOCK TABLES `cfg_t` WRITE;
/*!40000 ALTER TABLE `cfg_t` DISABLE KEYS */;
INSERT INTO `cfg_t` VALUES (1,1,1,'2026-02-19','2026-02-24',1,0,1,'2026-02-21 04:47:21','2026-02-21 19:05:18'),(2,1,3,'2026-02-19','2026-02-24',1,0,1,'2026-02-21 04:47:21','2026-02-21 19:05:20'),(3,11,2,'2026-02-21','2026-02-22',1,0,1,'2026-02-21 23:39:15','2026-02-21 23:39:15');
/*!40000 ALTER TABLE `cfg_t` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cfg_t_rol`
--

DROP TABLE IF EXISTS `cfg_t_rol`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cfg_t_rol` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cfg_t_id` int NOT NULL,
  `rol_mix_id` int NOT NULL,
  `fecha_creacion` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `fecha_actualizacion` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `cfg_t_id` (`cfg_t_id`,`rol_mix_id`),
  KEY `rol_mix_id` (`rol_mix_id`),
  CONSTRAINT `cfg_t_rol_ibfk_1` FOREIGN KEY (`cfg_t_id`) REFERENCES `cfg_t` (`id`) ON DELETE CASCADE,
  CONSTRAINT `cfg_t_rol_ibfk_2` FOREIGN KEY (`rol_mix_id`) REFERENCES `rol_mix` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cfg_t_rol`
--

LOCK TABLES `cfg_t_rol` WRITE;
/*!40000 ALTER TABLE `cfg_t_rol` DISABLE KEYS */;
INSERT INTO `cfg_t_rol` VALUES (1,1,3,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(2,2,4,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(3,2,7,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(4,1,1,'2026-02-21 23:38:25','2026-02-21 23:38:25'),(5,3,1,'2026-02-21 23:39:56','2026-02-21 23:39:56');
/*!40000 ALTER TABLE `cfg_t_rol` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cmt_ai`
--

DROP TABLE IF EXISTS `cmt_ai`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cmt_ai` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cfg_t_id` int NOT NULL,
  `aspecto_id` int NOT NULL,
  `conclusion` text COLLATE utf8mb4_spanish_ci,
  `conclusion_gen` text COLLATE utf8mb4_spanish_ci,
  `fortaleza` json DEFAULT NULL,
  `debilidad` json DEFAULT NULL,
  `fecha_creacion` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `fecha_actualizacion` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `cfg_t_id` (`cfg_t_id`),
  CONSTRAINT `cmt_ai_ibfk_1` FOREIGN KEY (`cfg_t_id`) REFERENCES `cfg_t` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cmt_ai`
--

LOCK TABLES `cmt_ai` WRITE;
/*!40000 ALTER TABLE `cmt_ai` DISABLE KEYS */;
/*!40000 ALTER TABLE `cmt_ai` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ct_map`
--

DROP TABLE IF EXISTS `ct_map`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ct_map` (
  `id` int NOT NULL AUTO_INCREMENT,
  `categoria_id` int NOT NULL,
  `tipo_id` int NOT NULL,
  `fecha_creacion` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `fecha_actualizacion` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `categoria_id` (`categoria_id`),
  KEY `tipo_id` (`tipo_id`),
  CONSTRAINT `ct_map_ibfk_1` FOREIGN KEY (`categoria_id`) REFERENCES `cat_t` (`id`) ON DELETE CASCADE,
  CONSTRAINT `ct_map_ibfk_2` FOREIGN KEY (`tipo_id`) REFERENCES `tipo` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ct_map`
--

LOCK TABLES `ct_map` WRITE;
/*!40000 ALTER TABLE `ct_map` DISABLE KEYS */;
INSERT INTO `ct_map` VALUES (1,1,1,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(2,1,2,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(3,1,3,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(4,1,4,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(5,1,5,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(8,2,6,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(9,2,7,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(10,2,8,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(11,3,9,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(12,3,10,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(13,3,11,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(14,3,12,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(15,3,13,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(16,3,14,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(17,3,15,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(18,3,16,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(19,3,17,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(20,3,18,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(21,3,19,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(22,3,20,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(26,4,21,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(27,4,22,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(28,4,23,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(29,4,24,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(30,4,25,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(33,5,26,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(34,5,27,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(35,5,28,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(36,5,29,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(40,6,30,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(41,6,31,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(42,6,32,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(43,6,33,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(47,7,34,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(48,7,35,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(49,7,36,'2026-02-21 04:47:21','2026-02-21 04:47:21'),(50,7,37,'2026-02-21 04:47:21','2026-02-21 04:47:21');
/*!40000 ALTER TABLE `ct_map` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `escala`
--

DROP TABLE IF EXISTS `escala`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `escala` (
  `id` int NOT NULL AUTO_INCREMENT,
  `sigla` char(5) COLLATE utf8mb4_spanish_ci NOT NULL,
  `nombre` varchar(100) COLLATE utf8mb4_spanish_ci NOT NULL,
  `descripcion` text COLLATE utf8mb4_spanish_ci,
  `fecha_creacion` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `fecha_actualizacion` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `escala`
--

LOCK TABLES `escala` WRITE;
/*!40000 ALTER TABLE `escala` DISABLE KEYS */;
INSERT INTO `escala` VALUES (1,'E','Excelente','Desempeño excepcional','2026-02-21 04:47:21','2026-02-21 04:47:21'),(2,'B','Bueno','Desempeño por encima del promedio','2026-02-21 04:47:21','2026-02-21 04:47:21'),(3,'A','Aceptable','Desempeño promedio','2026-02-21 04:47:21','2026-02-21 04:47:21'),(4,'D','Deficiente','Desempeño por debajo del promedio','2026-02-21 04:47:21','2026-02-21 04:47:21'),(5,'MS','Muy Satisfecho','Altamente satisfecho con el servicio o experiencia','2026-02-21 04:47:21','2026-02-21 04:47:21'),(6,'S','Satisfecho','Satisfacción aceptable','2026-02-21 04:47:21','2026-02-21 04:47:21'),(7,'N','Neutral','Ni satisfecho ni insatisfecho','2026-02-21 04:47:21','2026-02-21 04:47:21'),(8,'I','Insatisfecho','No satisfecho con el servicio o experiencia','2026-02-21 04:47:21','2026-02-21 04:47:21'),(9,'NA','No Aplica','No corresponde evaluar esta opción','2026-02-21 04:47:21','2026-02-21 04:47:21'),(10,'O','Otro','Otras valoraciones no contempladas','2026-02-21 04:47:21','2026-02-21 04:47:21');
/*!40000 ALTER TABLE `escala` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `eval`
--

DROP TABLE IF EXISTS `eval`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `eval` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_configuracion` int NOT NULL,
  `estudiante` varchar(10) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `docente` varchar(15) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `codigo_materia` varchar(10) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `cmt_gen` text COLLATE utf8mb4_spanish_ci,
  `fecha_creacion` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `fecha_actualizacion` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `id_configuracion` (`id_configuracion`),
  CONSTRAINT `eval_ibfk_1` FOREIGN KEY (`id_configuracion`) REFERENCES `cfg_t` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `eval`
--

LOCK TABLES `eval` WRITE;
/*!40000 ALTER TABLE `eval` DISABLE KEYS */;
INSERT INTO `eval` VALUES (1,2,NULL,'79579499',NULL,NULL,'2026-02-21 09:47:58','2026-02-21 09:47:58'),(2,1,'1030080103','79579499','6665',NULL,'2026-02-21 09:48:45','2026-02-21 09:48:45'),(3,1,'1030080103','6805065','6668',NULL,'2026-02-21 09:48:45','2026-02-21 09:48:45'),(4,1,'1030080103','17587243','6669',NULL,'2026-02-21 09:48:45','2026-02-21 09:48:45'),(5,1,'1030080103','12985676','6663',NULL,'2026-02-21 09:48:45','2026-02-21 09:48:45'),(6,1,'1030080103','1085267204','6666',NULL,'2026-02-21 09:48:45','2026-02-21 09:48:45'),(7,1,'1030080103','1006949077','6664',NULL,'2026-02-21 09:48:45','2026-02-21 09:48:45'),(8,1,'1030080103','1124859042','6670',NULL,'2026-02-21 09:48:45','2026-02-21 09:48:45'),(9,1,'1030080103','1085336734','6667',NULL,'2026-02-21 09:48:45','2026-02-21 09:48:45');
/*!40000 ALTER TABLE `eval` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `eval_det`
--

DROP TABLE IF EXISTS `eval_det`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `eval_det` (
  `id` int NOT NULL AUTO_INCREMENT,
  `eval_id` int NOT NULL,
  `a_e_id` int NOT NULL,
  `cmt` text COLLATE utf8mb4_spanish_ci,
  `fecha_creacion` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `fecha_actualizacion` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `eval_id` (`eval_id`),
  KEY `a_e_id` (`a_e_id`),
  CONSTRAINT `eval_det_ibfk_1` FOREIGN KEY (`eval_id`) REFERENCES `eval` (`id`) ON DELETE CASCADE,
  CONSTRAINT `eval_det_ibfk_2` FOREIGN KEY (`a_e_id`) REFERENCES `a_e` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `eval_det`
--

LOCK TABLES `eval_det` WRITE;
/*!40000 ALTER TABLE `eval_det` DISABLE KEYS */;
INSERT INTO `eval_det` VALUES (1,1,64,NULL,'2026-02-21 09:48:14','2026-02-21 09:48:14'),(2,1,65,NULL,'2026-02-21 09:48:14','2026-02-21 09:48:14'),(3,1,66,NULL,'2026-02-21 09:48:14','2026-02-21 09:48:14'),(4,1,67,NULL,'2026-02-21 09:48:14','2026-02-21 09:48:14'),(5,1,68,NULL,'2026-02-21 09:48:14','2026-02-21 09:48:14'),(6,1,69,NULL,'2026-02-21 09:48:14','2026-02-21 09:48:14'),(7,1,70,NULL,'2026-02-21 09:48:14','2026-02-21 09:48:14'),(8,1,71,NULL,'2026-02-21 09:48:14','2026-02-21 09:48:14'),(9,2,9,NULL,'2026-02-21 09:49:14','2026-02-21 09:49:14'),(10,2,10,NULL,'2026-02-21 09:49:14','2026-02-21 09:49:14'),(11,2,11,NULL,'2026-02-21 09:49:14','2026-02-21 09:49:14'),(12,2,12,NULL,'2026-02-21 09:49:14','2026-02-21 09:49:14'),(13,2,13,NULL,'2026-02-21 09:49:14','2026-02-21 09:49:14'),(14,2,14,NULL,'2026-02-21 09:49:14','2026-02-21 09:49:14'),(15,2,15,NULL,'2026-02-21 09:49:14','2026-02-21 09:49:14'),(16,2,16,NULL,'2026-02-21 09:49:14','2026-02-21 09:49:14');
/*!40000 ALTER TABLE `eval_det` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `prog`
--

DROP TABLE IF EXISTS `prog`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `prog` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) COLLATE utf8mb4_spanish_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nombre` (`nombre`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prog`
--

LOCK TABLES `prog` WRITE;
/*!40000 ALTER TABLE `prog` DISABLE KEYS */;
INSERT INTO `prog` VALUES (1,'ADMINISTRACION DE EMPRESAS'),(2,'ADMINISTRACION DE NEGOCIOS INTERNACIONALES'),(3,'CONTADURIA PUBLICA'),(4,'ESPECIALIZACIÓN EN GERENCIA DEL TALENTO HUMANO'),(5,'INGENIERIA AGROINDUSTRIAL'),(6,'INGENIERIA AMBIENTAL'),(7,'INGENIERIA CIVIL'),(8,'INGENIERIA DE SISTEMAS'),(9,'INGENIERIA FORESTAL'),(10,'TECNOLOGIA EN DESARROLLO DE SOFTWARE'),(11,'TECNOLOGIA EN GESTION CONTABLE'),(12,'TECNOLOGIA EN GESTION DE COMERCIO EXTERIOR'),(13,'TECNOLOGIA EN GESTION EMPRESARIAL Y DE LA INNOVACION'),(14,'TECNOLOGIA EN GESTION GASTRONOMICA'),(15,'TECNOLOGIA EN OBRAS CIVILES'),(16,'TECNOLOGIA EN PRODUCCION AGROINDUSTRIAL'),(17,'TECNOLOGIA EN RECURSOS FORESTALES'),(18,'TECNOLOGIA EN SANEAMIENTO AMBIENTAL');
/*!40000 ALTER TABLE `prog` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rfh_tkn`
--

DROP TABLE IF EXISTS `rfh_tkn`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rfh_tkn` (
  `id` int NOT NULL AUTO_INCREMENT,
  `jti` varchar(255) COLLATE utf8mb4_spanish_ci NOT NULL,
  `user_id` int NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_spanish_ci NOT NULL,
  `fecha_expiracion` datetime NOT NULL,
  `es_revocado` tinyint(1) NOT NULL DEFAULT '0',
  `fecha_creacion` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `fecha_actualizacion` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `jti` (`jti`)
) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rfh_tkn`
--

LOCK TABLES `rfh_tkn` WRITE;
/*!40000 ALTER TABLE `rfh_tkn` DISABLE KEYS */;
INSERT INTO `rfh_tkn` VALUES (1,'80ab3621-8430-4eb7-b9b4-757099cbdb26',17001,'54e0d550d5ce349266f05cb0fbed719887b494780acd35981bec8915d55c47bd','2026-02-28 04:47:42',1,'2026-02-21 09:47:42','2026-02-21 04:57:43'),(2,'7da735d6-53be-4a8c-a857-7a010cc9e72d',20008,'91078832fd5d7a8808cbfa1fe8ebb0e5b0ca082a044eb95f80f890017455b1df','2026-02-28 04:48:42',1,'2026-02-21 09:48:42','2026-02-21 04:58:42'),(3,'d7e26f09-971c-4435-9ee1-0c2a1c13cfa5',2191,'f9f04d433b423725ef9c9c48632f664d3c26a9ecad1c56ffdf4b12f6ff47b396','2026-02-28 04:49:20',1,'2026-02-21 09:49:20','2026-02-21 04:59:21'),(4,'ba4a4537-bf2c-4e65-b64f-2cee375b22e8',17001,'e782f51f4bb54a051af05d8cc7c9362d06b8c02cf24b849e89df4ca1466d46b6','2026-02-28 04:57:43',1,'2026-02-21 09:57:43','2026-02-21 05:08:27'),(5,'fb585581-022a-4f17-803a-25ab8a14c521',20008,'3b55f560e51eb321bde34def911ff0bee13d9bda9394d2f3351a639bc8b12950','2026-02-28 04:58:42',1,'2026-02-21 09:58:42','2026-02-21 05:09:42'),(6,'086c8a07-1f0c-4e93-b55e-0194e817ec0f',2191,'95133ab08475d637e9ad56062053c19359c1eefba0cb735559aa9bfe0cd8d552','2026-02-28 04:59:21',1,'2026-02-21 09:59:21','2026-02-21 05:09:21'),(7,'75359fea-58a0-4ceb-b86a-f94d4625aba3',17001,'9402e9e6f5bdaa304832fb290e4c96d68a147480c18faedc9363ddaaa576e10b','2026-02-28 05:08:28',1,'2026-02-21 10:08:28','2026-02-21 05:18:43'),(8,'eec00567-9165-4135-b64d-8edb8126f4d4',2191,'66605697e857b974136e66da360682a829726a38046529472db4be053da24ac9','2026-02-28 05:09:21',1,'2026-02-21 10:09:21','2026-02-21 05:19:22'),(9,'b3e3eb4e-511f-4d1d-9d5f-38c6e30e16f2',20008,'19668eafb52af0e0f2d77ef7d18cbb35776fbea0bf9fd4114879c3303ac51845','2026-02-28 05:09:42',1,'2026-02-21 10:09:42','2026-02-21 05:20:42'),(10,'d86951f2-f8d6-4eb3-a727-a3d2158adb6f',17001,'a017cc9e88e155f246a2a8414da1997d7793ea3e5557fb6fd4815958fcbf3ea7','2026-02-28 05:18:43',1,'2026-02-21 10:18:43','2026-02-21 05:28:44'),(11,'09ea3439-5179-4aa5-b695-d76bc1fed3e2',2191,'08b0cc681d78d24a4d316ad18ae875105e90c1226175dbb59f01334fa9a2a7d9','2026-02-28 05:19:23',1,'2026-02-21 10:19:23','2026-02-21 05:32:27'),(12,'721fe4c6-c218-407b-b1f8-8d0de95ccc5c',20008,'91e9570bce72e96ace052fd5b51ab7abbf4ae58bae8af23f3397d83584359309','2026-02-28 05:20:42',1,'2026-02-21 10:20:42','2026-02-21 05:31:15'),(13,'0510a5a9-eb4f-4ac4-9a7d-44e9f1a5923f',17001,'c8fae22fd65b8e46c971732384e40f2a1daa23c137fd63b098e373351d9bcc7a','2026-02-28 05:28:44',1,'2026-02-21 10:28:44','2026-02-21 05:38:46'),(14,'c89cbda9-5cd6-4b96-9182-22313037ee15',20008,'319ba304a57509c9c77eea682178f9c7606ebe919e74014a747a2142e841a4be','2026-02-28 05:31:15',1,'2026-02-21 10:31:15','2026-02-21 05:42:15'),(15,'013d8164-7b65-40b3-8b3d-7f9d087899b7',2191,'537b22a50bcf37b70e5ae9dbcc02dbfe6a7f74fe400185be609dbbf629d2cf37','2026-02-28 05:32:27',1,'2026-02-21 10:32:27','2026-02-21 05:45:12'),(16,'f43adbf6-0630-41d9-b785-dff0d8184919',17001,'1c7ca39601e63105e256a9843253e98fbc6117dced2eb5c4f4ece0e640c23c54','2026-02-28 05:38:47',1,'2026-02-21 10:38:47','2026-02-21 05:48:48'),(17,'5ffbb5b3-46cb-4c3b-b092-61262c571fe7',20008,'d91afc4a5fdaa9fc2c60279169269056ace5d568a6599dd084accca0b0255cd8','2026-02-28 05:42:15',1,'2026-02-21 10:42:15','2026-02-21 05:53:15'),(18,'89b60613-218d-4939-9d91-26c7e079635b',2191,'adf0848a1512e703bddc3c394c6825f1974f2846648f81302faadd88572665f5','2026-02-28 05:45:13',1,'2026-02-21 10:45:13','2026-02-21 05:56:04'),(19,'7543b8a0-fb11-4bba-88ea-7f7b10f95e88',17001,'39b4d6cae0259d7011ef649d2256dfd568f50f6e3d92aed8b7469ef557ff4268','2026-02-28 05:48:48',1,'2026-02-21 10:48:48','2026-02-21 05:58:50'),(20,'7ef19f7f-8172-43b8-b88c-e9baa3a4a913',20008,'1ffe89543255983369439cd742bfc432cb03688f079499154b3f60992a7141c6','2026-02-28 05:53:16',1,'2026-02-21 10:53:16','2026-02-21 06:04:15'),(21,'289645b6-5e58-461e-8161-d50cfeab2282',2191,'df1e7bb2430addacc5b3e2b0b7b2329941a0b74bffe416e8da6e0786faf89442','2026-02-28 05:56:05',1,'2026-02-21 10:56:05','2026-02-21 06:06:15'),(22,'9a819737-8b39-4fd3-83ef-99f73420fbb9',17001,'bcb38fac1bbed4a138c62d1693867fa1cd84934ca1f4ab71a7fc80d9136dd6eb','2026-02-28 05:58:50',1,'2026-02-21 10:58:50','2026-02-21 06:08:51'),(23,'5dc9afdc-b005-42ce-9892-5957dedad301',20008,'0a724ee63ed20ed3435f4945a61218df6a2c2199bf3afe253d5a035613993734','2026-02-28 06:04:16',1,'2026-02-21 11:04:16','2026-02-21 06:15:15'),(24,'2debc43a-931e-415e-9e02-05a944859234',2191,'ebfdc97dc8fb1ec1379e4e192db6983773ded5eae1a7faf5260058f644cb7735','2026-02-28 06:06:16',1,'2026-02-21 11:06:16','2026-02-21 06:16:36'),(25,'b40b9fa3-9713-410a-a716-8997f3792708',17001,'beb2d98496d4c28b70f9a4ce96929f49c379db77167377dee6c32310209c3bef','2026-02-28 06:08:52',1,'2026-02-21 11:08:52','2026-02-21 06:18:53'),(26,'c4d64a38-6cb9-409d-a181-badbf617ac80',20008,'00cdfc4d898c4a24b4050f7a82872807893681ce012676f5c0f8ec4f9fdc80a6','2026-02-28 06:15:16',1,'2026-02-21 11:15:16','2026-02-21 06:26:15'),(27,'517eaaeb-72e3-4f04-b64b-ae517c2eb8f6',2191,'cd4ce23cddaee412ece034cb061dad1e8a131ea510db314b04628d94cf435777','2026-02-28 06:16:37',1,'2026-02-21 11:16:37','2026-02-21 06:27:43'),(28,'957b4c07-0aa2-492a-80d0-da22180df2c7',17001,'abd94535702510d2e643b772fea1f9341f8f4cc732ad1dadf53a2751ae6778cd','2026-02-28 06:18:54',1,'2026-02-21 11:18:54','2026-02-21 06:28:55'),(29,'c809a4ee-e52a-4961-a720-6d46e68d7ba1',20008,'9b9c493ad15ebecc506354792dd1aa32c6fb1c1214dfca519bf77c79ad52a0a1','2026-02-28 06:26:16',0,'2026-02-21 11:26:16','2026-02-21 11:26:16'),(30,'a2defa86-9ff8-4e96-9b17-e9bc46b4492c',2191,'1502b703b5b848b06230bd52bb40700a2878bf33bcdfb532329bbe3c10925e15','2026-02-28 06:27:44',1,'2026-02-21 11:27:44','2026-02-21 16:45:07'),(31,'ca87b5da-bc60-4a38-8d0f-899d3c82fba5',17001,'d16ab0df6a90da57aa9aa595a78021a46385a31cbbcb2e81a140dd78378e7c5d','2026-02-28 06:28:55',0,'2026-02-21 11:28:55','2026-02-21 11:28:55'),(32,'2cba76f6-062a-4287-a5f1-71b1d285ec2a',2191,'3975467aff16555a3e73fb5219909d49e52712e396128bcc4e031f8d4740e1db','2026-02-28 16:45:07',1,'2026-02-21 21:45:07','2026-02-21 16:55:51'),(33,'9e5017cb-7b92-4618-ac07-cd54ab9154eb',2191,'9e852857257cdfc53393734610cd5985d7c525bced8fc7eed7b7ce3933e51560','2026-02-28 16:55:51',1,'2026-02-21 21:55:51','2026-02-21 17:06:16'),(34,'144f3732-3a77-4b94-90fc-57c96b735403',2191,'b8e9ae166c4602ac4af48d75de4aa70bb5c2bd430045b4bbd96e0730fe455062','2026-02-28 17:06:17',1,'2026-02-21 22:06:17','2026-02-21 17:16:23'),(35,'217b0911-30f9-4de2-a221-21ec8d69ad0b',2191,'a6d7e69a5b07a977c1b94fac60332a53cea754a5f64feec35ac2cc469297df3d','2026-02-28 17:16:23',1,'2026-02-21 22:16:23','2026-02-21 17:39:21'),(36,'92ea329f-ba6a-4eae-8ea4-818c425dba9c',2191,'fbb72c161b6a9dd2b5fa8dd4ad336cdf1b47660d72c49a093a84bd525e82bae3','2026-02-28 17:39:21',1,'2026-02-21 22:39:21','2026-02-21 17:51:10'),(37,'3cd440cf-dbda-4739-b464-6ae6fd865f89',2191,'4b139c09987eeee0562c1ce4791cf7017cab738be09d761c8a85ebbe289c8e2f','2026-02-28 17:51:11',1,'2026-02-21 22:51:11','2026-02-21 18:02:46'),(38,'775df367-ad8e-4159-9a06-d7fb42905e25',2191,'99dc3e5d377d5d624032ae7b652b0f2e0c758ec7fce059cb896873e808ae9c5e','2026-02-28 18:02:46',1,'2026-02-21 23:02:46','2026-02-21 18:15:00'),(39,'0c65d1dc-46f2-4a6c-97f8-5211a8fd09fa',2191,'3812fe1e06b0f604804b60bad5cbdd56a3f2c0c36c65fb3af64cde315a9ffd20','2026-02-28 18:15:01',1,'2026-02-21 23:15:01','2026-02-21 18:25:02'),(40,'c36bbcb5-a789-427d-8fee-fbbf37f3941f',2191,'dc0ab447707b167a51dfb99b85811b217efc7d7905d0ef30149d0b65592cd2f5','2026-02-28 18:25:03',1,'2026-02-21 23:25:03','2026-02-21 18:37:50'),(41,'6129fed9-4e48-40f9-9943-e1cfdd699837',2191,'27d6d7544632e57f4d5579ffd64ecb835de25387098f52e0069c9d161fa8dd98','2026-02-28 18:37:50',1,'2026-02-21 23:37:50','2026-02-21 18:47:55'),(42,'55aa58f8-872b-4776-b03a-c57ccfe1f254',2191,'7468ace5711b35a203bda460de7281b9bd6a908939de31990a511ad1c7c5c327','2026-02-28 18:47:55',1,'2026-02-21 23:47:55','2026-02-21 18:58:41'),(43,'68a08f93-0880-45f5-a171-877ced68733f',2191,'8dea08d663f92c962115f475ff6de7cc6c74926996fe9b07a57a14594e16b5dd','2026-02-28 18:58:42',1,'2026-02-21 23:58:42','2026-02-21 19:12:28'),(44,'3009c1e6-dbe8-43c5-a271-06552e8c4f13',2191,'abbfa863322dbc7e2c4382de5a88c7be466c186acd5e51e32e08de8179000247','2026-02-28 19:12:28',1,'2026-02-22 00:12:28','2026-02-21 19:23:13'),(45,'2506de0e-4e38-4d03-b3be-365eb6feebd6',2191,'63a6ddf8fca38059fd2f23941a9cdecec64eff16f5fc48d7b0a7dfb5163fbd50','2026-02-28 19:23:13',1,'2026-02-22 00:23:13','2026-02-21 19:33:33'),(46,'a0f41a58-5e4f-476b-9868-98cda69c7757',2191,'e288fece9a24500008dd1ca1c67129c81dca4d8060bb1a3eee811f827ff37598','2026-02-28 19:33:34',1,'2026-02-22 00:33:34','2026-02-21 19:43:47'),(47,'cc01b43d-031f-43d9-8a6a-1b139c9f0faf',2191,'84bdefe942e419160ea4328a02ee85cc8f10b591cfe5c6be7a43480363a0ff2c','2026-02-28 19:43:47',1,'2026-02-22 00:43:47','2026-02-21 19:43:55'),(48,'5adb106f-809b-4ec4-9ee4-474d7cd0ebfd',2191,'edf3a16bfc50d555d5cb0f4d02fe6d92b195b4febad5c5ce6c5e24aba7fe57ea','2026-02-28 19:43:55',1,'2026-02-22 00:43:55','2026-02-21 20:05:35'),(49,'aa70ee6b-dd89-430e-b9ee-8ae8f17b5e33',2191,'6a784f89d6eefcd2f48565567636457ce2f9aa2c2836ca2b418b02d335ea2651','2026-02-28 20:05:36',0,'2026-02-22 01:05:36','2026-02-22 01:05:36');
/*!40000 ALTER TABLE `rfh_tkn` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rol`
--

DROP TABLE IF EXISTS `rol`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rol` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) COLLATE utf8mb4_spanish_ci NOT NULL,
  `fecha_creacion` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `fecha_actualizacion` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nombre` (`nombre`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rol`
--

LOCK TABLES `rol` WRITE;
/*!40000 ALTER TABLE `rol` DISABLE KEYS */;
INSERT INTO `rol` VALUES (1,'Admin','2026-02-21 04:47:20','2026-02-21 04:47:20'),(2,'Director de Programa','2026-02-21 04:47:20','2026-02-21 04:47:20');
/*!40000 ALTER TABLE `rol` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rol_mix`
--

DROP TABLE IF EXISTS `rol_mix`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rol_mix` (
  `id` int NOT NULL AUTO_INCREMENT,
  `rol_origen_id` int DEFAULT NULL,
  `nombre` varchar(100) COLLATE utf8mb4_spanish_ci NOT NULL,
  `origen` enum('APP','AUTH') COLLATE utf8mb4_spanish_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `rol_origen_id` (`rol_origen_id`,`origen`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rol_mix`
--

LOCK TABLES `rol_mix` WRITE;
/*!40000 ALTER TABLE `rol_mix` DISABLE KEYS */;
INSERT INTO `rol_mix` VALUES (1,1,'Admin','APP'),(2,2,'Director de Programa','APP'),(3,1,'Estudiante','AUTH'),(4,2,'docente_planta','AUTH'),(5,12,'Bibliotecario','AUTH'),(6,14,'Admin Sigedin','AUTH'),(7,15,'Docente de apoyo','AUTH'),(8,17,'Decano de Facultad','AUTH'),(9,18,'Vicerrector Académico','AUTH'),(10,19,'Director CIECYT','AUTH'),(11,21,'Admin Evaluación Docente','AUTH'),(12,23,'Admin Egresados','AUTH'),(13,24,'Reclutador Empleo','AUTH'),(14,25,'Egresado','AUTH'),(15,26,'Admin Biblioteca','AUTH'),(16,27,'Admin Deserción','AUTH'),(17,28,'Admin Matricula','AUTH'),(18,29,'Bienestar Universitario','AUTH'),(19,30,'Consulta','AUTH'),(20,31,'Admin Financiera','AUTH'),(21,33,'BBVA developer','AUTH'),(22,35,'Casos Especiales','AUTH');
/*!40000 ALTER TABLE `rol_mix` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipo`
--

DROP TABLE IF EXISTS `tipo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipo` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) COLLATE utf8mb4_spanish_ci NOT NULL,
  `descripcion` text COLLATE utf8mb4_spanish_ci,
  `fecha_creacion` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `fecha_actualizacion` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo`
--

LOCK TABLES `tipo` WRITE;
/*!40000 ALTER TABLE `tipo` DISABLE KEYS */;
INSERT INTO `tipo` VALUES (1,'In Situ','Evalúa el desempeño pedagógico del docente durante las clases.','2026-02-21 04:47:21','2026-02-21 04:47:21'),(2,'Observación en Aula','Analiza la dinámica de clase, claridad de explicación y participación estudiantil.','2026-02-21 04:47:21','2026-02-21 04:47:21'),(3,'Planificación Pedagógica','Evalúa la estructura y preparación de clases, objetivos y metodología.','2026-02-21 04:47:21','2026-02-21 04:47:21'),(4,'Tutorías y Orientación','Mide la disponibilidad y calidad del apoyo académico personalizado a estudiantes.','2026-02-21 04:47:21','2026-02-21 04:47:21'),(5,'Participación en Proyectos Académicos','Valora la implicación del docente en investigación y actividades complementarias.','2026-02-21 04:47:21','2026-02-21 04:47:21'),(6,'Procesos Administrativos','Analiza eficiencia y transparencia en la gestión administrativa.','2026-02-21 04:47:21','2026-02-21 04:47:21'),(7,'Control Académico','Mide la eficacia de seguimiento, evaluación y mejora de programas académicos.','2026-02-21 04:47:21','2026-02-21 04:47:21'),(8,'Normativa y Cumplimiento','Verifica adherencia a políticas, reglamentos y estándares de calidad.','2026-02-21 04:47:21','2026-02-21 04:47:21'),(9,'Sala de Cómputo','Mide el estado, funcionamiento y disponibilidad de los equipos de cómputo.','2026-02-21 04:47:21','2026-02-21 04:47:21'),(10,'Rendimiento de Equipos','Evalúa velocidad, capacidad y desempeño del hardware institucional.','2026-02-21 04:47:21','2026-02-21 04:47:21'),(11,'Conectividad a Internet','Mide estabilidad, velocidad y cobertura de la red institucional.','2026-02-21 04:47:21','2026-02-21 04:47:21'),(12,'Mantenimiento Tecnológico','Verifica frecuencia y calidad del mantenimiento preventivo y correctivo.','2026-02-21 04:47:21','2026-02-21 04:47:21'),(13,'Biblioteca','Mide disponibilidad de recursos, espacios y atención al usuario.','2026-02-21 04:47:21','2026-02-21 04:47:21'),(14,'Cafetería','Revisa calidad de alimentos, precios, atención e higiene.','2026-02-21 04:47:21','2026-02-21 04:47:21'),(15,'Laboratorios','Analiza estado de equipos, materiales y condiciones de seguridad.','2026-02-21 04:47:21','2026-02-21 04:47:21'),(16,'Condiciones de Aulas','Evalúa iluminación, ventilación, mobiliario y comodidad.','2026-02-21 04:47:21','2026-02-21 04:47:21'),(17,'Seguridad Institucional','Mide percepción de seguridad dentro del campus.','2026-02-21 04:47:21','2026-02-21 04:47:21'),(18,'Limpieza y Mantenimiento General','Evalúa condiciones de aseo en espacios comunes.','2026-02-21 04:47:21','2026-02-21 04:47:21'),(19,'Espacios Deportivos','Analiza estado, seguridad y mantenimiento de instalaciones deportivas.','2026-02-21 04:47:21','2026-02-21 04:47:21'),(20,'Accesibilidad y Movilidad','Evalúa facilidades de desplazamiento para personas con movilidad reducida.','2026-02-21 04:47:21','2026-02-21 04:47:21'),(21,'Desempeño del Personal','Mide el cumplimiento de funciones y objetivos del personal.','2026-02-21 04:47:21','2026-02-21 04:47:21'),(22,'Capacitación y Desarrollo','Evalúa efectividad de programas de formación y actualización.','2026-02-21 04:47:21','2026-02-21 04:47:21'),(23,'Clima Laboral','Analiza satisfacción y motivación del personal.','2026-02-21 04:47:21','2026-02-21 04:47:21'),(24,'Reclutamiento y Selección','Evalúa procesos de contratación, perfiles y adaptación de nuevos colaboradores.','2026-02-21 04:47:21','2026-02-21 04:47:21'),(25,'Reconocimiento y Beneficios','Analiza incentivos, compensaciones y programas de bienestar institucional.','2026-02-21 04:47:21','2026-02-21 04:47:21'),(26,'Experiencia Académica','Mide percepción de los estudiantes sobre la calidad de la enseñanza.','2026-02-21 04:47:21','2026-02-21 04:47:21'),(27,'Servicios Estudiantiles','Evalúa atención, accesibilidad y calidad de servicios complementarios.','2026-02-21 04:47:21','2026-02-21 04:47:21'),(28,'Bienestar Estudiantil','Analiza satisfacción con programas de apoyo y actividades extracurriculares.','2026-02-21 04:47:21','2026-02-21 04:47:21'),(29,'Actividades Extracurriculares','Mide participación y satisfacción en programas culturales, deportivos y sociales.','2026-02-21 04:47:21','2026-02-21 04:47:21'),(30,'Implementación Tecnológica','Evalúa integración de nuevas tecnologías en la docencia y gestión.','2026-02-21 04:47:21','2026-02-21 04:47:21'),(31,'Innovación Pedagógica','Mide aplicación de metodologías innovadoras en los procesos de enseñanza-aprendizaje.','2026-02-21 04:47:21','2026-02-21 04:47:21'),(32,'Herramientas Digitales','Analiza eficacia y uso de plataformas, software y recursos digitales.','2026-02-21 04:47:21','2026-02-21 04:47:21'),(33,'Laboratorios Virtuales','Verifica calidad, disponibilidad y experiencia en entornos de aprendizaje virtual.','2026-02-21 04:47:21','2026-02-21 04:47:21'),(34,'Proyectos de Investigación','Mide cantidad, calidad y relevancia de investigaciones desarrolladas.','2026-02-21 04:47:21','2026-02-21 04:47:21'),(35,'Publicaciones Académicas','Evalúa producción de artículos, libros y difusión del conocimiento.','2026-02-21 04:47:21','2026-02-21 04:47:21'),(36,'Vinculación con la Sociedad','Analiza programas de extensión, convenios y colaboración con empresas e instituciones.','2026-02-21 04:47:21','2026-02-21 04:47:21'),(37,'Participación en Congresos','Mide involucramiento del personal y estudiantes en eventos académicos y científicos.','2026-02-21 04:47:21','2026-02-21 04:47:21');
/*!40000 ALTER TABLE `tipo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipo_form`
--

DROP TABLE IF EXISTS `tipo_form`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipo_form` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) COLLATE utf8mb4_spanish_ci NOT NULL,
  `descripcion` text COLLATE utf8mb4_spanish_ci,
  `fecha_creacion` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `fecha_actualizacion` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo_form`
--

LOCK TABLES `tipo_form` WRITE;
/*!40000 ALTER TABLE `tipo_form` DISABLE KEYS */;
INSERT INTO `tipo_form` VALUES (1,'Evaluación','Formulario destinado a procesos de evaluación.','2026-02-21 04:47:20','2026-02-21 04:47:20'),(2,'Encuesta','Formulario destinado a recolección de información no evaluativa.','2026-02-21 04:47:20','2026-02-21 04:47:20'),(3,'Autoevaluación','Formulario destinado a la autoevaluación del usuario.','2026-02-21 04:47:20','2026-02-21 04:47:20'),(4,'Autoevaluación por materias','Formulario destinado a la autoevaluación del usuario organizada por materias.','2026-02-21 04:47:20','2026-02-21 04:47:20');
/*!40000 ALTER TABLE `tipo_form` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_prog`
--

DROP TABLE IF EXISTS `user_prog`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_prog` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_rol_id` int NOT NULL,
  `prog_id` int NOT NULL,
  `fecha_creacion` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `fecha_actualizacion` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `user_rol_id` (`user_rol_id`),
  KEY `prog_id` (`prog_id`),
  CONSTRAINT `user_prog_ibfk_1` FOREIGN KEY (`user_rol_id`) REFERENCES `user_rol` (`id`) ON DELETE CASCADE,
  CONSTRAINT `user_prog_ibfk_2` FOREIGN KEY (`prog_id`) REFERENCES `prog` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_prog`
--

LOCK TABLES `user_prog` WRITE;
/*!40000 ALTER TABLE `user_prog` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_prog` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_rol`
--

DROP TABLE IF EXISTS `user_rol`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_rol` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `rol_id` int NOT NULL,
  `fecha_creacion` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `fecha_actualizacion` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `rol_id` (`rol_id`),
  CONSTRAINT `user_rol_ibfk_1` FOREIGN KEY (`rol_id`) REFERENCES `rol` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_rol`
--

LOCK TABLES `user_rol` WRITE;
/*!40000 ALTER TABLE `user_rol` DISABLE KEYS */;
INSERT INTO `user_rol` VALUES (1,2191,1,'2026-02-21 04:47:20','2026-02-21 04:47:20'),(2,1934,1,'2026-02-21 04:47:20','2026-02-21 04:47:20'),(3,20670,1,'2026-02-21 04:47:20','2026-02-21 04:47:20');
/*!40000 ALTER TABLE `user_rol` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'app'
--

--
-- Dumping routines for database 'app'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-02-21 15:09:28
