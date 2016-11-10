# Use case: scroll with throttle

## Description

When using scroll we sometimes need to code an expensive function.

While listening for scroll event, this event will be fired pretty often. Browser will shorty become very slow while rendering content. We can solve this issue by preventing calling expensive function so many times. `Lodash`'s function `throttle` is very handy.

### Try out this use case.

When installing and serving up, you will see scrolling performance is very bad. If you enable throttling, performance will improve.

In `js/main.js` you can play with values:

a) `time`, currently set to `1000 ms`

Throttle will be called only once in given time.

b) `i`, currently set to `1000`

How many times expensive function will iterate and generate random number.

## Install

`npm install`

## Run

`npm run serve`

Open browser at `http://localhost:8080`

### Resources

- https://lodash.com/docs/4.16.4#throttle
- https://css-tricks.com/debouncing-throttling-explained-examples/
