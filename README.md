# redux-promise-test

[![Build Status](https://travis-ci.org/dariocravero/redux-promise-test.svg)](https://travis-ci.org/dariocravero/redux-promise-test)

Create redux-promise action results for your reducer tests.
It's based on the [sequence branch](https://github.com/acdlite/redux-promise/tree/sequence).

```
import * as reduxPromiseTest from 'redux-promise-test';

reduxPromiseTest.start('ACTION');
// => {
//  type: 'ACTION',
//  payload: undefined,
//  sequence: {
//    type: 'start',
//    id: 1
//  }
// }

reduxPromiseTest.next('ACTION');
// => {
//  type: 'ACTION',
//  payload: {},
//  sequence: {
//    type: 'next',
//    id: 1
//  }
// }

reduxPromiseTest.error('ACTION');
// => {
//  error: true,
//  type: 'ACTION',
//  payload: new Error(),
//  sequence: {
//    type: 'next',
//    id: 1
//  }
// }
```

See the code for more advanced usage.

MIT license
