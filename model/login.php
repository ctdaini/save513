<?php 
header('Access-Control-Allow-Origin: *');
header('content-type:application/json;charset=utf8');
header("Content-Type: text/html;charset=utf-8"); 
header("Content-type: text/json");
  require_once("dbtools.inc.php");
  $link=create_connection();
  $database=SAE_MYSQL_DB;
   // $database='test';
  $url="http://ionicserver.applinzi.com/model/upload/projects.html";
   $username=$_GET['form-username'];
   $password=$_GET['form-password'];
  $sql="select id from login where username='$username' and password='$password' 
  limit 1";
  $result=execute_sql($link,$database,$sql); 
  if($e = mysqli_fetch_object($result)){
    echo $username,' 欢迎你！';
    echo '正在跳转...';
  header("refresh:1;url=$url");
    exit;
} else {
    exit('登录失败！');
}
mysqli_close($link); 
?>