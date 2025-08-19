// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Guide',
  tagline: 'Airbnb One',
  url: 'https://airbnbtwo.vercel.app/',
  baseUrl: '/',
  onBrokenLinks: 'ignore', // Change this to 'ignore'
  onBrokenMarkdownLinks: 'warn', // This will only warn for broken markdown links
  favicon: 'img/keys.png',

  // GitHub pages deployment config.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            '#',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            '#',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Guide',
        logo: {
          alt: 'Airbnb One',
          src: 'img/airbnb.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Access',
          },
          {to: '/blog', label: 'Photos', position: 'left'},
          {
            href: 'https://airbnbtwo.vercel.app/img/map.png',
            label: 'Map',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Access',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Photos',
                href: '/blog',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Map',
                href: 'https://airbnbtwo.vercel.app/img/map.png',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Airbnb One, Inc. Built by B&R.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
