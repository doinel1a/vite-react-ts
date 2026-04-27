import { useState } from 'react';

import Button from './button';

export default function Counter() {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <h1 className='mb-4 text-4xl'>Vite ReactTS — Starter</h1>
      <section className='container flex h-72 w-96 flex-col items-center justify-between rounded-xl bg-card text-card-foreground py-10'>
        <h2 className='text-6xl'>{count}</h2>
        <div className='flex gap-x-5'>
          <Button text='+ 1' onClick={() => setCount((previousCount) => previousCount + 1)} />
          <Button text='- 1' onClick={() => setCount((previousCount) => previousCount - 1)} />
        </div>
      </section>
    </>
  );
}
