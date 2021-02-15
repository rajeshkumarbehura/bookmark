## Description of the solution

Feature Implemented:
   1. Add Bookmark by group
   2. View Bookmark by group
   3. Delete Bookmark by group

Used HTTP GET method for displaying the bookmarks. Bookmarks are then filterd on the basis of groups. Used HTTP POST method for creating bookmarks.
Used HTTP Delete method for deleting the bookmarks.

Used Json server to simulate a backend REST service to deliver data in JSON format.

## Instructions to run the application

Step 1 :  To install all package and library, use below command.
````
 yarn install
````

Step 2: Run Json Server

To run the json server, use below command & it will start
running on localhost:3000. Use this as url for REST APIs.

````
yarn json:server
````

Step 3: Run the application

```
yarn start
```
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
This applicaiton use Karma to run test cases.
Below command helps to run test cases & also produces code coverage report

```
yarn test
```

Code coverage report :
````
Coverage summary  
Statements   : 93.27% ( 97/104 ) 
Branches     : 90.91% ( 10/11 )
Functions    : 80.56% ( 29/36 )
Lines        : 95.35% ( 82/86 )
````

## Code Format and Clean before pushing to Git 

Clean and format using lint & prettfier. This feature later can hookup with git, so that any push command fire, it must go through formatting code
```
yarn prettier:format
yarn lint
```

## Running end-to-end tests

Not implemented at this stage due to lack of time, But application must build integration test cases.

## Review & Thoughts
1. Project needs to be more structured based on folder structure. Good folder architecture helps to understand code and maintain it.
2. Every feature must implement with Module style, which helps to build efficient testing mechanism and plug&play style of coding.
3. Code formatting must be step to cleanup.
4. Error log tracking must be done using elastic search, log rocket.
5. Every API fired must attached with requestID.
