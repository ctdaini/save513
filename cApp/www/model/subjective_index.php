<?php 
header('Access-Control-Allow-Origin: *');

header('Access-Control-Allow-Headers: X-Requested-With');
	require_once('response.php');
	require_once("dbtools.inc.php");
	$link=create_connection();
  //   $sql="SELECT 
  // info.id   AS 'ID',
  // info.subProblem   AS 'Title',
  // info.subAnswer    AS 'Answer'
  // FROM subjectiveinfo AS info 
  // ";
    $sql="SELECT * FROM `subjectiveinfo`";
$result=execute_sql($link,"ionic_learn",$sql); 
 $res_arr=array();//定义一个数组用来存放最后的json数据
 /**
  * resALL类是用来存放数据库中取出来的值
  */
 class resAll
 {  
  public $id;
  public $Title;
  public $Answer;
 }
 while($row = mysqli_fetch_assoc($result))
  	{	
  		 
       $res_all=new resAll();
       $res_all->id=$row['id'];
       $res_all->Title=$row['Title'];
       $res_all->Answer=$row['Answer'];
       $res_arr[]=$res_all;
  
  	} //

 function checkNum($num2){
  return ($num2%2) ? TRUE : FALSE;
}
$num2=file_get_contents("php://input");
if(checkNum($num2) === TRUE){
  echo '奇数';

}else{
  Response::json(300,'successful',$res_arr);
}

   mysqli_close($link); 

 ?>