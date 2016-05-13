<?php 
header('Access-Control-Allow-Origin: *');

header('Access-Control-Allow-Headers: X-Requested-With');
	require_once('response.php');
	require_once("dbtools.inc.php");
	$link=create_connection();
  //   $sql="SELECT 
  // info.id   AS 'ID',
  // info.SelProblem   AS 'Title',
  // info.SelChooseA   AS 'A',
  // info.SelChooseB   AS 'B',
  // info.SelChooseC   AS 'C',
  // info.SelChooseD   AS 'D',
  // info.SelAnswer    AS 'Answer'
  // FROM selectoneinfo AS info 
  // ";
  $sql="SELECT * FROM `selectoneinfo`";
$result=execute_sql($link,"ionic_learn",$sql); 
 $res_arr=array();//定义一个数组用来存放最后的json数据
 /**
  * resALL类是用来存放数据库中取出来的值
  */
 class resAll
 {  
  public $id;
  public $Title;
  public $A;
  public $B;
  public $C;
  public $D;
  public $Answer;
 }
 while($row = mysqli_fetch_assoc($result))
  	{	
  		 
       $res_all=new resAll();
       $res_all->id=$row['id'];
       $res_all->Title=$row['Title'];
       $res_all->A=$row['A'];
       $res_all->B=$row['B'];
       $res_all->C=$row['C'];
       $res_all->D=$row['D'];
       $res_all->Answer=$row['Answer'];
       $res_arr[]=$res_all;
  
  	} //

 function checkNum($num){
  return ($num%2) ? TRUE : FALSE;
}
$num=file_get_contents("php://input");
if(checkNum($num) === TRUE){
  echo '奇数';

}else{
  Response::json(300,'successful',$res_arr);
}

   mysqli_close($link); 

 ?>