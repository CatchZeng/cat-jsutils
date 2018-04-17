# cat-jsutils

A collection of JavaScript utility functions without any dependencies.

## Installation

```shell
$ npm i --save cat-jsutils
```

## Usgae

```javascript
var utils = require('cat-jsutils')
utils.string.isString('aaa')//true

//Or

var util = require('cat-jsutils').string
util.isString('aaa')//true

```

## API

### string

---

##### isString(value)
Determine whether value is a string.

#### contains(source, value)
Determine whether source contains value.


#### containsAny(source, ...value)
Determine whether source contains any of the value.

#### containsAll(source, ...value)
Determine whether source contains all values.

### number

---

#### isNum(value)
Determine whether value is a Number.


## Coverage

Run script to see coverage.

```
npm run coverage
```

Open coverage/lcov-report/index.html with browser to see coverage detial.