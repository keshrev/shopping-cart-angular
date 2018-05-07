# Shopping cart App (Angular front-end application)

#Developed by Keshava R 
#Email : kesh.rev@gmail.com
#Mobile : +919900881552

#Tech stack - Refer package.json


#This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.4.

# Environment setup
## Dependencies - Execute the below steps in Terminal/comand prompt.
What you need to run this app:
* `node` and `npm` (`brew install node`)
* Ensure you're running the latest versions Node `v8.x.x`+ (or `v9.x.x`) and NPM `5.x.x`+
Refer - `https://www.taniarascia.com/how-to-install-and-use-node-js-and-npm-mac-and-windows/`

> If you have `nvm` installed, which is highly recommended (`brew install nvm`) you can do a `nvm install --lts && nvm use` in `$` to run with the latest Node LTS. You can also have this `zsh` done for you [automatically](https://github.com/creationix/nvm#calling-nvm-use-automatically-in-a-directory-with-a-nvmrc-file)


>Install typescript globally for compilation
`npm install --global typescript`

>Install Angular CLI
`npm install -g @angular/cli` 

#For more info refer https://github.com/angular/angular-cli#prerequisites

## Go to poject location and do `npm install `to dowload the project deopendencies to node_module.

## Development server
# Project specific - since this app consumes node.js/express restful apis. Run node.js app(https://github.com/keshrev/shopping-cart-node.git)) before running the below step.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

#Refer `https://github.com/angular/angular-cli/wiki/build` for detailed build settings.


# Application Screens(app is combination of both https://github.com/keshrev/shopping-cart-angular and https://github.com/keshrev/shopping-cart-node.git )


#"Initial screen Loading"
![alt tag](https://github.com/keshrev/shopping-cart-screens/blob/master/Screen%20Shot%202018-05-07%20at%2007.55.50.png "Initial screen Loading")

#Landing screen - Products list page
![alt tag](https://github.com/keshrev/shopping-cart-screens/blob/master/Screen%20Shot%202018-05-07%20at%2007.56.23.png "Landing screen")

![alt tag](https://github.com/keshrev/shopping-cart-screens/blob/master/Screen%20Shot%202018-05-07%20at%2007.56.28.png "Landing screen")

#Products added to cart - Provided remove button on right top of ech product to remove product from cart
![alt tag](https://github.com/keshrev/shopping-cart-screens/blob/master/Screen%20Shot%202018-05-07%20at%2007.56.47.png "Products add/remove to/from cart")

# Higlinghting the cart count when cart updated 
![alt tag](https://github.com/keshrev/shopping-cart-screens/blob/master/Screen%20Shot%202018-05-07%20at%2007.58.30.png "cart count update")
