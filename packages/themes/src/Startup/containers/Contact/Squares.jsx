import React from 'react';
import Fade from 'react-reveal/Fade';

import SquareBlur from '../../components/Squares/SquareBlur';
import Square from '../../components/Squares/Square';

const Squares = () => (
  <>
    <Fade bottom cascade duration={300}>
      <Square
        color="secondary"
        zIndex={-1}
        right={-81}
        top={-56}
        width={150}
        height={150}
        position="absolute"
      />
      <Square
        color="accent"
        zIndex={-1}
        right={-143}
        top={215}
        width={96}
        height={96}
        position="absolute"
      />
      <Square
        color="accent"
        zIndex={-1}
        left={-52}
        bottom={8}
        width={72}
        height={72}
        position="absolute"
      />
      <Square
        color="secondary"
        zIndex={-1}
        left={-96}
        top={283}
        width={43}
        height={43}
        position="absolute"
      />
      <Square
        color="accent"
        zIndex={-1}
        left={-96}
        top={30}
        width={64}
        height={64}
        position="absolute"
      />
      <SquareBlur
        color="secondary"
        zIndex={-1}
        left={-182}
        bottom={102}
        width={150}
        height={150}
        position="absolute"
      />
      <SquareBlur
        color="accent"
        zIndex={-1}
        left={64}
        bottom={-104}
        width={95}
        height={95}
        position="absolute"
      />
      <SquareBlur
        color="secondary"
        zIndex={-1}
        right={-106}
        bottom={-43}
        width={186}
        height={186}
        position="absolute"
      />
    </Fade>
  </>
);

export default Squares;
