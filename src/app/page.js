"use client"
import { useState } from 'react';
import Form from './components/form';
import Sequence from './components/sequence';

export default function Home() {
  const [number, setNumber] = useState(null);

  const handleSubmit = (num) => {
    setNumber(num);
  };

  return (
    <div>
      {number ? (
        <Sequence number={number} />
      ) : (
        <Form onSubmit={handleSubmit} />
      )}
    </div>
  );
}
