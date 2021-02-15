## Description of the solution

This project was generated with Angular CLI version 8.3.8. Project uses Angular material for user interface and ngrx for managing the state. Used NgRx
store and effects to manage bookmarks on REST services. Developed three REST services:

Used HTTP GET method for displaying the bookmarks. Bookmarks are then filterd on the basis of groups. Used HTTP POST method for creating bookmarks.
Used HTTP Delete method for deleting the bookmarks.

Used Json server to simulate a backend REST service to deliver data in JSON format.

## Instructions to run the application

To run the json server, add "json:server": "json-server --watch db.json" in package.json. Then run the command "npm run json:server". It will start
running on localhost:3000. Use this as url for REST APIs.

Next, to run the user interface, open a new cmd window and run "npm start". It will start running on localhost:4200

## Screenshots

Please find 'screenshots' folder in the repository.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use
`ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the
[Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
