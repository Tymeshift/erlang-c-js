# ErlangC.Js
Library to calculate a required number of agents needed for a specific service level to handle incoming volume of arrivals per time interval

## Install

```bash
$ npm install --save ErlangC.js
```

## Usage

```
import { getNumberOfAgents } from 'ErlangC.js';

const volumes = 50;
const intervalLength = 3600;
const aht = 420;
const targetServiceLevel = 0.8;
const targetTime = 90;
const maxOccupancy = 0.8;
const shrinkage = 0.2;

const FTE = getNumberOfAgents(volumes, intervalLength, aht, targetServiceLevel, targetTime, maxOccupancy, shrinkage)
```

## Test

To run all the tests, from a command-line at the root directory using npm
```bash
$ npm run test
```
## Build

```bash
$ npm install
$ npm run build
```
will update index.js in root directory with the latest build

## Licence

MIT.

See *LICENCE.md*
