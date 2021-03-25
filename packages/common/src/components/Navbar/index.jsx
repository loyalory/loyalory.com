import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { useIsomorphicLayoutEffect } from 'react-use';

/**
 * Navbar is advanced component which allows using different navs for desktop
 * and mobile versions which is rendered using portals.
 */
const Navbar = ({ children, rwdMenu }) => {
  const [mobileIsOpen, setMobileIsOpen] = useState(false);
  const ref = useRef();
  const [mounted, setMounted] = useState(false);

  const handleToggle = () => setMobileIsOpen(s => !s);
  const handleClose = () => setMobileIsOpen(false);

  useEffect(() => {
    // eslint-disable-next-line no-undef
    ref.current = document.querySelector('#portal');
    setMounted(true);
  }, []);

  useIsomorphicLayoutEffect(() => {
    if (typeof document !== 'undefined') {
      if (mobileIsOpen) {
        // eslint-disable-next-line no-undef
        document.querySelector('body').style.overflow = 'hidden';
      } else {
        // eslint-disable-next-line no-undef
        document.querySelector('body').style.overflow = '';
      }
    }
  }, [mobileIsOpen]);

  return (
    <>
      {children({
        isOpen: mobileIsOpen,
        onToggle: handleToggle,
        onClose: handleClose,
      })}
      {mounted &&
        ref.current &&
        ReactDOM.createPortal(
          rwdMenu({
            isOpen: mobileIsOpen,
            onToggle: handleToggle,
            onClose: handleClose,
          }),
          ref.current,
        )}
    </>
  );
};

Navbar.propTypes = {
  /**
   * Children of desktop navbar
   */
  children: PropTypes.func.isRequired,
  /**
   * Function which render rwdMenu with arguments isOpen, onToggle and onClose
   */
  rwdMenu: PropTypes.func.isRequired,
};

export default Navbar;
