# NgrxAssignment

## Approach

NgRx state management gives the ability to show data in structured format.

For this crud app the basic data structure is:

{
list of users,
loading,
errors
}

This helps in changing loaders and showing error message to the user easily.

Two main components of the app are:

1. Add User - Consists of form to add new user.
2. All Users - Consiste of the table to do all the edit, read and delete operations.

The components use store to manupulate data and the store uses effects to deal with http requests.

The basic redux pattern is followed hence making the app easy to maintain and debug.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

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
