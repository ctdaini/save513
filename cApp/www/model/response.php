<?php 
/**
 * json封装类
 */
class Response 
{
    /**
     * $data：传入的数据
     * $code:状态码
     * $message：提示信息
     */public static function json($code,$message='',$data=array()){
		if(!is_numeric($code)){
			return '';
		}
		$json_res = array(
		"code"=>$code,
		"message"=>$message,
		"data"=>$data
		);
		echo json_encode($json_res, JSON_UNESCAPED_UNICODE); //转成json格式
		exit;

	}
   
}
 ?>