<?php
/**
 * Created by PhpStorm.
 * User: BOBLEE
 * Date: 12/03/2020
 * Time: 9:36 AM
 */

namespace AWRostamani\RemoteCatalog\Controller\Cars;

use Magento\Framework\App\Action\Context;
use Magento\Framework\View\Result\PageFactory;
use Magento\Framework\Controller\Result\RawFactory;

class Index extends \Magento\Framework\App\Action\Action
{

    private $_resultPage;

    private $_rawFactory;

    public function __construct(
        Context $context,
        PageFactory $pageFactory,
        RawFactory $raw

    )
    {
        $this->_resultPage = $pageFactory;
        $this->_rawFactory = $raw;
        parent::__construct($context);
    }

    public function execute()
    {
        //return $this->_rawFactory->create();
        $page =  $this->_resultPage->create();
        //$page->getConfig()->setPageLayout('1column');
        return $page;
    }
}