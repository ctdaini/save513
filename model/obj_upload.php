<?php 
header('Access-Control-Allow-Origin: *');
header('content-type:application/json;charset=utf8');
header("Content-Type: text/html;charset=utf-8"); 
header("Content-type: text/json");
  require_once("dbtools.inc.php");
  $link=create_connection();
  $database=SAE_MYSQL_DB;
   // $database='test';
  $testTitle=$_GET['form-zgt'];
  $testAnswer=$_GET['form-zgtAswer'];
  $sql="INSERT INTO `subjectiveinfo` (`id`, `Title`, `Answer`) VALUES (NULL, '$testTitle', ' $testAnswer')";
  $result=execute_sql($link,$database,$sql); 
  echo '主观题上传成功！';
  $url="http://ionicserver.applinzi.com/model/upload/projects.html";
  header("refresh:1;url=$url");
mysqli_close($link); 
 ?>