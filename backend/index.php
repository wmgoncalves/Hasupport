<?php
include("config.php");
header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Credentials: true");
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization');


$data = json_decode(file_get_contents("php://input"));
//$request = $data->request;

//$request = 1;
if(isset($_GET["buscar"])){
  $userData = mysqli_query($con, "SELECT * FROM equipe ORDER BY idEquipe");
  $res = array();

  while($row = mysqli_fetch_assoc($userData)){
    $res[] = $row;

  }
  echo json_encode($res);
  exit;
}


if(isset($_GET["inserir"])){
  $nome = $data->nome;
  if($nome != ""){
    $userData = mysqli_query($con, "INSERT INTO equipe (nome) VALUES ('".$nome."')");
    
    echo json_encode("sucesso");

  }
  exit;

}
?>