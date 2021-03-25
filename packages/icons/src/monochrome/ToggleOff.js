import React from 'react';

export default function ToggleOff(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" width={24} height={24} {...props}>
      <path className="uim-tertiary" d="M16.5,17.5h-9C4.46243,17.5,2,15.03757,2,12s2.46243-5.5,5.5-5.5h9c3.03757,0,5.5,2.46243,5.5,5.5S19.53757,17.5,16.5,17.5z" />
      <circle cx="7.5" cy={12} r="2.5" className="uim-primary" />
    </svg>
  );
}
