module.exports = {
  title: 'Cognito Wiki',
  tagline: 'A place to collect all the content about AWS Cognito, making it easier for you to get started and dive deep.',
  url: 'https://cognito.wiki',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'bahrmichael',
  projectName: 'cognito-wiki',
  themeConfig: {
    navbar: {
      title: 'Cognito Wiki',
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'feed', label: 'Feed', position: 'left'},
        {
          href: 'https://github.com/bahrmichael/cognito-wiki',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Collaborate',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/bahrmichael/cognito-wiki',
            }
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/bahrdev',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Feed',
              to: 'feed',
            },
            {
              label: 'Legal',
              to: 'legal'
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Michael Bahr, Built with Docusaurus.`,
    },
    algolia: {
      apiKey: '28ee8eaf1208f1e6f5e5869e995641b6',
      indexName: 'cognito',

      // Optional: Algolia search parameters
      searchParameters: {},

      //... other Algolia params
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/bahrmichael/cognito-wiki/edit/master/website/',
        },
        blog: {
          path: 'feed',
          routeBasePath: 'feed',
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/bahrmichael/cognito-wiki/edit/master/website/feed/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap:       {
          cacheTime: 600 * 1000, // 600 sec - cache purge period
          changefreq: 'weekly',
        },
      },
    ],
  ],
};
