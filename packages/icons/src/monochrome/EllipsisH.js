import React from 'react';

export default function EllipsisH(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} {...props}>
      <circle cx={12} cy={12} r={2} className="uim-primary" />
      <circle cx={5} cy={12} r={2} className="uim-primary" />
      <circle cx={19} cy={12} r={2} className="uim-primary" />
    </svg>
  );
}
