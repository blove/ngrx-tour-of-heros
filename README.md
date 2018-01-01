# NgRx Tour of Heroes

The purpose of this repository is to create an example Tour of Heros application using Angular along with NgRx.

# Install

Run `cd client` then `yarn install` to install the Angular client dependencies.

Run `cd server` then `yarn install` to install the server dependencies.

# Serve

Run `cd client` then`yarn run serve` for the REST API server.

Run `cd server` then`ng serve` for the Angular client. Navigate to `http://localhost:4200/`.

# Known Issues

* Lots of subscriptions that are not being managed.
* Lack of use of switchMap and map rxjs operators.
* Updating a power does not update the title in the card.
* Hero powers is only displaying a single (last??) power.
