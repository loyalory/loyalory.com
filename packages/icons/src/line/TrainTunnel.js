import React from 'react';

export default function TrainTunnel(props) {
  return (
    <svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M24 6C12.972 6 4 14.972 4 26V42H8V26C8 17.178 15.178 10 24 10C32.822 10 40 17.178 40 26V42H44V26C44 14.972 35.028 6 24 6Z"
        fill="currentColor"
      />
      <path
        d="M26 28L27.334 32H20.666L22 28H18L12 46H16L16.666 44H31.334L32 46H36L30 28H26ZM18 40L19.334 36H28.666L30 40H18Z"
        fill="currentColor"
      />
    </svg>
  );
}
