## Installation

```sh-session
npm i numAbrev
```

## Example

```js
import { numAbbrev } from "./converter.js";

numAbbrev(2000) // 2k
numAbbrev(55123) // 55.1k
```

Input Range: *thousands* to *trillions*
Any number lower/higher than the range will return an error

```js
numAbbrev(220) // RangeError: Must be within range of 1k to 999tn
```