import React from 'react';

export default function ClockTen(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} {...props}>
      <circle cx={12} cy={12} r={10} className="uim-tertiary" />
      <path className="uim-primary" d="M13,7a1,1,0,0,0-2,0v3.26764L9.90234,9.63379a1.00016,1.00016,0,0,0-1,1.73242l2.59766,1.5A1.01383,1.01383,0,0,0,13,12Z" />
    </svg>
  );
}
