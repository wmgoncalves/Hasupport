-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: localhost    Database: assist_enferm
-- ------------------------------------------------------
-- Server version	8.0.22

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
  `fk_cart_sus` varchar(15) NOT NULL,
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
  PRIMARY KEY (`data_cons`,`fk_cart_sus`),
  KEY `fk_cart_sus` (`fk_cart_sus`),
  CONSTRAINT `consulta_ibfk_1` FOREIGN KEY (`fk_cart_sus`) REFERENCES `user_sus` (`cart_sus`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `consulta`
--

LOCK TABLES `consulta` WRITE;
/*!40000 ALTER TABLE `consulta` DISABLE KEYS */;
INSERT INTO `consulta` VALUES ('2022-07-03 17:56:14','112233445566778',120,'PA normal',28.3951,'Sobrepeso','Risco Elevado','Risco Elevado','Normais','[b]Indicadores de Risco Baixo/Intermediário:[/b]\n Tabagismo\n História de doença renal na família (para risco de insuficiência renal)\n\n[b]Indicadores de Alto Risco:[/b]\n ','BAIXO RISCO','NECESSIDADOS PSICOBIOLÓGICAS:\n\n[b]Necessidade de Oxigenação:[/b]\nDiagnósticos/Resultados de Enfermagem:\n Padrão respiratório prejudicado\n\nIntervenções de Enfermagem:\n Orientar a manter os hábitos de respiração\n Realizar exame do aparelho respiratório no(a) usuário(a) com hipertensão\n Verificar e registrar sinais vitais\n\n\n[b]Necessidade de Nutrição:[/b]\nDiagnósticos/Resultados de Enfermagem:\n Emagrecimento saudável\n\n\n[b]Necessidade de Sono e Repouso:[/b]\nDiagnósticos/Resultados de Enfermagem:\n Sono prejudicado\n\nIntervenções de Enfermagem:\n Orientar sobre técnicas de relaxamento muscular\n Orientar sobre o ambiente livre de ruídos\n','NECESSIDADOS PSICOSOCIAIS:\n\n[b]Necessidade de Amor e Aceitação:[/b]\nDiagnósticos/Resultados de Enfermagem:\n Aceitação do estado de saúde\n\n\n[b]Necessidade de Liberdade e Participação:[/b]\nDiagnósticos/Resultados de Enfermagem:\n Falta de apoio familiar\n\nIntervenções de Enfermagem:\n Orientar ao familiar do(a) usuário(a) com hipertensão arterial sobre a modificação do estilo de vida\n\n\n[b]Necessidade de Educação para a Saúde/Aprendizagem:[/b]\nDiagnósticos/Resultados de Enfermagem:\n Manutenção da Saúde prejudicada\n\nIntervenções de Enfermagem:\n Instruir para procurar a Unidade de Saúde na presença de sinais e sintomas que sinalizam níveis elevados de pressão arterial\n Informar sobre os serviços disponíveis na Unidade de Saúde sobre hipertensão\n','NECESSIDADOS PSICOESPIRITUAIS:'),('2022-08-10 15:15:05','888888888888888',0,'',0,'','','','','','','NECESSIDADOS PSICOBIOLÓGICAS:','NECESSIDADOS PSICOSOCIAIS:','NECESSIDADOS PSICOESPIRITUAIS:');
/*!40000 ALTER TABLE `consulta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_sus`
--

DROP TABLE IF EXISTS `user_sus`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_sus` (
  `cart_sus` varchar(15) NOT NULL,
  `cpf` varchar(11) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `data_nasc` date NOT NULL,
  `sexo` varchar(10) NOT NULL,
  `fk_id_equipe` int NOT NULL,
  PRIMARY KEY (`cart_sus`),
  KEY `fk_id_equipe` (`fk_id_equipe`),
  CONSTRAINT `user_sus_ibfk_1` FOREIGN KEY (`fk_id_equipe`) REFERENCES `usuario` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_sus`
--

LOCK TABLES `user_sus` WRITE;
/*!40000 ALTER TABLE `user_sus` DISABLE KEYS */;
INSERT INTO `user_sus` VALUES ('111111111111111','11111111111','Jorge','1988-08-06','Masculino',2),('111222233334444','11122233344','Lucas','2001-06-06','Masculino',3),('112233445566778','11223344556','Carina','1976-02-05','Feminino',2),('123456789012345','12345678901','Caio Rolando da Rocha','1998-05-15','Masculino',2),('222222222222222','22222222222','Lary','2022-05-11','Masculino',2),('888888888888888','8888888888','Jorge Antônio','1992-05-27','Masculino',2);
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
INSERT INTO `usuario` VALUES (1,'admin','admin123','SuperUser'),(2,'equipe1','12345','Lucas\nWinglisson\nEduardo'),(3,'equipe_normal','11111','Mauro da Nobrega\nJuliana Lima de Souza\nPaula Zacian'),(4,'equipe2','554433','Jucelino Augusto\nVerônica Matos'),(6,'equipe3','55555','Eu');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'assist_enferm'
--

--
-- Dumping routines for database 'assist_enferm'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-10-16 15:29:15
