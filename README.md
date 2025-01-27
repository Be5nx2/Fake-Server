# Fake-Server

## Prerequisite 
1. Install and use `node v22` (on windows, you can use [nvm windows](https://github.com/coreybutler/nvm-windows))


## Run the server 

### Quick - Testing

Using _ts-node_ is for quickly getting the server up and running with Typescript for testing. 

- run `npm run server`
- the server run on port `3000`, to request server use `http://localhost:8080`.

### By Transpiled file with node - Prod

1. Transpil the code `npm run build`
2. Run the server `npm run start`