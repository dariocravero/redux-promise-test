import start from '../start';
import test from 'tape';

const META = {meta: 'stuff'};
const TYPE = 'TYPE';

test('#start', t => {
  t.throws(() => start(), /Invariant Violation: need a type/, 'throws if there\'s no type set');

  t.deepEquals(
    start(TYPE), {
      type: TYPE,
      payload: undefined,
      sequence: {
        type: 'start',
        id: 1
      }
    },
    'has sensible defaults'
  );

  t.deepEquals(
    start(TYPE, META), {
      ...META,
      type: TYPE,
      payload: undefined,
      sequence: {
        type: 'start',
        id: 1
      }
    },
    'extends the object with custom action keys'
  );

  t.equals(
    start(TYPE, {}, 2).sequence.id,
    2,
    'custom sequence id'
  );

  t.end();
});
