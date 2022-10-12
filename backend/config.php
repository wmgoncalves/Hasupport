<?php 

$host = "localhost";
$user = "root"; 
$senha = ""; 
$dbname = "ah-assist";
$con = mysqli_connect($host, $user, $senha, $dbname);

// Verifica a conexão 
if (!$con) { 
   die("Falha na conexão: " . mysqli_connect_error()); 
}
?>