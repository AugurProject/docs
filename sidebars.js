/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  docsSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Augur v1',
      collapsed: false,
      items: [
        'v1/index',
        {
          type: 'link',
          label: 'Legacy Docs',
          href: 'https://v1-docs.augur.net'
        }
      ]
    },
    {
      type: 'category',
      label: 'Augur v2',
      collapsed: false,
      items: [
        {type: 'autogenerated', dirName: 'v2'},
        {
          type: 'link',
          label: 'End-User Help',
          href: 'https://augur.gitbook.io/help-center/'
        }
      ]
    },
    {
      type: 'category',
      label: 'Turbo / Sportsbook',
      collapsed: false,
      items: [
        {type: 'autogenerated', dirName: 'turbo'},
        {
          type: 'link',
          label: 'End-User Help',
          href: 'https://help.augur.net'
        }
      ]
    }
  ],
};

module.exports = sidebars;