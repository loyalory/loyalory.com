import React from 'react';

export default function SqureShape(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} {...props}>
      <rect width={20} height={20} x={2} y={2} className="uim-primary" rx={5} />
    </svg>
  );
}
