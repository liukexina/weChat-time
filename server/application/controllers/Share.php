<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Share extends CI_Controller {
    public function get_share_list() {
       $this -> load -> model('share_model');
        $result = $this -> share_model -> get_list();
        echo json_encode($result);
    }
}
