import * as React from 'react';
import CountButton from './CountButton';
import DisplayCount from './DisplayCount';
import Input from './input';
import Name from './name';
import './style.css';

export default function App() {
  return (
    <div>
      <div className="flex">
        <h1 className="inline">Hello</h1>
        <Name />
      </div>
      <Input />
      <DisplayCount />
      <CountButton action={'decrement'} />
      <CountButton action={'increment'} />
    </div>
  );
}
