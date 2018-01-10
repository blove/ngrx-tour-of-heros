# NgRx Tour of Heroes

The purpose of this repository is to create an example Tour of Heroes application using Angular along with NgRx.

# Install

Run `cd client` then `yarn install` to install the Angular client dependencies.

Run `cd server` then `yarn install` to install the server dependencies.

# Serve

Run `cd server` then `ng serve` for the Angular client. Navigate to `http://localhost:4200/`.

Run `cd client` then`yarn run serve` for the REST API server.

# Branches

There are several branches that capture the state of the application at different times.

## antipatterns

This branch implements several anti-patterns of RxJS which can be cleaned up through the use of various operators as well as improved subscription management.

## start

This branch is a good place to start if you are learning to implement NgRx in an existing application.
The application is built entirely using Angular and RxJS without NgRx.
There are a few bugs in the application due to the need to implement communication between containers (views).
For example, when adding a new super power, the power is persisted to the server but the index view is not updated with the new list of power objects.
This is one example where the use of the Redux pattern can provide consistent behavior in our application.

## ngrx-refactor-1

This branch includes the first refactor of our application to implement the Redux pattern using NgRX.
The `power` model is used throughout our application, in both the heroes module as well as in the powers module.
As such, we implement the cross-cutting concern in the `CoreModule` of our application, which is imported into the `AppModule`.

## ngrx-refactor-2

This branch includes:

* Refactor of the `PowersModule` to use NgRx
* Minor updates to the UI of the application
* Created 20 new Karma tests
* Including .travis.yml to run our tests on Travis CI