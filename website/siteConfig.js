/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: 'IntelLiDrives, Inc.',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'img/intellidrives.png',
    infoLink: 'http://www.intellidrives.com',
    pinned: true,
  },
];

const siteConfig = {
  title: 'IMAC', // Title for your website.
  tagline: 'IntelLiDrives Multi-Axis Motion and Automation Controller with Visual Programming',
  url: 'https://AlSharp.github.io/imac-website', // Your website URL
  baseUrl: '/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'imac-website',
  organizationName: 'AlSharp',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // CNAME file
  cname: 'imac.intellidrives.com',

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {href: "https://imacdemolive.ngrok.io", label: 'Try it now!'},
    {doc: 'tutorial_1', label: 'Tutorial videos'},
    {doc: 'intro', label: 'Manual'},
    {blog: true, label: 'Blog'},
    {page: 'help', label: 'Help'},
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/favicon.png',
  footerIcon: 'img/favicon.png',
  favicon: 'img/favicon.png',

  /* Colors for website */
  colors: {
    primaryColor: '#2E8555',
    secondaryColor: '#205C3B',
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} IntelLiDrives, Inc`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: [
    'https://buttons.github.io/buttons.js',
    'https://raw.githubusercontent.com/AlSharp/imac-website/master/edit_external_link.js'
  ],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/favicon.png',
  twitterImage: 'img/favicon.png',

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
