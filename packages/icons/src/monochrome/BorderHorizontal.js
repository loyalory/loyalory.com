import React from 'react';

export default function BorderHorizontal(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} {...props}>
      <path className="uim-primary" d="M20,13H4a1,1,0,0,1,0-2H20a1,1,0,0,1,0,2Z" />
      <circle cx={12} cy={16} r={1} className="uim-tertiary" />
      <circle cx={12} cy={20} r={1} className="uim-tertiary" />
      <circle cx={12} cy={8} r={1} className="uim-tertiary" />
      <circle cx={12} cy={4} r={1} className="uim-tertiary" />
      <circle cx={4} cy={16} r={1} className="uim-tertiary" />
      <circle cx={4} cy={20} r={1} className="uim-tertiary" />
      <circle cx={4} cy={8} r={1} className="uim-tertiary" />
      <circle cx={4} cy={4} r={1} className="uim-tertiary" />
      <circle cx={8} cy={4} r={1} className="uim-tertiary" />
      <circle cx={16} cy={4} r={1} className="uim-tertiary" />
      <circle cx={8} cy={20} r={1} className="uim-tertiary" />
      <circle cx={16} cy={20} r={1} className="uim-tertiary" />
      <circle cx={20} cy={16} r={1} className="uim-tertiary" />
      <circle cx={20} cy={20} r={1} className="uim-tertiary" />
      <circle cx={20} cy={8} r={1} className="uim-tertiary" />
      <circle cx={20} cy={4} r={1} className="uim-tertiary" />
    </svg>
  );
}
