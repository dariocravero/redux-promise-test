import next from '../next';
import test from 'tape';

const META = {meta: 'stuff'};
const RESULT = {ok: true};
const TYPE = 'TYPE';

test('#next', t => {
  t.throws(() => next(), /Invariant Violation: need a type/, 'throws if there\'s no type set');

  t.deepEquals(
    next(TYPE), {
      type: TYPE,
      payload: {},
      sequence: {
        type: 'next',
        id: 1
      }
    },
    'has sensible defaults'
  );

  t.deepEquals(next(TYPE, RESULT).payload, RESULT, 'sets the payload to the result');

  t.deepEquals(
    next(TYPE, {}, META), {
      ...META,
      type: TYPE,
      payload: {},
      sequence: {
        type: 'next',
        id: 1
      }
    },
    'extends the object with custom action keys'
  );

  t.equals(
    next(TYPE, {}, {}, 2).sequence.id,
    2,
    'custom sequence id'
  );

  t.end();
});
