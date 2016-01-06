#Leveraging Webpack Configurations across Environments
This repository demonstrates using webpack leverage existing webpack configuration and progressively
build on it to support different deployment targets, i.e. DEV, TEST, INTG, PROD

**Installatation**

You'll need `npm` to install the components required
the components needed. If you don't alread have it install Node.js from http://nodejs.org to get it.

###Install webpack amd webpack-dev-server globally
```
npm install webpack -g
npm install webpack-dev-server -g
```
The **-g** flag makes installs them globally so they are available in your PATH 

###Setup the app
1. Change directory to the root of the code
2. Install the comonents required by the app
```
npm install
```

###Create the DEV bundle the App (2 options)
1. Using `webpack` - uses `webpack.config.js` by default
```
webpack
```
2. Using `webpack-dev-server` to bundle and host
```
webpack-dev-server
```
`webpack-dev-server` hosts your app locally. Browse to http://localhost:8080/webpack-dev-server or http://localhost:8080/

###Create the PROD bundle the App (2 options)
1. Using `webpack` specifying production configuration
```
webpack --config webpack-prod.config.js
```

2. Using `webpack-dev-server` to bundle and host specifying production configuration
```
webpack-dev-server --config webpack-prod.config.js
```
