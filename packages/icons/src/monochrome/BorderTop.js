import React from 'react';

export default function BorderTop(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} {...props}>
      <path className="uim-primary" d="M20,4.5H4a1,1,0,0,1,0-2H20a1,1,0,0,1,0,2Z" />
      <circle cx={12} cy="7.5" r={1} className="uim-tertiary" />
      <circle cx={12} cy="11.5" r={1} className="uim-tertiary" />
      <circle cx={12} cy="15.5" r={1} className="uim-tertiary" />
      <circle cx={12} cy="19.5" r={1} className="uim-tertiary" />
      <circle cx={20} cy="7.5" r={1} className="uim-tertiary" />
      <circle cx={20} cy="11.5" r={1} className="uim-tertiary" />
      <circle cx={20} cy="15.5" r={1} className="uim-tertiary" />
      <circle cx={20} cy="19.5" r={1} className="uim-tertiary" />
      <circle cx={16} cy="19.5" r={1} className="uim-tertiary" />
      <circle cx={8} cy="19.5" r={1} className="uim-tertiary" />
      <circle cx={16} cy="11.5" r={1} className="uim-tertiary" />
      <circle cx={8} cy="11.5" r={1} className="uim-tertiary" />
      <circle cx={4} cy="7.5" r={1} className="uim-tertiary" />
      <circle cx={4} cy="11.5" r={1} className="uim-tertiary" />
      <circle cx={4} cy="15.5" r={1} className="uim-tertiary" />
      <circle cx={4} cy="19.5" r={1} className="uim-tertiary" />
    </svg>
  );
}
