<?php
/**
 * Created by PhpStorm.
 * User: BOBLEE
 * Date: 12/03/2020
 * Time: 9:19 AM
 */

namespace AWRostamani\RemoteCatalog\Model;


class GetData
{

    const ENDPOINT = 'https://autotrustwebsrvtst.awrostamani.ae/AutotrustProxy/resources/autotrustProxy/getVehiclesProxy';

    public function getHeaders(){

        return [
            'Content-Type: application/json',
            'auth: WELCOME$1',
            'appName: AUTOTRUST_WEBSITE'
        ];
    }

    private function connect(){
        $ch=curl_init();
        curl_setopt($ch, CURLOPT_URL, $this->getEndpoint());
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $this->getHeaders());
        return $ch;
    }

    public function loadData(){
            $ch = $this->connect();
            $response = curl_exec($ch);
            return $response;
    }

    public function getEndpoint(){
        return self::ENDPOINT;
    }

}