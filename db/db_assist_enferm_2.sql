-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: assist_enferm
-- ------------------------------------------------------
-- Server version	8.0.31

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
-- Table structure for table `consulta`
--

DROP TABLE IF EXISTS `consulta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `consulta` (
  `data_cons` datetime NOT NULL,
  `fk_id_usersus` int NOT NULL,
  `pas` float DEFAULT NULL,
  `clas_ha` varchar(15) DEFAULT NULL,
  `imc` float DEFAULT NULL,
  `clas_imc` varchar(20) DEFAULT NULL,
  `clas_abdo` varchar(20) DEFAULT NULL,
  `clas_cint_quad` varchar(15) DEFAULT NULL,
  `clas_torn_brac` varchar(60) DEFAULT NULL,
  `indicadores` text,
  `clas_estrat` varchar(15) DEFAULT NULL,
  `list_psicobio` text,
  `list_psicosoc` text,
  `list_psicoesp` text,
  PRIMARY KEY (`data_cons`,`fk_id_usersus`),
  KEY `fk_cons_usersus_idx` (`fk_id_usersus`),
  CONSTRAINT `fk_cons_usersus` FOREIGN KEY (`fk_id_usersus`) REFERENCES `user_sus` (`id_usersus`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `consulta`
--

LOCK TABLES `consulta` WRITE;
/*!40000 ALTER TABLE `consulta` DISABLE KEYS */;
/*!40000 ALTER TABLE `consulta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_sus`
--

DROP TABLE IF EXISTS `user_sus`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_sus` (
  `id_usersus` int NOT NULL AUTO_INCREMENT,
  `cart_sus` varchar(15) NOT NULL,
  `cpf` varchar(11) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `data_nasc` date NOT NULL,
  `sexo` varchar(10) NOT NULL,
  `fk_id_equipe` int NOT NULL,
  PRIMARY KEY (`id_usersus`),
  KEY `fk_id_equipe` (`fk_id_equipe`),
  CONSTRAINT `user_sus_ibfk_1` FOREIGN KEY (`fk_id_equipe`) REFERENCES `usuario` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_sus`
--

LOCK TABLES `user_sus` WRITE;
/*!40000 ALTER TABLE `user_sus` DISABLE KEYS */;
INSERT INTO `user_sus` VALUES (1,'123456789012345','12345678901','Lucas','2001-06-06','Masculino',2);
/*!40000 ALTER TABLE `user_sus` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `id` int NOT NULL AUTO_INCREMENT,
  `login` varchar(100) NOT NULL,
  `senha` varchar(100) NOT NULL,
  `membros` tinytext,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'admin','admin123','SuperUser'),(2,'equipe1','12345','LucasWinglissonEduardo'),(3,'equipe3','11111','Mauro da Nobrega\nJuliana Lima de Souza\nPaula Zacian\nRoger Machado'),(4,'equipe4','123','Caralá'),(5,'equipe5','123','Lucas'),(6,'equipe6','444','Winglisson');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-10-30 20:34:41
