const { appendPath, getFirstContent } = require('./src/utils');
const { CATEGORY_SLUGS } = require('./src/constants');

const docNavs = Object.entries(CATEGORY_SLUGS).map(([category, categorySlug]) => ({
  to: getFirstContent(category),
  activeBasePath: appendPath('docs', category),
  label: categorySlug,
}));

const docFooters = docNavs.map(({ to, label }) => ({ to, label }));

module.exports = {
  title: 'DavidYang TIL',
  tagline: '오늘의 배운 것',
  url: 'https://github.com/DavidYang2149',
  baseUrl: '/TIL/',
  onBrokenLinks: 'throw',
  projectName: 'til',
  organizationName: 'davidyang2149',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/knight.ico',
  themeConfig: {
    navbar: {
      title: 'Today I Learned',
      logo: {
        alt: 'Program Knight',
        src: 'img/kisa.svg',
      },
      items: [
        {
          label: 'Docs',
          position: 'left',
          items: [...docNavs],
        },
        { to: 'blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/DavidYang2149/TIL',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [...docFooters],
        },
        {
          title: 'Personal Links',
          items: [
            {
              label: 'davidyang2149.dev',
              href: 'https://davidyang2149.dev',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/davidyang2149',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub(TIL)',
              href: 'https://github.com/DavidYang2149/TIL',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
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
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
