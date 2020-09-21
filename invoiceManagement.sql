-- MySQL dump 10.13  Distrib 8.0.21, for Linux (x86_64)
--
-- Host: localhost    Database: invoiceManagement
-- ------------------------------------------------------
-- Server version	8.0.21-0ubuntu0.20.04.4

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `invoiceDetails`
--

DROP TABLE IF EXISTS `invoiceDetails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `invoiceDetails` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `phone` varchar(15) DEFAULT NULL,
  `invoiceNumber` varchar(45) DEFAULT NULL,
  `invoiceDate` date DEFAULT NULL,
  `igstTax` float DEFAULT '0',
  `cgstTax` float DEFAULT '0',
  `sgstTax` float DEFAULT '0',
  `totalTaxAmount` float DEFAULT '0',
  `totalInvoiceAmount` float DEFAULT '0',
  `invoiceType` varchar(15) DEFAULT NULL,
  `partyAccountNo` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `invoiceNumber_UNIQUE` (`invoiceNumber`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `invoiceDetails`
--

LOCK TABLES `invoiceDetails` WRITE;
/*!40000 ALTER TABLE `invoiceDetails` DISABLE KEYS */;
INSERT INTO `invoiceDetails` VALUES (20,'Narendra malviya','Pali rajasthann India','+917742401557','101201','2020-09-01',10,5,7,1537.8,8527.8,'sales','70290124'),(24,'Narendra malviya','Pali rajasthann India','+917742401557','237492','2020-09-01',10,5,7,1273.8,7063.8,'sales','70290124'),(26,'Narendra malviya','Pali rajasthann India','+917742401557','187785','2020-09-01',10,5,7,1273.8,7063.8,'purchase','70290124'),(27,'Narendra malviya','Pali rajasthann India','+917742401557','1012087','2020-09-16',10,5,7,660,3660,'sales','702901767'),(28,'Shiv malviya','Pali rajasthann India','+919928695184','101204675','2020-09-01',0,0,7,268.8,4108.8,'sales','70290756'),(29,'Bhanwar lal','Hemawas pali rajasthan\nIndia 306401','+91989324895','34434009','2020-09-21',8,0,0,2747.2,37087.2,'purchase','93742942'),(30,'Narendra malviya','Pali rajasthann India','+917742401557','1012024565','2020-09-01',10,5,7,1273.8,7063.8,'sales','70290124'),(32,'Narendra malviya','Pali rajasthann India','+917742401557','5645','2020-09-19',10,5,7,1273.8,7063.8,'sales','754645'),(33,'Kailash Malviya','Delhi, Haryana ,India\n30533443','+917898293432','5643534','2020-09-11',4,5,2,242158,2443600,'purchase','4659379493749'),(34,'Hemant Singh','Jodhpur ,rajasthann India\n3053532','+91388364566435','75565','2020-08-14',6,0,0,27780,490780,'sales','8686686676'),(35,'Yash sharma','Pali rajasthann India','+917575676565','10126454','2020-09-17',10,5,7,1240.8,6880.8,'sales','747456466'),(36,'Yash Sharma','Pali rajasthann India','+91993743834','56456456','2020-09-12',10,0,0,564,6204,'sales','93475973457');
/*!40000 ALTER TABLE `invoiceDetails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `invoiceItems`
--

DROP TABLE IF EXISTS `invoiceItems`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `invoiceItems` (
  `id` int NOT NULL AUTO_INCREMENT,
  `invoiceDetailsId` int NOT NULL,
  `description` text,
  `hsnSacNo` varchar(100) DEFAULT NULL,
  `quantity` int NOT NULL,
  `rate` float NOT NULL,
  `amount` float NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `invoiceItems`
--

LOCK TABLES `invoiceItems` WRITE;
/*!40000 ALTER TABLE `invoiceItems` DISABLE KEYS */;
INSERT INTO `invoiceItems` VALUES (1,20,'10 pcs. of paper rim','2321',12,120,1440),(2,20,'5 pcs. pen','2321',10,15,150),(3,20,'10 pcs. ink caritage','2321',10,300,3000),(4,20,'10 pcs. of paper rim','2321',10,120,1200),(5,20,'10 pcs. of paper rim','2321',12,120,1440),(6,20,'5 pcs. pen','2321',10,15,150),(7,20,'10 pcs. ink caritage','2321',10,300,3000),(8,20,'10 pcs. of paper rim','2321',10,120,1200),(9,24,'10 pcs. of paper rim','2321',12,120,1440),(10,24,'5 pcs. pen','2321',10,15,150),(11,24,'10 pcs. ink caritage','2321',10,300,3000),(12,24,'10 pcs. of paper rim','2321',10,120,1200),(13,26,'10 pcs. of paper rim','2321',12,120,1440),(14,26,'5 pcs. pen','2321',10,15,150),(15,26,'10 pcs. ink caritage','2321',10,300,3000),(16,26,'10 pcs. of paper rim','2321',10,120,1200),(17,27,'10 pcs. ink caritage','2321',10,300,3000),(18,28,'10 pcs. of paper rim','2321',12,120,1440),(19,28,'10 pcs. of paper rim','2321',10,120,1200),(20,28,'10 pcs. of paper rim','2321',10,120,1200),(21,29,'10 pcs. of paper rim','2321',12,120,1440),(22,29,'5 pcs. pen','2321',10,15,150),(23,29,'10 pcs. of paper rim','443',25,230,5750),(24,29,'some thing would be purchase\n','45435',30,300,9000),(25,29,'some thing would be purchase\n','45435',30,300,9000),(26,29,'some thing would be purchase\n','45435',30,300,9000),(27,30,'10 pcs. of paper rim','2321',12,120,1440),(28,30,'5 pcs. pen','2321',10,15,150),(29,30,'10 pcs. ink caritage','2321',10,300,3000),(30,30,'10 pcs. of paper rim','2321',10,120,1200),(31,32,'10 pcs. of paper rim','2321',12,120,1440),(32,32,'5 pcs. pen','2321',10,15,150),(33,32,'10 pcs. ink caritage','2321',10,300,3000),(34,32,'10 pcs. of paper rim','2321',10,120,1200),(35,33,'10 pcs. of paper rim','2321',12,120,1440),(36,33,'dell laptop 4gb ram, 1000 Hard disk ,amd a9 proccessor ','34509437',50,30000,1500000),(37,33,'Hp laptop 4gb ram, 1000 Hard disk ,amd a9 proccessor ','45645645',20,35000,700000),(38,34,'10 pcs. ink caritage','2321',10,300,3000),(39,34,'wodden desk table 20 items','6546',20,15000,300000),(40,34,'air conditioner auto cutt off,maintain cool envirnment\n5 peas','75756',10,16000,160000),(41,35,'10 pcs. of paper rim','2321',12,120,1440),(42,35,'10 pcs. ink caritage','2321',10,300,3000),(43,35,'10 pcs. of paper rim','2321',10,120,1200),(44,36,'10 pcs. of paper rim','2321',12,120,1440),(45,36,'10 pcs. ink caritage','2321',10,300,3000),(46,36,'10 pcs. of paper rim','2321',10,120,1200);
/*!40000 ALTER TABLE `invoiceItems` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-09-21 16:48:54
