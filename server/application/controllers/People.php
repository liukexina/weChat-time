<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class People extends CI_Controller {
  public function get_people_list()
    {
        $this -> load -> model('people_model');
        $result = $this -> people_model -> get_list();
        echo json_encode($result);
    }
}