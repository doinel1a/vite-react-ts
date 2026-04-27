import React from 'react';

interface IButton {
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Button({ text, onClick }: IButton) {
  return (
    <button
      type='button'
      className='w-16 rounded-xl bg-primary px-4 py-2 text-xl'
      onClick={onClick}
    >
      <span>{text}</span>
    </button>
  );
}
