import React from 'react';

export default function Dialpad(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} {...props}>
      <circle cx={12} cy={9} r={2} className="uim-tertiary" />
      <circle cx={12} cy={3} r={2} className="uim-tertiary" />
      <circle cx={12} cy={15} r={2} className="uim-tertiary" />
      <circle cx={6} cy={9} r={2} className="uim-tertiary" />
      <circle cx={6} cy={3} r={2} className="uim-tertiary" />
      <circle cx={6} cy={15} r={2} className="uim-tertiary" />
      <circle cx={18} cy={9} r={2} className="uim-tertiary" />
      <circle cx={18} cy={3} r={2} className="uim-tertiary" />
      <circle cx={18} cy={15} r={2} className="uim-tertiary" />
      <circle cx={12} cy={21} r={2} className="uim-tertiary" />
    </svg>
  );
}
