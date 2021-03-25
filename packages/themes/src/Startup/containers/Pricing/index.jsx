import React from 'react';
import PropTypes from 'prop-types';

import Fade from 'react-reveal/Fade';
import Reveal from 'react-reveal/Reveal';

import Box from '@loyalory/common/src/components/Box';
import Container from '@loyalory/common/src/components/Container';
import Typography from '@loyalory/common/src/components/Typography';
import Card from '@loyalory/common/src/components/Card';
import List from '@loyalory/common/src/components/List';
import Button from '@loyalory/common/src/components/Button';
import Icon from '@loyalory/common/src/components/Icon';

import Plus from '@loyalory/icons/src/monochrome/Plus';

import Img from '@loyalory/common/src/components/Img';
import data from '../../data';
import { CardWrapper } from './styled.components';

import Background from './Background';
import Squares from './Squares';

const Pricing = ({
  WrapperProps,
  ContainerProps,
  CaptionProps,
  TitleProps,
  TextProps,
  CardWrapperProps,
  CardProps,
  CardPriceBadgeProps,
  CardTitleProps,
  CardIconProps,
  CardCurrencyProps,
  CardPriceProps,
  CardPeriodProps,
  CardListProps,
  CardListItemProps,
  CardListItemIconProps,
  CardListItemPrefixProps,
  CardButtonProps,
  sections,
  name,
  prices,
  title,
  text,
}) => (
  <Box {...WrapperProps} name={name}>
    <Background />
    <Container {...ContainerProps}>
      <Box {...CaptionProps}>
        <Fade bottom cascade duration={600}>
          <Typography {...TitleProps}>{title}</Typography>
          <Typography {...TextProps}>{text}</Typography>
        </Fade>
      </Box>

      <Box position="relative">
        <Squares />

        <Reveal effect="cards" duration={600}>
          <CardWrapper {...CardWrapperProps}>
            {prices?.sections?.map((section, i) => (
              <Card key={i} {...CardProps} {...sections[i]?.CardProps}>
                <Typography {...CardTitleProps} {...sections[i]?.CardTitleProps}>
                  {section.title}
                </Typography>
                <Img src={section.icon} {...CardIconProps} {...sections[i]?.CardTitleProps} />
                <Box {...CardPriceBadgeProps} {...sections[i]?.CardPriceBadgeProps}>
                  <Typography {...CardCurrencyProps} {...sections[i]?.CardPriceProps}>
                    {prices.currency}
                  </Typography>
                  <Typography {...CardPriceProps} {...sections[i]?.CardPriceProps}>
                    {section.price.split('.')[0]}
                  </Typography>
                  <Typography {...CardPeriodProps} {...sections[i]?.CardPeriodProps}>
                    {section.price.split('.')[1]}
                    <br />
                    /
                    {section.period}
                  </Typography>
                </Box>

                <List {...CardListProps} {...sections[i]?.CardListProps}>
                  {section.features?.map((feature, key) => (
                    <List.Item key={key} {...CardListItemProps} {...sections[i]?.CardListItemProps}>
                      <Icon
                        icon={Plus}
                        {...CardListItemIconProps}
                        {...sections[i]?.CardListItemIconProps}
                      />
                      <Typography
                        {...CardListItemPrefixProps}
                        {...sections[i]?.CardListItemPrefixProps}
                      >
                        {feature.prefix}
                      </Typography>
                      {' '}
                      {feature.text}
                    </List.Item>
                  ))}
                </List>

                <Button
                  {...CardButtonProps}
                  {...sections[i]?.CardButtonProps}
                  {...section.button.ButtonProps}
                >
                  {section.button.text}
                </Button>
              </Card>
            ))}
          </CardWrapper>
        </Reveal>
      </Box>
    </Container>
  </Box>
);

const CardPropTypes = {
  /**
   * Main card props
   * @See @loyalory/common/src/components/Card
   */
  CardProps: PropTypes.object,
  /**
   * Wrapper of price details
   * @See @loyalory/common/src/components/Box
   */
  CardPriceBadgeProps: PropTypes.object,
  /**
   * Props of title of the card
   * @See @loyalory/common/src/components/Typography
   */
  CardTitleProps: PropTypes.object,
  /**
   * Props of icon of the card
   * @See @loyalory/common/src/components/Img
   */
  CardIconProps: PropTypes.object,
  /**
   * Props of price in the card
   * @See @loyalory/common/src/components/Typography
   */
  CardPriceProps: PropTypes.object,
  /**
   * Props of price currency in the card
   * @See @loyalory/common/src/components/Typography
   */
  CardCurrencyProps: PropTypes.object,
  /**
   * Props of price period in the card
   * @See @loyalory/common/src/components/Typography
   */
  CardPeriodProps: PropTypes.object,
  /**
   * Features list props
   * @See @loyalory/common/src/components/List
   */
  CardListProps: PropTypes.object,
  /**
   * Features list single item props
   * @See @loyalory/common/src/components/List
   */
  CardListItemProps: PropTypes.object,
  /**
   * Style of icon in items
   * @See @loyalory/common/src/components/Icon
   */
  CardListItemIconProps: PropTypes.object,
  /**
   * Style of prefix in items
   * @See @loyalory/common/src/components/Typography
   */
  CardListItemPrefixProps: PropTypes.object,
  /**
   * Card button props
   * @See @loyalory/common/src/components/Button
   */
  CardButtonProps: PropTypes.object,
};

