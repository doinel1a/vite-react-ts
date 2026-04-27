import type { MouseEventHandler } from 'react';

type TButton = Readonly<{
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}>;

export default function Button({ text, onClick }: TButton) {
  return (
    <button
      type='button'
      className='bg-primary w-16 rounded-xl px-4 py-2 text-xl'
      onClick={onClick}
    >
      <span>{text}</span>
    </button>
  );
}
