import React from 'react';
import PropTypes from 'prop-types';

import Fade from 'react-reveal/Fade';

import Box from '@loyalory/common/src/components/Box';
import Typography from '@loyalory/common/src/components/Typography';
import Container from '@loyalory/common/src/components/Container';
import Icon from '@loyalory/common/src/components/Icon';
import Link from '@loyalory/common/src/components/Link';

import Card from '@loyalory/common/src/components/Card';
import { Form, Formik } from 'formik';
import Input from '@loyalory/common/src/components/Formik/Input';
import Button from '@loyalory/common/src/components/Button';
import data from '../../data';
import Background from './Background';
import Squares from './Squares';

const Contact = ({
  name,
  title,
  sections,
  socialLinks,
  mailer,
  WrapperProps,
  ContainerProps,
  DetailsWrapperProps,
  TitleProps,
  SectionItemProps,
  SectionIconProps,
  SectionTextProps,
  SocialLinkWrapperProps,
  SocialLinkProps,
  MailerCardProps,
  MailerTitleProps,
  MailerButtonProps,
}) => (
  <Box name={name} {...WrapperProps}>
    <Background />
    <Container {...ContainerProps}>
      <Box {...DetailsWrapperProps}>
        <Fade bottom cascade duration={600}>
          <Typography {...TitleProps}>{title}</Typography>
          {sections.map((section, key) => (
            <Box key={key} {...SectionItemProps}>
              <Icon
                color={['primary', 'secondary', 'accent'][key % 3]}
                icon={section.icon}
                {...SectionIconProps}
              />
              <Typography {...SectionTextProps}>{section.text}</Typography>
            </Box>
          ))}
          <Box {...SocialLinkWrapperProps}>
            {socialLinks?.map((socialLink, key) => (
              <Fade left duration={600} key={socialLink.title} distance="10px" delay={100 * key}>
                <Link as="a" href={socialLink.href} title={socialLink.title} {...SocialLinkProps}>
                  <Icon icon={socialLink.icon} />
                </Link>
              </Fade>
            ))}
          </Box>
        </Fade>
      </Box>
      <Card {...MailerCardProps}>
        <Squares />
        <Typography {...MailerTitleProps}>{mailer.title}</Typography>

        <Formik
          validationSchema={mailer.validationSchema}
          onSubmit={mailer.onSubmit}
          initialValues={mailer.fields.reduce(
            (acc, field) => ({
              ...acc,
              [field.name]: field.initialValue,
            }),
            {},
          )}
        >
          <Form>
            <Fade cascade bottom duration={600}>
              <div>
                {mailer.fields.map(field => (
                  <Input key={field.name} {...field} />
                ))}
              </div>
              <Button type="submit" {...MailerButtonProps}>
                {mailer.cta}
              </Button>
            </Fade>
          </Form>
        </Formik>
      </Card>
    </Container>
  </Box>
);

