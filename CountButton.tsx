import * as React from 'react';
import useStore from './useState';

export default function CountButton({
  action,
}: {
  action: 'increment' | 'decrement';
}) {
  const [_, updateCount] = useStore<number>('count');
  const handleClick = () => {
    updateCount((count) => {
      if (action === 'decrement' && count <= 0) return;
      return count + (action === 'increment' ? 1 : -1);
    });
  };
  return <button onClick={handleClick}>{action}</button>;
}
