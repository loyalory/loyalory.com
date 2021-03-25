import React from 'react';
import PropTypes from 'prop-types';

import Box from '@loyalory/common/src/components/Box';
import Container from '@loyalory/common/src/components/Container';
import Typography from '@loyalory/common/src/components/Typography';

import List from '@loyalory/common/src/components/List';

import data from '../../data';

const Copyright = ({
  copyright,
  links,
  WrapperProps,
  ContainerProps,
  TextProps,
  LinkListProps,
  LinkListItemProps,
  LinkProps,
}) => (
  <Box {...WrapperProps}>
    <Container {...ContainerProps}>
      <Typography {...TextProps}>{copyright}</Typography>
      {links && (
        <List {...LinkListProps}>
          {links.map(({ label, ...link }, key) => (
            <List.Item {...LinkListItemProps} key={key}>
              <Typography {...LinkProps} {...link}>
                {label}
              </Typography>
            </List.Item>
          ))}
        </List>
      )}
    </Container>
  </Box>
);

Copyright.propTypes = {
  /**
   * Main content
   */
  copyright: PropTypes.node,
  /**
   * Links in footer
   */
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.node,
    }),
  ),
  /**
   * Main content text props
   * @See @loyalory/common/src/components/Typography
   */
  TextProps: PropTypes.object,
  /**
   * Main wrapper props
   * @See @loyalory/common/src/components/Box
   */
  WrapperProps: PropTypes.object,
  /**
   * Container props
   * @See @loyalory/common/src/components/Container
   */
  ContainerProps: PropTypes.object,
  /**
   * Props of links items
   * @See @loyalory/common/src/components/List
   */
  LinkListProps: PropTypes.object,
  /**
   * Props of links list single item
   * @See @loyalory/common/src/components/List.Item
   */
  LinkListItemProps: PropTypes.object,
  /**
   * Link component props
   * @See @loyalory/common/src/components/Typography
   */
  LinkProps: PropTypes.object,
};

Copyright.defaultProps = {
  ...data.footer,
  copyright: data.copyright,
  TextProps: {
    variant: 'body2',
    color: 'gray.3',
  },
  WrapperProps: {
    py: 18,
    borderTopWidth: 1,
    borderTopStyle: 'solid',
    borderTopColor: 'gray.5',
  },
  ContainerProps: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: {
      _: 'column',
      md: 'row',
    },
  },
  LinkListProps: {
    display: 'flex',
  },
  LinkListItemProps: {
    mx: 3,
  },
  LinkProps: {
    as: 'a',
    variant: 'body2',
    color: 'gray.3',
  },
};

export default Copyright;
