# ExtPromise

Extends native Promise by helpful methods

## Install

`npm install ext-promise`

## Simple usage

```
let ExtPromise = require('ext-promise');

ExtPromise
    .all({
        result1: 1,
        result2: Promise.resolve(2),
        result3: new Promise(resolve =>
            setTimeout(() => resolve(3), 100)
        )
    })
    .then(results => console.log(results)); // { result1: 1, result2: 2, result3: 3 }
```

## Methods

`.all(Array collection|Object hash) -> Promise.<Array|Object>`

Extended static method `Promise.all`. New method enters object parameter
