import { smoothLinkProps } from '@loyalory/common/src/utils';
import { Link } from 'react-scroll';

import textToMultiline from '@loyalory/common/src/utils/textToMultiline';

import MapMarker from '@loyalory/icons/src/monochrome/MapMarker';
import MobilePhone from '@loyalory/icons/src/monochrome/MobilePhone';
import PaperAirplane from '@loyalory/icons/src/monochrome/PaperAirplane';

import FacebookF from '@loyalory/icons/src/monochrome/FacebookF';
import Instagram from '@loyalory/icons/src/monochrome/Instagram';
import Twitter from '@loyalory/icons/src/monochrome/Twitter';
import Linkedin from '@loyalory/icons/src/monochrome/Linkedin';

import * as Yup from 'yup';
import Welcome from './assets/welcome.jpg';
import Welcome2x from './assets/welcome@2x.jpg';
import AboutUs from './assets/about-us.jpg';
import AboutUs2x from './assets/about-us@2x.jpg';

import Avatar1 from './assets/avatars/avatar-1.jpg';
import Avatar12x from './assets/avatars/avatar-1@2x.jpg';
import Avatar2 from './assets/avatars/avatar-2.jpg';
import Avatar22x from './assets/avatars/avatar-2@2x.jpg';
import Avatar3 from './assets/avatars/avatar-3.jpg';
import Avatar32x from './assets/avatars/avatar-3@2x.jpg';
import Avatar4 from './assets/avatars/avatar-4.jpg';
import Avatar42x from './assets/avatars/avatar-4@2x.jpg';
import Avatar5 from './assets/avatars/avatar-5.jpg';
import Avatar52x from './assets/avatars/avatar-5@2x.jpg';
import Avatar6 from './assets/avatars/avatar-6.jpg';
import Avatar62x from './assets/avatars/avatar-6@2x.jpg';
import Avatar7 from './assets/avatars/avatar-7.jpg';
import Avatar72x from './assets/avatars/avatar-7@2x.jpg';
import Avatar8 from './assets/avatars/avatar-8.jpg';
import Avatar82x from './assets/avatars/avatar-8@2x.jpg';

import FastToMarket from './assets/fast-to-market.svg';
import Customizable from './assets/customizable.svg';
import CostSaving from './assets/cost-saving.svg';

import PricingBasic from './assets/pricing/basic.svg';
import PricingAdvanced from './assets/pricing/advanced.svg';
import PricingExpert from './assets/pricing/expert.svg';

import Article1 from './assets/articles/article-1.jpg';
import Article12x from './assets/articles/article-1@2x.jpg';
import Article2 from './assets/articles/article-2.jpg';
import Article22x from './assets/articles/article-2@2x.jpg';
import Article3 from './assets/articles/article-3.jpg';
import Article32x from './assets/articles/article-3@2x.jpg';
import Article4 from './assets/articles/article-4.jpg';
import Article42x from './assets/articles/article-4@2x.jpg';
import Article5 from './assets/articles/article-5.jpg';
import Article52x from './assets/articles/article-5@2x.jpg';

