# CAR API INTERGRATION MODULE

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

### INSTALLATION
  -  STEP 1
    Clone this repository and RUN `cd awrostamani`.
  -  STEP 2 
     **RUN** `docker-compose up -d` and wait for all component to be installed
  -  STEP 3
     **RUN** `docker cp code webcontainer:/var/www/html/app`
  -  STEP 4
     **RUN** `docker exec -it webcontainer install-magento` and wait till installation is complete
> **Remember to add `magento2.local 127.0.0.1` to host file**

# USAGE
### Browsing car catalog
Visit http://local.magento/vehicles/cars/index` and browse car catalog. 
> **Please note that this page might take a while to load the first time due to magento's deployment of static contents**