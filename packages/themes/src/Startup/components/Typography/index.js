import { css } from 'styled-components';
import { body } from '../../styles';

export default {
  main: css`
    font-family: ${body.fontFamily};
    font-size: ${body.fontSize}px;
    font-weight: 400;
    line-height: ${body.lineHeight};

    label& {
      cursor: pointer;
      user-select: none;
    }

    a& {
      text-decoration: none;
    }
  `,
  variants: {
    h1: {
      fontSize: 40,
      fontWeight: 'bold',
      lineHeight: 1.15,
    },
    h2: {
      fontSize: 30,
      fontWeight: 'bold',
      lineHeight: 1.3,
    },
    h3: {
      fontSize: 24,
      fontWeight: 'bold',
      lineHeight: 1.4,
    },
    h4: {
      fontSize: 20,
      fontWeight: 'bold',
      lineHeight: 1.6,
    },
    h5: {
      fontSize: 16,
      fontWeight: 'bold',
      lineHeight: 1.7,
    },
    h6: {
      fontSize: 14,
      fontWeight: 'bold',
      lineHeight: 1.7,
    },
    body1: {
      fontSize: 20,
      lineHeight: 1.6,
    },
    body2: {
      fontSize: 16,
      lineHeight: 1.7,
    },
    body: {
      fontSize: 14,
      lineHeight: 1.7,
    },
    quote1: {
      fontSize: 24,
      lineHeight: 1.4,
      fontWeight: 300,
      fontStyle: 'italic',
    },
    quote2: {
      fontSize: 18,
      lineHeight: 1.6,
      fontStyle: 'italic',
    },
    button1: {
      fontSize: 20,
      lineHeight: 1.3,
      fontWeight: 'bold',
    },
    button2: {
      fontSize: 16,
      lineHeight: 1.6,
      fontWeight: 'bold',
    },
    button: {
      fontSize: 14,
      lineHeight: 1.7,
      fontWeight: 'bold',
    },
  },
};
