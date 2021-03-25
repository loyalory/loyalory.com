import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import Carousel, { Modal, ModalGateway } from 'react-images';

const Gallery = ({ images, renderItem }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleClose = useCallback(() => setIsOpen(false), [setIsOpen]);
  const handleItemClick = useCallback(
    index => {
      setCurrentIndex(index);
      setIsOpen(true);
    },
    [setCurrentIndex, setIsOpen],
  );

  return (
    <>
      {images.map((item, i) => renderItem(item, i, () => handleItemClick(i)))}
      {isOpen && (
        <ModalGateway>
          <Modal onClose={handleClose}>
            <Carousel currentIndex={currentIndex} views={images} />
          </Modal>
        </ModalGateway>
      )}
    </>
  );
};

Gallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      source: PropTypes.string.isRequired,
    }),
  ).isRequired,
  renderItem: PropTypes.func.isRequired,
};

export default Gallery;
