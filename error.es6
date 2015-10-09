import invariant from 'invariant';

export default function error(type, errorMessage='', rest={}, id=1) {
  invariant(typeof type !== 'undefined', 'need a type');

  return {
    ...rest,
    error: true,
    type,
    payload: new Error(errorMessage),
    sequence: {
      type: 'next',
      id
    }
  };
}