Contact.propTypes = {
  /**
   * Name of container, can be used for anchors
   */
  name: PropTypes.string.isRequired,
  /**
   * Wrapper props
   * @See @loyalory/common/src/components/Box
   */
  WrapperProps: PropTypes.object,
  /**
   * Component container props
   * @See @loyalory/common/src/components/Container
   */
  ContainerProps: PropTypes.object,
  /**
   * Caption props
   * @See @loyalory/common/src/components/Box
   */
  DetailsWrapperProps: PropTypes.object,
  /**
   * Title text props
   * @See @loyalory/common/src/components/Typography
   */
  TitleProps: PropTypes.object,
  /**
   * Props of section item wrapper
   * @See @loyalory/common/src/components/Box
   */
  SectionItemProps: PropTypes.object,
  /**
   * Props of section icon wrapper
   * @See @loyalory/common/src/components/Icon
   */
  SectionIconProps: PropTypes.object,
  /**
   * Props of section text wrapper
   * @See @loyalory/common/src/components/Typography
   */
  SectionTextProps: PropTypes.object,
  /**
   * Wrapper for social link buttons
   * @See @loyalory/common/src/components/Box
   */
  SocialLinkWrapperProps: PropTypes.object,
  /**
   * Social link item
   * @See @loyalory/common/src/components/Link
   */
  SocialLinkProps: PropTypes.object,
  /**
   * Props of mailer card
   * @See @loyalory/common/src/components/Card
   */
  MailerCardProps: PropTypes.object,
  /**
   * Props of mailer title
   * @See @loyalory/common/src/components/Typography
   */
  MailerTitleProps: PropTypes.object,
  /**
   * Props of mailer button
   * @See @loyalory/common/src/components/Button
   */
  MailerButtonProps: PropTypes.object,
  /**
   * Title node of component
   */
  title: PropTypes.node,
  /**
   * Sections with contact details
   */
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.elementType,
      text: PropTypes.node,
    }),
  ),
  /**
   * Social media links
   */
  socialLinks: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.elementType,
      href: PropTypes.string,
      title: PropTypes.string,
    }),
  ),
  /**
   * Mailer details
   */
  mailer: PropTypes.shape({
    /**
     * Title of mailer
     */
    title: PropTypes.node,
    /**
     * Send button content
     */
    cta: PropTypes.node,
    /**
     * Formik validation schema
     * @see https://jaredpalmer.com/formik/docs/guides/validation
     */
    validationSchema: PropTypes.object,
    /**
     * Form submit function
     */
    onSubmit: PropTypes.func,
    /**
     * List of fields
     */
    fields: PropTypes.arrayOf(
      PropTypes.shape({
        /**
         * Name of field
         */
        name: PropTypes.string.isRequired,
        /**
         * Type of field
         */
        type: PropTypes.string,
        /**
         * Placeholder for field
         */
        placeholder: PropTypes.string,
        /**
         * Initial value used in formik
         */
        initialValue: PropTypes.string,
      }),
    ),
  }),
};

Contact.defaultProps = {
  WrapperProps: {
    overflow: 'hidden',
    position: 'relative',
    pt: {
      _: 56,
      md: 64,
      lg: 96,
    },
    pb: {
      _: 56,
      md: 64,
      lg: 120,
    },
  },
  ContainerProps: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: {
      _: 'center',
      lg: 'flex-start',
    },
    flexDirection: {
      _: 'column',
      lg: 'row',
    },
  },
  DetailsWrapperProps: {
    textAlign: {
      _: 'center',
      lg: 'left',
    },
    mt: {
      _: 0,
      lg: 5,
    },
    mb: {
      _: 4,
      md: 5,
      lg: 0,
    },
  },
  TitleProps: {
    as: 'h2',
    variant: 'h2',
    color: 'black',
    mb: {
      _: 4,
      lg: 5,
    },
  },
  SectionItemProps: {
    mb: 3,
    flexBox: true,
    justifyContent: {
      _: 'center',
      lg: 'flex-start',
    },
  },
  SectionIconProps: {
    fontSize: 24,
    mr: 2,
  },
  SectionTextProps: {
    color: 'gray.1',
  },
  SocialLinkWrapperProps: {
    flexBox: true,
    mt: {
      _: 4,
      lg: 5,
    },
    justifyContent: {
      _: 'center',
      lg: 'flex-start',
    },
  },
  SocialLinkProps: {
    color: 'gray.4',
    mr: 3,
    fontSize: 48,
    lineHeight: 1,
  },
  MailerCardProps: {
    bg: 'primary',
    width: '100%',
    maxWidth: 544,
    p: {
      _: 24,
      md: 5,
    },
    boxShadow: 'primary',
    borderRadius: {
      _: 'large',
      md: 'xxxLarge',
    },
    color: 'gray.7',
    position: 'relative',
  },
  MailerTitleProps: {
    as: 'h3',
    variant: 'h2',
    color: 'gray.7',
    mb: 4,
  },
  MailerButtonProps: {
    mt: 4,
    variant: 'secondary',
  },
  ...data.contact,
};

export default Contact;
