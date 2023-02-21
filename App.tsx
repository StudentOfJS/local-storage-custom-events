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
      <div className="mt-10">
        <CountButton action={'decrement'} />
        <span className="mx-4">
          <DisplayCount />
        </span>
        <CountButton action={'increment'} />
      </div>
    </div>
  );
}
