# Come Assemble React Test

The objective of the project is the development of a simplified version of the IMDB site.

## Layout

[Layout](https://www.figma.com/file/MxV5N2cbeu7ewCyfpHxQ0N/Come-Assemble---React-test?type=design&node-id=0%3A1&t=DjNPyHNiJ2BvVOuF-1)

## Requirements

- Home page with a list of movies that are currently in theatres

```bash
  https://api.themoviedb.org/3/movie/now_playing
```

- Movie page with some basic information

```bash
  https://api.themoviedb.org/3/movie/{movie_id}
```

- Search movies by names

```bash
  https://api.themoviedb.org/3/search/movie
```

## Getting started

Install dependencies and start dev server with hot reload at http://localhost:3000.

```bash
  yarn
  yarn dev
```

### Test commands

Run unit tests and watch

```bash
  yarn test:unit
```

Run unit tests with coverage

```bash
  yarn test:unit:coverage
```

Run e2e tests

```bash
  yarn test:e2e
```
