# BFF Mobile

## Pre requirements


*  [Git](https://git-scm.com/download)


*  [NodeJS](https://nodejs.org/es/download/)


*  [Docker](https://docs.docker.com/engine/install/)

## Instalación e inicio

1. Open terminal, go to folder where you want to clone the repository and run: 
    
    `git clone https://github.com/voluntariado-ucc-ing/bff_mobile.git`
2.  Move to folder:s

    `cd bff_web_farmapago`
3. Switch to dev branch:    

    `git checkout dev`
4. Install dependencies:

    `npm install`
5. Start:

    `npm start`
    
    
Running `npm start` will leave the service running at [http://localhost:3000](http://localhost:3000)

## Docker

```sh
docker build -t bff-mobile-image .

docker run --name=bff-mobile -d -p 3000:3000 bff-mobile-image
 ```

