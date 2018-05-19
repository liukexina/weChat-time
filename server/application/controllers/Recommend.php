<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Recommend extends CI_Controller {
  public function get_rec_list()
    {
        $this -> load -> model('recommend_model');
        $result = $this -> recommend_model -> get_list();
        echo json_encode($result);
    }
}