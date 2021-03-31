import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import { Link as RSLink } from 'react-scroll';
import { smoothLinkProps } from '@loyalory/common/src/utils';

import Container from '@loyalory/common/src/components/Container';
import Box from '@loyalory/common/src/components/Box';
import List from '@loyalory/common/src/components/List';
import Button from '@loyalory/common/src/components/Button';
import NavbarWrapper from '@loyalory/common/src/components/Navbar';

import LanderPagerLogo from '../../components/Logo';

import data from '../../data';
import { LogoWrapper, MobileWrapper, NavbarLink, ToggleButton, Wrapper } from './styled.components';
import { zIndex } from '../../styles';

const Navbar = ({
  WrapperProps,
  ContainerProps,
  MenuItemsListProps,
  LogoProps,
  LinksWrapperProps,
  LinkProps,
  ActionsWrapperProps,
  ActionProps,
  ToggleButtonProps,
  MobileMenuProps,
  MobileMenuToggleProps,
  Logo,
  links,
  actions,
}) => {
  const menu = onClick => (
    <>
      {links && (
        <List {...LinksWrapperProps}>
          {links.map(({ label, ...link }, i) => (
            <List.Item key={i}>
              <NavbarLink {...LinkProps} onClick={onClick} {...link}>
                {label}
              </NavbarLink>
            </List.Item>
          ))}
        </List>
      )}
      {actions && (
        <Box {...ActionsWrapperProps}>
          {actions.map(({ label, ...link }, i) => (
            <Link {...link} key={i}>
              <Button {...ActionProps}>
                {label}
              </Button>
            </Link>
          ))}
        </Box>
      )}
    </>
  );

  return (
    <NavbarWrapper
      rwdMenu={({ onToggle, isOpen, onClose }) => (
        <MobileWrapper isActive={isOpen} {...MobileMenuProps}>
          <ToggleButton isActive={isOpen} toggleButton={onToggle} {...MobileMenuToggleProps} />
          {menu(onClose)}
        </MobileWrapper>
      )}
    >
      {({ onToggle, isOpen, onClose }) => (
        <Wrapper {...WrapperProps}>
          <Container {...ContainerProps}>
            <Box flexBox alignItems="center">
              {Logo && (
                <Link href="/">
                  <LogoWrapper {...LogoProps}>
                    <Logo />
                  </LogoWrapper>
                </Link>
              )}
              <Box {...MenuItemsListProps}>{menu(onClose)}</Box>
              <ToggleButton isActive={isOpen} toggleButton={onToggle} {...ToggleButtonProps} />
            </Box>
          </Container>
        </Wrapper>
      )}
    </NavbarWrapper>
  );
};

Navbar.propTypes = {
  /**
   * Main wrapper props
   * @See @loyalory/common/src/components/Box
   */
  WrapperProps: PropTypes.object,
  /**
   * Navbar container props
   * @See @loyalory/common/src/components/Container
   */
  ContainerProps: PropTypes.object,
  /**
   * Props of menu container
   * @See @loyalory/common/src/components/Box
   */
  MenuItemsListProps: PropTypes.object,
  /**
   * Main wrapper props
   * @See @loyalory/common/src/components/Box
   */
  LinksWrapperProps: PropTypes.object,
  /**
   * Single link props
   */
  LinkProps: PropTypes.object,
  /**
   * Logo element props
   */
  LogoProps: PropTypes.object,
  /**
   * Additional buttons wrapper props
   */
  ActionsWrapperProps: PropTypes.object,
  /**
   * Additional button props
   */
  ActionProps: PropTypes.object,
  /**
   * Toggle RWD menu props
   */
  ToggleButtonProps: PropTypes.object,
  /**
   * Props of mobile menu wrapper
   */
  MobileMenuProps: PropTypes.object,
  /**
   * Props of mobile menu toggle
   */
  MobileMenuToggleProps: PropTypes.object,
  /**
   * Logo element
   */
  Logo: PropTypes.elementType,
  /**
   * List of links
   */
  links: PropTypes.arrayOf(
    PropTypes.shape({
      as: PropTypes.elementType,
      to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
      label: PropTypes.node.isRequired,
    }),
  ),
  /**
   * List of action buttons
   */
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      as: PropTypes.elementType,
      to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
      label: PropTypes.node.isRequired,
    }),
  ),
};

Navbar.defaultProps = {
  WrapperProps: {
    stickyBgColor: 'gray.7',
  },
  ContainerProps: {
    py: 3,
  },
  MenuItemsListProps: {
    display: {
      _: 'none',
      lg: 'flex',
    },
    alignItems: 'center',
    width: '100%',
  },
  LogoProps: {
    as: RSLink,
    to: '',
    ...smoothLinkProps,
    mx: {
      _: 'auto',
      md: '0',
    },
  },
  LinksWrapperProps: {
    display: 'flex',
    flexDirection: {
      _: 'column',
      lg: 'row',
    },
    alignItems: 'center',
    mx: 'auto',
  },
  LinkProps: {
    mx: {
      _: 0,
      lg: 3,
    },
    my: {
      _: 3,
      lg: 0,
    },
    as: RSLink,
    activeColor: 'secondary',
    ...smoothLinkProps,
  },
  ActionsWrapperProps: {
    mt: {
      _: 2,
      lg: 0,
    },
    ml: {
      _: 0,
      lg: 'auto',
    },
  },
  ActionProps: {
    variant: 'accent',
  },
  ToggleButtonProps: {
    buttonWidth: 24,
    position: 'absolute',
    right: 3,
    color: 'gray.0',
    display: {
      lg: 'none',
    },
  },
  MobileMenuProps: {
    display: {
      _: 'flex',
      lg: 'none',
    },
    position: 'fixed',
    backgroundColor: 'gray.7',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    zIndex: zIndex.menuNav,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  MobileMenuToggleProps: {
    buttonWidth: 24,
    color: 'primary',
    position: 'absolute',
    right: 3,
    top: 3,
  },
  Logo: LanderPagerLogo,
  links: data.navbar.links,
  actions: data.navbar.actions,
};

export default Navbar;