Pricing.propTypes = {
  /**
   * Name of container, can be used for anchors
   */
  name: PropTypes.string.isRequired,
  /**
   * Price table related data
   */
  prices: PropTypes.shape({
    /**
     * Currency sign
     */
    currency: PropTypes.node,
    /**
     * Sections of price list
     */
    sections: PropTypes.arrayOf(
      PropTypes.shape({
        /**
         * Title of section
         */
        title: PropTypes.node,
        /**
         * Prices divided into types
         */
        price: PropTypes.node,
        /**
         * Period of given price
         */
        period: PropTypes.node,
        /**
         * Features list
         */
        features: PropTypes.arrayOf(
          PropTypes.shape({
            text: PropTypes.node,
            prefix: PropTypes.node,
          }),
        ),
        /**
         * Button below features
         */
        button: PropTypes.shape({
          text: PropTypes.node,
          ButtonProps: PropTypes.object,
        }),
      }),
    ),
  }),
  /**
   * Wrapper props
   * @See @loyalory/common/src/components/Box
   */
  WrapperProps: PropTypes.object,
  /**
   * Container props
   * @See @loyalory/common/src/components/Container
   */
  ContainerProps: PropTypes.object,
  /**
   * Caption props
   * @See @loyalory/common/src/components/Box
   */
  CaptionProps: PropTypes.object,
  /**
   * Title text props
   * @See @loyalory/common/src/components/Typography
   */
  TitleProps: PropTypes.object,
  /**
   * Main text props
   * @See @loyalory/common/src/components/Typography
   */
  TextProps: PropTypes.object,
  /**
   * Price table cards wrapper props. It's needed to use both container and wrapper because of animations
   * @See @loyalory/common/src/components/Box
   */
  CardWrapperProps: PropTypes.object,
  ...CardPropTypes,
  /**
   * Props defined per every card
   */
  sections: PropTypes.arrayOf(PropTypes.shape(CardPropTypes)),
  /**
   * Title node of component
   */
  title: PropTypes.node,
  /**
   * Main description
   */
  text: PropTypes.node,
};

Pricing.defaultProps = {
  WrapperProps: {
    overflow: 'hidden',
    position: 'relative',
    py: {
      _: 56,
      md: 64,
      lg: 96,
    },
  },
  ContainerProps: {
    position: 'relative',
  },
  TitleProps: {
    mb: 5,
    textAlign: 'center',
    variant: 'h2',
    as: 'h2',
    color: 'black',
  },
  CardWrapperProps: {
    position: 'relative',
    xIndex: 1,
    mx: 'auto',
    gridTemplateColumns: {
      _: '1fr',
      lg: 'repeat(3, 1fr)',
    },
    gridGap: '30px',
  },
  CardProps: {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '64px',
    py: 48,
    px: 32,
  },
  CardTitleProps: {
    textAlign: 'center',
    as: 'h4',
    variant: 'h3',
    mb: 48,
  },
  CardIconProps: {
    display: 'block',
    mx: 'auto',
    mb: 60,
  },
  CardPriceBadgeProps: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  CardCurrencyProps: {
    variant: 'h2',
  },
  CardPriceProps: {
    fontSize: 96,
    lineHeight: 1,
    fontWeight: 'bold',
  },
  CardPeriodProps: {
    variant: 'h2',
  },
  CardListProps: {
    mt: 40,
  },
  CardListItemProps: {
    py: 16,
    borderBottomWidth: '1px',
    borderBottomColor: 'gray.5',
    borderBottomStyle: 'solid',
  },
  CardListItemIconProps: {
    fontSize: 24,
    mb: '-6px',
    mr: 3,
  },
  CardListItemPrefixProps: {
    fontWeight: 'bold',
    as: 'span',
  },
  CardButtonProps: {
    mt: 30,
    alignSelf: 'center',
    textAlign: 'center',
  },
  sections: [
    {
      CardTitleProps: {
        color: 'primary',
      },
      CardPriceBadgeProps: {
        color: 'primary',
      },
      CardButtonProps: {
        variant: 'primary',
      },
      CardListItemIconProps: {
        color: 'shades.primary.3',
      },
    },
    {
      CardTitleProps: {
        color: 'secondary',
      },
      CardPriceBadgeProps: {
        color: 'secondary',
      },
      CardButtonProps: {
        variant: 'secondary',
      },
      CardListItemIconProps: {
        color: 'shades.secondary.3',
      },
    },
    {
      CardTitleProps: {
        color: 'accent',
      },
      CardPriceBadgeProps: {
        color: 'accent',
      },
      CardButtonProps: {
        variant: 'accent',
      },
      CardListItemIconProps: {
        color: 'shades.accent.3',
      },
    },
  ],
  ...data.pricing,
};

export default Pricing;
