# Electron Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.9.

## Screenschots

## Electron Install

Reference: (https://fireship.io/lessons/desktop-apps-with-electron-and-angular/)

Update `base` in `index.html` to `<base href="./">` and Run `npm install electron --save-dev` to install.

## Electron Config

Create file `main.js` and insert code:
```
const { app, BrowserWindow } = require('electron');

let window;
let appIcon = `${__dirname}/icon.png`;

function createWindow () {
  // Create the browser window.
  window = new BrowserWindow({
    width: 800, 
    height: 600,
    backgroundColor: '#2e2c29',
    // frame: false,
    autoHideMenuBar:true,
    icon: appIcon
  })


  window.loadURL(`file://${__dirname}/dist/index.html`)

  //// uncomment below to open the DevTools.
  // win.webContents.openDevTools()

  // Event when the window is closed.
  window.on('closed', function () {
    window = null
  })
}

// Create window on electron intialization
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {

  // On macOS specific close process
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // macOS specific close process
  if (window === null) {
    createWindow()
  }
})
``` 

Update `package.json`:
```
'main':'main.js',
...
'script':{
	...
	"electron": "electron .",
    "electron-build": "ng build --prod && electron ."
}
```

## TailWindCSS Install

Run `npm i tailwindcss postcss-import postcss-loader postcss-scss @angular-builders/custom-webpack -D` to install and Run `npx tailwind init` to init.

## TailWindCSS Config

Import Tailwind on style.scss:
```
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";

```

Create file `webpack.config.js` and insert code:
```
	module.exports = {
	    module: {
		      rules: [
		        {
		          test: /\.scss$/,
		          loader: 'postcss-loader',
		          options: {
		            ident: 'postcss',
		            syntax: 'postcss-scss',
		            plugins: () => [
		              require('postcss-import'),
		              require('tailwindcss'),
		              require('autoprefixer'),
		            ]
		         }
		       }
		    ]
		}
	};
``` 

In angular.json, replace: 
`@angular-devkit/build-angular:browser` to `@angular-builders/custom-webpack:browser`
add ```"customWebpackConfig": {
              "path": "./webpack.config.js"
            }``` in `options`.

And replace: 

`@angular-devkit/build-angular:dev-server` to `@angular-builders/custom-webpack:dev-server`
add ```"customWebpackConfig": {
              "path": "./webpack.config.js"
            }``` in `options`

## Resources Font

Background Patterns (http://www.heropatterns.com/).

Illustrations (https://undraw.co/illustrations).

## Development server

Run `npm run electron-build`.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
