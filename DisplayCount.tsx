import * as React from 'react';
import useStore from './useState';

export default function DisplayCount() {
  const [count] = useStore<number>('count');
  return <code>{count}</code>;
}
