import error from '../error';
import test from 'tape';

const ERROR_MESSAGE = 'some message';
const META = {meta: 'stuff'};
const TYPE = 'TYPE';

test('#error', t => {
  t.throws(() => error(), /Invariant Violation: need a type/, 'throws if there\'s no type set');

  t.deepEquals(
    error(TYPE), {
      error: true,
      type: TYPE,
      payload: new Error(),
      sequence: {
        type: 'next',
        id: 1
      }
    },
    'has sensible defaults'
  );

  t.deepEquals(
    error(TYPE, ERROR_MESSAGE).payload,
    new Error(ERROR_MESSAGE),
    'custom error message'
  );

  t.deepEquals(
    error(TYPE, '', META), {
      ...META,
      error: true,
      type: TYPE,
      payload: new Error(),
      sequence: {
        type: 'next',
        id: 1
      }
    },
    'extends the object with custom action keys'
  );

  t.equals(
    error(TYPE, '', {}, 2).sequence.id,
    2,
    'custom sequence id'
  );

  t.end();
});
