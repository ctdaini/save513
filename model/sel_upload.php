<?php 
header('Access-Control-Allow-Origin: *');
header('content-type:application/json;charset=utf8');
header("Content-Type: text/html;charset=utf-8"); 
header("Content-type: text/json");
  require_once("dbtools.inc.php");
  $link=create_connection();
  $database=SAE_MYSQL_DB;
   // $database='test';
  $kgtTitle=$_GET['form-kgt'];
  $A       =$_GET['form-A'];
  $B	   =$_GET['form-B'];
  $C       =$_GET['form-C'];
  $D       =$_GET['form-D'];
  $R       =$_GET['form-R'];
  $sql="INSERT INTO `selectoneinfo` (`id`, `Title`, `A`, `B`, `C`, `D`, `Answer`) 
  VALUES (NULL, '$kgtTitle', '$A', '$B', '$C', '$D', '$R')";
  $result=execute_sql($link,$database,$sql); 
   echo '客观题上传成功！';
  $url="http://ionicserver.applinzi.com/model/upload/projects.html";
  header("refresh:1;url=$url");
mysqli_close($link); 
 ?>