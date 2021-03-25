import React from 'react';

export default function Cube(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" width={24} height={24} {...props}>
      <polygon className="uim-primary" points="12 12.3 3.5 7.05 12 1.8 20.5 7.05" />
      <polygon className="uim-quaternary" points="12 22.2 12 12.3 20.5 7.05 20.5 16.95" />
      <polygon className="uim-tertiary" points="12 22.2 3.5 16.95 3.5 7.05 12 12.3" />
    </svg>
  );
}
