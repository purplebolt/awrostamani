<?php
/**
 * Created by PhpStorm.
 * User: BOBLEE
 * Date: 12/03/2020
 * Time: 9:51 AM
 */

namespace AWRostamani\RemoteCatalog\ViewModel;

use Magento\Framework\View\Element\Block\ArgumentInterface;
use AWRostamani\RemoteCatalog\Model\GetData;

class CarsViewModel implements ArgumentInterface
{

    private $_carsData;

    public function __construct(
        GetData $carsData
    )
    {
        $this->_carsData = $carsData;
    }

    public function retrieve(){
        return $this->_carsData->loadData();
    }

}