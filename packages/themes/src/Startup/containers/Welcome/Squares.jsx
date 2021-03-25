import React from 'react';
import Fade from 'react-reveal/Fade';

import Square from '../../components/Squares/Square';
import SquareBlur from '../../components/Squares/SquareBlur';

const Squares = () => (
  <Fade bottom cascade duration={300}>
    <Square
      color="accent"
      zIndex={2}
      right={-40}
      top={-49}
      width={80}
      height={80}
      position="absolute"
    />
    <Square
      color="accent"
      zIndex={2}
      left={-38}
      top={124}
      width={62}
      height={62}
      position="absolute"
    />
    <Square
      color="secondary"
      zIndex={2}
      right={148}
      bottom={-24}
      width={48}
      height={48}
      position="absolute"
    />
    <SquareBlur
      color="accent"
      zIndex={-1}
      left={-105}
      bottom={60}
      width={75}
      height={75}
      position="absolute"
    />
    <SquareBlur
      color="accent"
      zIndex={-1}
      left={120}
      top={-57}
      width={80}
      height={80}
      position="absolute"
    />
    <SquareBlur
      color="secondary"
      zIndex={-1}
      right={-106}
      bottom={113}
      width={130}
      height={130}
      position="absolute"
    />
  </Fade>
);

export default Squares;
