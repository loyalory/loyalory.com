import React from 'react';

export default function Grids(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} {...props}>
      <path className="uim-tertiary" d="M23,21V3a.99974.99974,0,0,0-1-1H17V22h5A.99974.99974,0,0,0,23,21Z" />
      <path className="uim-primary" d="M1,3V21a.99974.99974,0,0,0,1,1H7V2H2A.99974.99974,0,0,0,1,3Z" />
      <rect width={6} height={20} x={9} y={2} className="uim-tertiary" />
      <rect width={2} height={20} x={7} y={2} className="uim-quaternary" />
      <rect width={2} height={20} x={15} y={2} className="uim-quaternary" />
    </svg>
  );
}
