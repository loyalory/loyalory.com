import React from 'react';

export default function Circle(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} {...props}>
      <circle cx={12} cy={12} r={10} className="uim-primary" />
    </svg>
  );
}
