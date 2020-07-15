# BFF 

## Pre requirements


*  [Git](https://git-scm.com/download)


*  [NodeJS](https://nodejs.org/es/download/)


*  [Docker](https://docs.docker.com/engine/install/)

## Installation and start

1. Open terminal, go to folder where you want to clone the repository and run: 
    
    `git clone https://github.com/voluntariado-ucc-ing/bff_mobile.git`
2.  Move to folder:s

    `cd bff_mobile`
3. Switch to dev branch:    

    `git checkout dev`
4. Install dependencies:

    `npm install`

5. Create .env file and fill this variables VA_IP, VA_PORT, DA_IP, DA_PORT. VA Volunteers Api, DA Donations Api.

6. Start:

    `npm start`
    
    
Running `npm start` will leave the service running at [http://localhost:3000](http://localhost:3000)

## Docker

```sh
docker build -t bff-image .

docker run --name=bff -d -p 3000:6969 bff-image
 ```

