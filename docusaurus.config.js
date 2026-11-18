
module.exports = {
  title: 'MSUO Documentation',
  tagline: 'Runtime & SDK',
  url: 'https://docs.msuo-runtime.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'MSUO',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docs',
          position: 'left',
          label: 'Documentation',
        },
      ],
    },
  },
};
