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
        left={272}
        top={-43}
        width={99}
        height={99}
        position="absolute"
      />
      <Square
        color="accent"
        zIndex={-1}
        left={674}
        top={-19}
        width={72}
        height={72}
        position="absolute"
      />
      <Square
        color="secondary"
        zIndex={-1}
        left={-132}
        top={289}
        width={36}
        height={36}
        position="absolute"
      />
      <Square
        color="accent"
        zIndex={-1}
        left={-124}
        bottom={234}
        width={88}
        height={88}
        position="absolute"
      />
      <Square
        color="secondary"
        zIndex={-1}
        right={-117}
        top={237}
        width={99}
        height={99}
        position="absolute"
      />
      <Square
        color="accent"
        zIndex={-1}
        right={-79}
        bottom={59}
        width={72}
        height={72}
        position="absolute"
      />
      <SquareBlur
        color="accent"
        zIndex={-1}
        left={-125}
        top={126}
        width={79}
        height={79}
        position="absolute"
      />
      <SquareBlur
        color="accent"
        zIndex={-1}
        right={-150}
        bottom={135}
        width={50}
        height={50}
        position="absolute"
      />
    </Fade>
  </>
);

export default Squares;
