import invariant from 'invariant';

export default function next(type, result={}, rest={}, id=1) {
  invariant(typeof type !== 'undefined', 'need a type');

  return {
    ...rest,
    type,
    payload: result,
    sequence: {
      type: 'next',
      id
    }
  };
}
