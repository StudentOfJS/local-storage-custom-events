import * as React from 'react';
import './style.css';
import useStore from './useState';

export default function Name() {
  const [name, updateName] = useStore<string>('name');
  const handleChange = (e) => {
    updateName(e.currentTarget.value);
  };
  return <input type="text" value={name ?? ''} onChange={handleChange} />;
}