export default {
  title: 'Home',
  navbar: {
    links: [
      {
        to: '',
        label: 'Home',
      },
      {
        to: 'services',
        label: 'Services',
      },
      {
        to: 'about',
        label: 'About',
      },
      {
        to: 'team',
        label: 'Team',
      },
      {
        to: 'pricing',
        label: 'Pricing',
      },
      {
        to: 'blog',
        label: 'News',
      },
      {
        to: 'contact',
        label: 'Contact',
      },
    ],
    actions: [
      {
        href: '#',
        label: 'Book a demo',
      },
    ],
  },
  welcome: {
    title: 'Mobile loyalty solution for your brand',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu magna pharetra sem ullamcorper bibendum quis et mauris. Phasellus tincidunt iaculis porttitor.',
    actions: [
      {
        label: 'Check our services',
        to: 'services',
        as: Link,
        ...smoothLinkProps,
        variant: 'secondary',
      },
    ],
    img: {
      src: Welcome,
      srcSet: `${Welcome} 1x, ${Welcome2x} 2x`,
    },
    avatars: [
      {
        src: Avatar1,
        srcSet: `${Avatar1} 1x, ${Avatar12x} 2x`,
      },
      {
        src: Avatar2,
        srcSet: `${Avatar2} 1x, ${Avatar22x} 2x`,
      },
      {
        src: Avatar3,
        srcSet: `${Avatar3} 1x, ${Avatar32x} 2x`,
      },
      {
        src: Avatar4,
        srcSet: `${Avatar4} 1x, ${Avatar42x} 2x`,
      },
      {
        src: Avatar5,
        srcSet: `${Avatar5} 1x, ${Avatar52x} 2x`,
      },
    ],
  },
  services: {
    title: 'Our services',
    services: [
      {
        icon: FastToMarket,
        title: 'Fast to market',
        text:
          'Vivamus eleifend nec purus eget rutrum. Cras urna lacus, consectetur ut erat sed, commodo gravida mauris. Sed eu vulputate sapien. Nulla consectetur efficitur congue.',
      },
      {
        icon: Customizable,
        title: 'Customizable',
        text:
          'Vivamus eleifend nec purus eget rutrum. Cras urna lacus, consectetur ut erat sed, commodo gravida mauris. Sed eu vulputate sapien. Nulla consectetur efficitur congue.',
      },
      {
        icon: CostSaving,
        title: 'Cost saving',
        text:
          'Vivamus eleifend nec purus eget rutrum. Cras urna lacus, consectetur ut erat sed, commodo gravida mauris. Sed eu vulputate sapien. Nulla consectetur efficitur congue.',
      },
    ],
    cta: {
      label: 'Request a free demo',
      href: '#',
    },
  },
  about: {
    img: {
      src: AboutUs,
      srcSet: `${AboutUs} 1x, ${AboutUs2x} 2x`,
    },
    title: 'About us',
    text:
      'Nunc nec ultricies quam. Integer iaculis erat id leo consequat ultricies. Pellentesque mattis ultricies rhoncus. Maecenas vehicula efficitur sagittis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam laoreet at erat sit amet efficitur. Nam interdum tellus molestie, elementum felis in, consectetur ipsum. Aenean justo dolor, pretium nec dui eget, vulputate ullamcorper dolor.',
    cta: {
      label: 'Learn more bout us',
      href: '#',
    },
  },
  team: {
    title: 'Meet our team',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu magna pharetra sem ullamcorper bibendum quis et mauris. Phasellus tincidunt iaculis porttitor. Sed ut mi varius, gravida nulla eget, bibendum est. Ut auctor nec erat vitae placerat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    cta: {
      label: 'Contact us',
      href: '#',
    },
    people: [
      {
        avatar: {
          src: Avatar1,
          srcSet: `${Avatar1} 1x, ${Avatar12x} 2x`,
        },
        name: 'Tung Dang',
        position: 'Co-Founder, CEO',
        social: {
          linkedin: '#',
          twitter: '#',
          skype: '#',
        },
      },
      {
        avatar: {
          src: Avatar2,
          srcSet: `${Avatar2} 1x, ${Avatar22x} 2x`,
        },
        name: 'Khanh Quoc',
        position: 'Co-Founder, CEO',
        social: {
          linkedin: '#',
          twitter: '#',
          skype: '#',
        },
      },
      {
        avatar: {
          src: Avatar3,
          srcSet: `${Avatar3} 1x, ${Avatar32x} 2x`,
        },
        name: 'Dong Dang',
        position: 'Co-Founder, CEO',
        social: {
          linkedin: '#',
          twitter: '#',
          skype: '#',
        },
      },
      {
        avatar: {
          src: Avatar4,
          srcSet: `${Avatar4} 1x, ${Avatar42x} 2x`,
        },
        name: 'Hiep Le',
        position: 'President, Investor',
        social: {
          linkedin: '#',
          twitter: '#',
          skype: '#',
        },
      },
      {
        avatar: {
          src: Avatar5,
          srcSet: `${Avatar5} 1x, ${Avatar52x} 2x`,
        },
        name: 'Robert Edwards',
        position: 'Co-Founder, CEO',
        social: {
          linkedin: '#',
          twitter: '#',
          skype: '#',
        },
      },
      {
        avatar: {
          src: Avatar6,
          srcSet: `${Avatar6} 1x, ${Avatar62x} 2x`,
        },
        name: 'Dianne Robertson',
        position: 'Co-Founder, CEO',
        social: {
          linkedin: '#',
          twitter: '#',
          skype: '#',
        },
      },
      {
        avatar: {
          src: Avatar7,
          srcSet: `${Avatar7} 1x, ${Avatar72x} 2x`,
        },
        name: 'Shane Black',
        position: 'Co-Founder, CEO',
        social: {
          linkedin: '#',
          twitter: '#',
          skype: '#',
        },
      },
      {
        avatar: {
          src: Avatar8,
          srcSet: `${Avatar8} 1x, ${Avatar82x} 2x`,
        },
        name: 'Nathan Fox',
        position: 'Co-Founder, CEO',
        social: {
          linkedin: '#',
          twitter: '#',
          skype: '#',
        },
      },
    ],
  },
  pricing: {
    title: 'Pricing',
    prices: {
      currency: '$',
      sections: [
        {
          icon: PricingBasic,
          title: 'Basic',
          price: '9.99',
          period: 'month',
          features: [
            {
              text: 'users',
              prefix: '2',
            },
            {
              text: 'estimates per month',
              prefix: '10',
            },
            {
              text: 'invoices per month',
              prefix: '10',
            },
            {
              text: 'support',
              prefix: 'Basic',
            },
          ],
          button: {
            text: 'Buy basic plan',
            ButtonProps: {
              as: 'a',
              href: '#',
            },
          },
        },
        {
          icon: PricingAdvanced,
          title: 'Advanced',
          price: '19.99',
          period: 'month',
          features: [
            {
              text: 'users',
              prefix: '5',
            },
            {
              text: 'estimates per month',
              prefix: '20',
            },
            {
              text: 'invoices per month',
              prefix: '20',
            },
            {
              text: 'support',
              prefix: 'Basic',
            },
          ],
          button: {
            text: 'Buy advanced plan',
            ButtonProps: {
              as: 'a',
              href: '#',
            },
          },
        },
        {
          icon: PricingExpert,
          title: 'Expert',
          price: '29.99',
          period: 'month',
          features: [
            {
              text: 'users',
              prefix: '10',
            },
            {
              text: 'estimates per month',
              prefix: 'Unlimited',
            },
            {
              text: 'invoices per month',
              prefix: 'Unlimited',
            },
            {
              text: 'support',
              prefix: 'Priority',
            },
          ],
          button: {
            text: 'Buy expert plan',
            ButtonProps: {
              as: 'a',
              href: '#',
            },
          },
        },
      ],
    },
  },
  blog: {
    title: 'Latest news',
    articles: [
      {
        url: '#',
        src: Article1,
        srcSet: `${Article1} 1x, ${Article12x} 2x`,
        date: 'Today',
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        text:
          'Nullam sed tellus nec arcu mollis iaculis. Aliquam eget velit a libero suscipit tempor eget at leo. Vestibulum commodo tempor gravida. Donec dictum nunc at lorem euismod, et faucibus ante consectetur. Nullam porttitor eros in ligula posuere dignissim.',
      },
      {
        url: '#',
        src: Article2,
        srcSet: `${Article2} 1x, ${Article22x} 2x`,
        date: 'Yesterday',
        title: 'Ut ornare augue quis diam vehicula, vitae vulputate mauris',
      },
      {
        url: '#',
        src: Article3,
        srcSet: `${Article3} 1x, ${Article32x} 2x`,
        date: 'Last week',
        title: 'Pellentesque finibus porttitor mauris, nec tempor nulla',
      },
      {
        url: '#',
        src: Article4,
        srcSet: `${Article4} 1x, ${Article42x} 2x`,
        date: '2 weeks ago',
        title: 'Phasellus ornare metus sit amet luctus bibendum',
      },
      {
        url: '#',
        src: Article5,
        srcSet: `${Article5} 1x, ${Article52x} 2x`,
        date: 'Last month',
        title: 'Donec auctor ante sit amet elit pretium condimentum',
      },
    ],
    cta: {
      label: 'Read all news on Medium',
      href: '#',
    },
  },
  contact: {
    title: 'Contact us',
    sections: [
      {
        icon: MapMarker,
        text: textToMultiline`1039 CMT8 Street, Tan Binh District\nHo Chi Minh City, 70000\nVietnam`,
      },
      {
        icon: MobilePhone,
        text: '(84)949 840 370',
      },
      {
        icon: PaperAirplane,
        text: 'support@loyalory.com',
      },
    ],
    socialLinks: [
      {
        icon: FacebookF,
        href: '#',
        title: 'Facebook',
      },
      {
        icon: Instagram,
        href: '#',
        title: 'Instagram',
      },
      {
        icon: Twitter,
        href: '#',
        title: 'Twitter',
      },
      {
        icon: Linkedin,
        href: '#',
        title: 'Linkedin',
      },
    ],
    mailer: {
      title: 'Request a demo',
      cta: 'Send request',
      validationSchema: Yup.object({
        name: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
        company: Yup.string().required('Required'),
        email: Yup.string().email('Must be an email').required('Required'),
        date: Yup.string().required('Required'),
      }),
      // eslint-disable-next-line no-undef
      onSubmit: values => window.alert(`Form sent with values ${JSON.stringify(values)}`),
      fields: [
        {
          name: 'name',
          label: 'First name',
          placeholder: 'ie. John Doe',
          initialValue: '',
        },
        {
          name: 'company',
          label: 'Company',
          placeholder: 'i.e. Best Trade Ltd.',
          initialValue: '',
        },
        {
          name: 'email',
          label: 'E-mail',
          placeholder: 'i.e. john.doe@email.com',
          type: 'email',
          initialValue: '',
        },
        {
          name: 'date',
          label: 'Date and time',
          placeholder: 'Choose',
          type: 'datetime-local',
          initialValue: '',
        },
      ],
    },
  },
  footer: {
    links: [
      {
        label: 'Disclaimer',
        href: '#',
      },
      {
        label: 'Terms & conditions',
        href: '#',
      },
    ],
  },
  copyright: '© 2021 Loyalory Team',
};
