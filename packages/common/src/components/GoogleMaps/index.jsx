import React from 'react';
import PropTypes from 'prop-types';

import { GoogleMap, LoadScript } from '@react-google-maps/api';

const GoogleMaps = ({ children, ...props }) => (
  <LoadScript googleMapsApiKey={process.env.GOOGLE_MAPS_KEY || process.env.GATSBY_GOOGLE_MAPS_KEY}>
    <GoogleMap {...props}>{children}</GoogleMap>
  </LoadScript>
);

GoogleMaps.propTypes = {
  children: PropTypes.node,
};

export default GoogleMaps;
