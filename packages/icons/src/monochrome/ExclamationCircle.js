import React from 'react';

export default function ExclamationCircle(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} {...props}>
      <circle cx={12} cy={12} r={10} className="uim-tertiary" />
      <circle cx={12} cy={16} r={1} className="uim-primary" />
      <path className="uim-primary" d="M12,13a1,1,0,0,1-1-1V8a1,1,0,0,1,2,0v4A1,1,0,0,1,12,13Z" />
    </svg>
  );
}
