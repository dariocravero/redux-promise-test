import * as reduxPromiseTest from '../index';
import test from 'tape';

test('index', t => {
  t.equals(typeof reduxPromiseTest.error, 'function', 'exports error function');
  t.equals(typeof reduxPromiseTest.next, 'function', 'exports next function');
  t.equals(typeof reduxPromiseTest.start, 'function', 'exports start function');
  t.end();
});
