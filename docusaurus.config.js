// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'WU2rchive',
  tagline: '乌二部资料库',
  favicon: 'img/washu.png',

  // Set the production url of your site here
  url: 'https://wu2rchive.vercel.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans', 'en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/asmireid/wu2rchive/tree/main/',
          // showLastUpdateAuthor: true,
        },
        blog: {
          // showReadingTime: true,
          // feedOptions: {
          //   type: ['rss', 'atom'],
          //   xslt: true,
          // },
          // // Please change this to your repo.
          // // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // // Useful options to enforce blogging best practices
          // onInlineTags: 'warn',
          // onInlineAuthors: 'warn',
          // onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/wu2-social-card.jpg',
      navbar: {
        title: 'WU2rchive',
        logo: {
          alt: 'WashU Logo',
          src: 'img/logo.svg',
        },
        items: [
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'defaultSidebar',
          //   position: 'left',
          //   label: 'docs',
          // },
          { to: '/docs/术语词典', label: '术语词典', position: 'left' },
          { to: '/docs/角色图鉴', label: '角色图鉴', position: 'left' },
          { to: '/docs/编年史', label: '编年史', position: 'left' },
          // { to: '/blog', label: 'Blog', position: 'left' },
          { href: 'https://github.com/asmireid/wu2rchive/?tab=readme-ov-file#wu2rchive', label: '编前需知', position: 'right' },
          {
            href: 'https://github.com/asmireid/wu2rchive/',
            position: 'right',
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '文档',
            items: [
              {
                label: '术语词典',
                to: '/docs/术语词典',
              },
              {
                label: '角色图鉴',
                to: '/docs/角色图鉴',
              },
              {
                label: '编年史',
                to: '/docs/编年史',
              },
            ],
          },
          {
            title: '社群',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/HKHEVTYqXJ',
              },
              {
                label: 'Bangumi',
                href: 'https://bgm.tv/group/ooshinowustl',
              },
            ],
          },
          {
            title: '更多',
            items: [
              // {
              //   label: 'Blog',
              //   to: '/blog',
              // },
              {
                label: 'GitHub',
                href: 'https://github.com/asmireid/wu2rchive/',
              },
              {
                label: '关注神奇的9君谢谢喵',
                to: '/docs/角色图鉴/神奇的9君',
              },
              {
                label: 'WUSTL Canvas（友情链接）',
                href: 'https://wustl.instructure.com',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 乌二部 | WU Album 2`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
