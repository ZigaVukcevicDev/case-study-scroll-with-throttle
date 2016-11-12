#### Use case
# Scroll with throttle

## Description

While listening for scroll event, this event will be fired pretty often. If we have an expensive function which needs to be invoked every time, browser will shorty become very slow while rendering content. We can solve this issue by preventing calling expensive function so many times. In this case `Lodash`'s function `throttle` is very handy.

### Try out this use case.

By installing and serving up, you will see scrolling performance is very bad. If you enable throttling, performance will improve.

In `js/main.js` you can play with values:

a) `time`, currently set to `1000 ms`

Expensive function (wrapped by throttle function) will be called only once in given time.

b) `i`, currently set to `1000`

How many times expensive function will iterate and generate random number.

## Install

`npm install`

## Run

`npm run serve`

Open browser at `http://localhost:8080`

### Resources

- https://lodash.com/docs/4.16.4#throttle
- http://demo.nimius.net/debounce_throttle/
- https://css-tricks.com/debouncing-throttling-explained-examples/

