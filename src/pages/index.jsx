import React from 'react';
import PropTypes from 'prop-types';

import Head from 'next/head';
import Sticky from 'react-sticky-el';
import absoluteUrl from 'next-absolute-url';

import Theme, { theme } from '@loyalory/themes/src/Startup';
import {
  Navbar,
  Copyright,
  Welcome,
  Services,
  About,
  Team,
  Pricing,
  Blog,
  Contact,
} from '@loyalory/themes/src/Startup/containers';

// import preview from '@loyalory/themes/src/Startup/assets/preview.jpg';

import SEO from '../components/SEO';

const Startup = ({ url }) => (
  <Theme>
    <Head>
      <link href={theme.typography.googleFont} rel="stylesheet" />
      <meta name="theme-color" content={theme.colors.primary} />
      {/* <meta property="og:image" content={`${url}${preview}`} /> */}
    </Head>
    <SEO title="Home" />

    <Sticky style={{ zIndex: 999, position: 'relative' }}>
      <Navbar />
    </Sticky>

    <Welcome name="" />
    <Services name="services" />
    <About name="about" />
    <Team name="team" />
    <Pricing name="pricing" />
    <Blog name="blog" />
    <Contact name="contact" />

    <Copyright />
  </Theme>
);

Startup.propTypes = {
  url: PropTypes.string,
};

export const getServerSideProps = async ({ req }) => ({
  props: {
    url: absoluteUrl(req).origin,
  },
});

export default Startup;
