import React from 'react';
import Fade from 'react-reveal/Fade';

import SquareBlur from '../../components/Squares/SquareBlur';
import Square from '../../components/Squares/Square';

const Squares = () => (
  <>
    <Fade bottom cascade duration={300}>
      <SquareBlur
        color="accent"
        zIndex={-1}
        right={-48}
        top={42}
        width={71}
        height={71}
        position="absolute"
      />
      <SquareBlur
        color="accent"
        zIndex={-1}
        left={-87}
        bottom={54}
        width={45}
        height={45}
        position="absolute"
      />
      <SquareBlur
        color="secondary"
        zIndex={-1}
        left={182}
        bottom={-94}
        width={130}
        height={130}
        position="absolute"
      />
    </Fade>
    <Fade bottom cascade duration={300} delay={100}>
      <Square
        color="accent"
        zIndex={2}
        left={108}
        top={{
          _: -10,
          md: -73,
        }}
        width={42}
        height={42}
        position="absolute"
      />
      <Square
        color="accent"
        zIndex={2}
        left={-25}
        bottom={-29}
        width={65}
        height={65}
        position="absolute"
      />
      <Square
        color="accent"
        zIndex={2}
        right={-48}
        bottom={36}
        width={80}
        height={80}
        position="absolute"
      />
      <Square
        color="secondary"
        zIndex={2}
        right={-55}
        top={205}
        width={33}
        height={33}
        position="absolute"
      />
      <Square
        color="secondary"
        zIndex={2}
        left={-59}
        top={33}
        width={89}
        height={89}
        position="absolute"
      />
    </Fade>
  </>
);

export default Squares;
