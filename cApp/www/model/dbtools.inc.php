<?php 
	function create_connection(){
		$link=mysqli_connect("localhost","root","c")
		or die("无法建立连接".mysqli_connect_error());
		mysqli_query($link,"SET NAMES utf8");
		return $link;
	}
	function execute_sql($link,$database,$sql){
		mysqli_select_db($link,$database)
		or die("无法打开数据库".mysqli_error($link));
		$result=mysqli_query($link,$sql);
		return $result;
	}
	
 ?>

