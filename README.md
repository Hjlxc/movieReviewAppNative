# movieReviewAppNative

This project implement a movie review app with React Native-Redux framework, that pulling the data from [TMDB movie database](https://www.themoviedb.org/documentation/api) for end user to review. The current version are only test with `Android` devices.

## Feature

1. All user to review a list of movies with overall information
2. Provide detail information for each selected movie
3. Provide useful filter feature

- Filter by Language
- Filter by Voting
- Filter for Adult Only
- Search by Title Key Wrod

4. Provide useful sorting feature

- Sort by Rating
- Sort by Alphabet
- Sort by Release data

## Structure

The project has 3 main sections that allow for easy extension:

- modules
- [container](https://github.com/Hjlxc/movieReviewAppNative/tree/master/container)
- [component](https://github.com/Hjlxc/movieReviewAppNative/tree/master/component)

### modules

The modules contains the redux module, any redux state and logic should add to here. It is entirely imported from the repo for the browser-base app [here](https://github.com/Hjlxc/movie-review-app)

### container

The container are served as the container that group the components. In addition, it will also connect and receive redux state. Container can either be stateful or stateless.

### component

The component should only be responsible for render and be stateless.

## Run app locally

Clone the repo, then run the following command to install dependency

```sh
$ yarn install
```

Then run both the following command

```sh
$ yarn android
```

```sh
$ yarn start
```

And you should be able to test it either on virtual or physical that has been setup.

## Todo

- Fix the bug that throw an error when testing component and import modules from the browser-base app
- Improve UI/UX for better user experience
- Adding additional feature based on required
