<?php
defined('BASEPATH') OR exit('No direct script access allowed');

use QCloud_WeApp_SDK\Mysql\Mysql as DB;
class People_model extends CI_Model {

    public function get_list()
    {
        return DB::select('t_user', ['*']);
    }
}
