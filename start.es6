/* eslint-disable no-undefined */
import invariant from 'invariant';

export default function start(type, rest={}, id=1) {
  invariant(typeof type !== 'undefined', 'need a type');

  return {
    ...rest,
    type,
    payload: undefined,
    sequence: {
      type: 'start',
      id
    }
  };
}
