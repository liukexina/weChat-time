<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Publics extends CI_Controller {
  public function get_public_list()
    {
        $this -> load -> model('public_model');
        $result = $this -> public_model -> get_list();
        echo json_encode($result);
    }
}