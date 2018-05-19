<?php
defined('BASEPATH') OR exit('No direct script access allowed');

use QCloud_WeApp_SDK\Mysql\Mysql as DB;
class Share_model extends CI_Model {

    public function get_list()
    {
        $pdo = DB::getInstance(); 
        $query = $pdo->query("select * from act_time p , t_user up where p.user_id = up.user_id"); 
        return $query->fetchAll(); 
    }
}